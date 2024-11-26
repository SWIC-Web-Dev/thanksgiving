# Thanksgiving Reactivity Assignment (30 Points)

[Overview Video](https://somup.com/cZXODAJC7N)

## Implementation (12 points)

- Working state management implementation (3 points)
- Proper component structure and reuse (2 points)
- Form handling and event delegation (2 points)
- Styling with Tailwind (5 points)
  - Clean, centered desktop layout (max-width, margins, padding) (2 points)
  - Consistent spacing and typography (1 point)
  - Interactive elements (hover states, transitions) (1 point)
  - Professional table styling (1 point)

Note: While we're focusing on desktop layout for this assignment, responsive design would be important for a production application. Feel free to explore responsive Tailwind classes as a future enhancement!

## Written Reflection (13 points)

Your reflection should be thorough and demonstrate understanding of core concepts. Remember that the majority of points come from showing your understanding, not just having working code!

### Core JavaScript Concepts (5 points)

- What is an IIFE? Explain why we use it in our state management system. Include an example of how it creates private scope.
- Describe how closure works in our state management system. How does it help us maintain and protect our state?
- What is scope and how does it play a role in both our IIFE and closure implementation?
- How does our component structure (like `Button` and `DishRow`) demonstrate function composition and reusability?

### Development Process (4 points)

- If you used CoPilot or Claude:
  - What prompts did you use?
  - How did you refine these prompts based on the responses?
  - How did you verify the AI suggestions were correct?
- What parts of the MDN documentation or class materials did you reference?
- What debugging challenges did you face and how did you solve them?
- Starting from the initial code:
  - What improvements did you make to the component structure?
  - How did you handle the form submission and state updates?

### Reactivity Understanding (4 points)

- Explain how our state management system ensures the UI stays in sync with our data
- How does the `subscribe` function help manage updates?
- Why is it important to use the state management methods instead of directly modifying data?

## Git Commit Guidelines (5 points)

Write clear, descriptive commit messages that explain WHY changes were made, not just WHAT changed.

Each commit should:

- Start with a verb (Add, Update, Fix, Refactor, etc.)
- Explain the purpose of the change
- Be focused on a single responsibility

Good examples:

- "Add state management using IIFE for data privacy"
- "Implement form submission with event delegation"
- "Refactor Button component to use object parameters"
- "Update table styles for better visual hierarchy"

Bad examples:

- "Update code"
- "Fix stuff"
- "WIP"
- "Changes from last night"

Aim for 5-10 focused commits that tell the story of your development process.

## Optional Extra Credit (5 points)

Add a feature to the application, such as:

- Ability to mark dishes as complete
- Filtering dishes by status
- Sorting dishes by estimated time

Explain how you maintained the state management patterns while adding your feature.

## Note

While AI tools are allowed and encouraged, your reflection should demonstrate your understanding of the concepts. Simply getting the code to work is worth less than showing you understand why and how it works!

## Helpful Tips?

1. State Management

   - Review the bank vault analogy from class - your state management should follow similar principles
   - Remember that all UI updates should flow through your state system

2. Component Structure

   - Think of each component as a template factory that takes data and returns HTML
   - Look for patterns in the UI that can be reused (like table rows)

3. Styling Tips

   - Use `max-w-4xl mx-auto` for a clean centered layout
   - Add `transition-colors` to interactive elements
   - Consider using Tailwind's `space-y-` utilities for consistent form spacing

4. Common Gotchas

   - Don't modify state directly - always use your state management methods
   - Remember to handle form submission with `preventDefault()`

5. Event Listener Tips:

- Use event delegation on the form (listen at the form level instead of on individual buttons)
- Check event.target.id or other identifiers to handle specific elements
- Remember event listeners persist between renders - be careful about duplicates
- Example pattern:

  ```js
  document.addEventListener("submit", (event) => {
    if (event.target.id === "dishForm") {
      event.preventDefault();
      // Handle the form submission here
    }
  });
  ```

## Additional Helper Snippets

### State Management Template

```js
export default (() => {
  let state = { dishes: [] };
  const listeners = [];

  return {
    getState() {
      return state;
    },
    // Add your methods here...
  };
})();
```

### Component Template (using object parameter for clean code)

```js
// Instead of multiple parameters, we use a single object parameter
// This is cleaner and more maintainable
export default function DishRow({ name, status, assignedTo }) {
  return `
    <div class="...">${name} - ${status}</div>
  `;
}

// Single usage:
DishRow({
  name: "Turkey",
  status: "cooking",
  assignedTo: "Dad",
});

// Using with array map:
const dishes = [
  { name: "Turkey", status: "cooking", assignedTo: "Dad" },
  { name: "Pie", status: "not started", assignedTo: "Mom" },
];

// This works because map passes each object to our component
dishes.map((dish) => DishRow(dish)).join("");
```
