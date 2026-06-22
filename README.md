# Integrated Eligibility System (Student Benefits)

This repository demonstrates a complete, enterprise-grade Microsoft Power Platform architecture tailored for Student Case Management (Cash Benefits, Scholarships, and Monthly Expenses).

## Business Scenario
Students require financial assistance for various needs such as scholarships, regular cash benefits, or living expenses. An "Integrated Eligibility System" manages the intake, review, and disbursement of these funds.
- **Portal Intake**: Students submit their applications via an external portal (simulated here via a React Web App).
- **Case Work**: Case workers inside Dynamics 365 review the applications, verify documents, and allocate funds.
- **Automated Processing**: Backend logic calculates eligibility based on strict federal/state rules and routes the application accordingly.

## Repository Structure & Technologies Used
This repository highlights a multi-disciplinary approach to Power Platform development:

1. **Student-Benefits-Portal (React Web App)**: A custom-built student portal demonstrating front-end UX (TypeScript, Vite, Tailwind).
2. **PCF-Components (TypeScript/React)**: 5 custom Power Apps Component Framework controls that transform standard Dataverse forms into highly visual workspaces. Includes Unmanaged Solution ZIP files ready for import.
3. **Plugins (C#)**: Server-side business logic. The `CalculateEligibilityPlugin` intercepts Dataverse pipeline execution to automatically score applications based on household income.
4. **WebResources (JavaScript)**: Client-side form scripting (`ApplicationForm.js`) to dynamically adjust the UI based on the selected benefit type.

## Flow of Business
1. **Intake**: Student logs into the portal and submits an application (Income, Household Size, Requested Amount).
2. **Pre-Operation Calculation**: The C# Plugin calculates the per-capita income and assigns an "Eligibility Score" before the record is saved.
3. **Verification**: The case worker opens the application in D365. The `DocumentStatusViewer` PCF component visually flags missing documents.
4. **Review & Allocation**: The case worker uses the `BudgetAllocator` PCF to divide the approved total across Tuition, Housing, and Books. The `ApprovalTimeline` component visually tracks the status.
