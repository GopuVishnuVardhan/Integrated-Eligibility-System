# Approval Timeline PCF

## Business Case
In a Case Management system, applications go through strict life cycles (e.g., Intake -> Under Review -> Finance -> Approved). A visual timeline instantly communicates to the case worker exactly where the application sits without having to interpret status reasons.

## Pros and Cons
**Pros:**
- Instantly readable visual state.
- Highly customizable to specific organizational lifecycles.

**Cons:**
- Tightly coupled to specific statuses (requires code changes if a new stage is added).

## Comparison
- **Business Process Flow (BPF)**: BPFs are the standard way to do this. However, BPFs take up significant vertical space and enforce rigid stage-gating. This PCF is ideal for scenarios where the lifecycle is driven by backend integrations and you just need a lightweight visual indicator.
