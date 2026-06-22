using System;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace IntegratedEligibilitySystem.Plugins
{
    /// <summary>
    /// Calculates the eligibility score and auto-approves if criteria are met.
    /// Trigger: Pre-Operation on Create and Update of "gvv_application"
    /// </summary>
    public class CalculateEligibilityPlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            // Extract the tracing service for use in debugging sandboxed plug-ins.
            ITracingService tracingService =
                (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // Obtain the execution context from the service provider.
            IPluginExecutionContext context = (IPluginExecutionContext)
                serviceProvider.GetService(typeof(IPluginExecutionContext));

            // The InputParameters collection contains all the data passed in the message request.
            if (context.InputParameters.Contains("Target") &&
                context.InputParameters["Target"] is Entity)
            {
                // Obtain the target entity from the input parameters.
                Entity entity = (Entity)context.InputParameters["Target"];

                // Verify that the target entity represents an application.
                if (entity.LogicalName != "gvv_application")
                    return;

                try
                {
                    tracingService.Trace("CalculateEligibilityPlugin: Starting processing.");

                    // We need to merge target attributes with pre-image (if update)
                    Entity preImage = context.PreEntityImages.Contains("PreImage") 
                        ? context.PreEntityImages["PreImage"] 
                        : new Entity("gvv_application");

                    decimal householdIncome = GetAttributeValue<Money>(entity, preImage, "gvv_householdincome")?.Value ?? 0m;
                    int householdSize = GetAttributeValue<int>(entity, preImage, "gvv_householdsize");
                    if (householdSize == 0) householdSize = 1; // Prevent div by zero
                    
                    decimal requestedAmount = GetAttributeValue<Money>(entity, preImage, "gvv_requestedamount")?.Value ?? 0m;
                    
                    // Simple business rule: Max income per capita for scholarship is $25,000
                    decimal incomePerCapita = householdIncome / householdSize;
                    
                    int eligibilityScore = 0;

                    if (incomePerCapita < 10000)
                        eligibilityScore = 100; // Highly eligible
                    else if (incomePerCapita >= 10000 && incomePerCapita <= 25000)
                        eligibilityScore = 75;  // Moderately eligible
                    else
                        eligibilityScore = 20;  // Likely ineligible

                    // Set the score on the target entity so it saves to the database
                    entity["gvv_eligibilityscore"] = eligibilityScore;

                    tracingService.Trace($"Calculated Score: {eligibilityScore} for Income per capita: {incomePerCapita}");

                    // Auto-approval logic for Cash Benefits under $500
                    int applicationType = GetAttributeValue<OptionSetValue>(entity, preImage, "gvv_applicationtype")?.Value ?? 0;
                    // Assuming 1 = Cash Benefit
                    if (applicationType == 1 && requestedAmount <= 500 && eligibilityScore == 100)
                    {
                        entity["gvv_status"] = new OptionSetValue(2); // Assuming 2 = Approved
                        tracingService.Trace("Auto-approved low-value cash benefit request.");
                    }
                }
                catch (Exception ex)
                {
                    tracingService.Trace("CalculateEligibilityPlugin: {0}", ex.ToString());
                    throw new InvalidPluginExecutionException("An error occurred in CalculateEligibilityPlugin.", ex);
                }
            }
        }

        private T GetAttributeValue<T>(Entity target, Entity preImage, string attributeName)
        {
            if (target.Contains(attributeName))
            {
                return target.GetAttributeValue<T>(attributeName);
            }
            if (preImage.Contains(attributeName))
            {
                return preImage.GetAttributeValue<T>(attributeName);
            }
            return default(T);
        }
    }
}
