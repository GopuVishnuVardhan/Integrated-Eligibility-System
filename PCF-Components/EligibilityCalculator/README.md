# Eligibility Calculator PCF

## Business Case
Case workers frequently need to determine if an applicant meets the poverty threshold. Instead of manually dividing income by household size, this component automatically does the math on the fly and presents a visual "score" and category (e.g., Highly Eligible).

## Pros and Cons
**Pros:**
- Real-time visual feedback without needing a page refresh.
- Reduces human error in manual calculations.

**Cons:**
- Calculation logic is embedded in the UI layer (Note: We use a C# Plugin in this repo for the actual backend source-of-truth).

## Comparison
- **Calculated Fields / Rollup Fields**: These don't provide advanced visual formatting (colors/badges) and sometimes have delay.
- **JavaScript Web Resources**: Injecting HTML into forms is unsupported. PCF provides a supported way to render complex UI bound directly to fields.
