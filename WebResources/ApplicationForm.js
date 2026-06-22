var GVV = GVV || {};
GVV.StudentBenefits = GVV.StudentBenefits || {};

/**
 * Form context logic for the Application entity.
 */
GVV.StudentBenefits.ApplicationForm = (function () {

    /**
     * Triggered on the form OnLoad event.
     * @param {Object} executionContext 
     */
    function onLoad(executionContext) {
        var formContext = executionContext.getFormContext();

        // Attach OnChange event to the Application Type field
        var typeAttribute = formContext.getAttribute("gvv_applicationtype");
        if (typeAttribute != null) {
            typeAttribute.addOnChange(onApplicationTypeChanged);
        }

        // Initialize form state
        applyFormRules(formContext);
    }

    /**
     * Triggered when the Application Type field is changed.
     * @param {Object} executionContext 
     */
    function onApplicationTypeChanged(executionContext) {
        var formContext = executionContext.getFormContext();
        applyFormRules(formContext);
    }

    /**
     * Applies business rules to show/hide fields and set requirements.
     * @param {Object} formContext 
     */
    function applyFormRules(formContext) {
        var typeAttribute = formContext.getAttribute("gvv_applicationtype");
        if (typeAttribute == null) return;

        var typeValue = typeAttribute.getValue();
        // Option Set Values: 1 = Cash Benefit, 2 = Scholarship, 3 = Monthly Expenses

        var tabScholarship = formContext.ui.tabs.get("tab_scholarship_details");
        var fieldUniversity = formContext.getAttribute("gvv_universityname");
        var fieldGpa = formContext.getAttribute("gvv_currentgpa");

        if (typeValue === 2) {
            // Scholarship selected
            if (tabScholarship) tabScholarship.setVisible(true);
            if (fieldUniversity) fieldUniversity.setRequiredLevel("required");
            if (fieldGpa) fieldGpa.setRequiredLevel("required");
        } else {
            // Cash Benefit or Monthly Expenses selected
            if (tabScholarship) tabScholarship.setVisible(false);
            if (fieldUniversity) fieldUniversity.setRequiredLevel("none");
            if (fieldGpa) fieldGpa.setRequiredLevel("none");
        }
    }

    return {
        OnLoad: onLoad
    };
})();
