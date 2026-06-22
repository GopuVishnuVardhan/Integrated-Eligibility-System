# Budget Allocator PCF

## Business Case
When a student is granted a $5,000 scholarship, the funds often need to be restricted to specific categories (e.g., $3,000 for Tuition, $1,500 for Housing, $500 for Books). This slider component allows a finance worker to easily distribute the total amount, visually ensuring they don't over-allocate or under-allocate the funds.

## Pros and Cons
**Pros:**
- Interactive and prevents user error (shows remaining balance dynamically).
- Binds to 4 separate currency fields simultaneously.

**Cons:**
- Sliders can be imprecise for very exact dollar amounts (e.g., $1,234.56).

## Comparison
- **Canvas App**: Embedding a Canvas App to handle complex allocations is an option, but it incurs a heavy load time penalty.
- **PCF**: Instant load time and native-feeling interactions.
