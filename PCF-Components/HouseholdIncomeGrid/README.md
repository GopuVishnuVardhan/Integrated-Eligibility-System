# Household Income Grid PCF

## Business Case
Eligibility for Cash Benefits is strictly tied to household size and total income. Instead of creating a separate "Household Member" child entity and using a standard subgrid (which requires navigating away to create records), this component stores the data as a lightweight JSON string directly on the Application record. It provides an inline, editable grid for blazing-fast data entry.

## Pros and Cons
**Pros:**
- Extremely fast data entry (no popups or new windows).
- Does not consume relational database storage (stored as JSON text).

**Cons:**
- Because it is stored as JSON, you cannot easily run standard Dataverse views or reports on individual household members.
- Limited validation compared to a full Dataverse entity.

## Comparison
- **Standard Subgrid**: Heavy, requires relational modeling, slower data entry.
- **PCF JSON Grid**: Perfect for unstructured or semi-structured data that doesn't need to be queried individually but is crucial for the parent record.
