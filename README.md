# Lab 5 - Starter

Atharva Kedia
A17478027

### 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?

**No**, a unit test would not be appropriate for testing the full "message" feature because this functionality typically involves multiple components such as user input, backend services, and network communication. Since unit tests are designed to test isolated units of code, a better approach would be to use **integration** or **end-to-end tests** that can verify the interaction between these components.

---

### 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

**Yes**, this feature is suitable for a unit test because it can be isolated to a specific function or component that validates message length. A unit test can effectively verify that input exceeding 80 characters is rejected and that input within the limit is accepted.

https://atharvakedia.github.io/Lab5/expose.html

https://atharvakedia.github.io/Lab5/explore.html
