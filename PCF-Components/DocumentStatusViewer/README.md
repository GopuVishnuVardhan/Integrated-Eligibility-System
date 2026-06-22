# Document Status Viewer PCF

## Business Case
Verifying documentation is a critical part of Eligibility. Instead of checking multiple boolean fields (Yes/No) scattered across a form, this component provides a single, unified "dashboard" card on the form that clearly shows which documents are pending and which are verified.

## Pros and Cons
**Pros:**
- Clean, visually distinct badges (Green for Verified, Yellow for Pending).
- Saves vertical space on the form by grouping boolean fields logically.

**Cons:**
- Hardcoded to check exactly three specific boolean attributes (ID, Transcripts, Income). Adding a new required document type requires a code update.

## Comparison
- **Standard TwoOptions Field**: Renders as a toggle or checkbox. Requires reading text to understand state.
- **PCF**: Uses color psychology to instantly communicate readiness to the case worker.
