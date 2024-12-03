import Button from "./components/button";
import DishesTable from "./components/dishes-table";
import Input from "./components/input";
import initialDishes from "./db";
import state from "./state";

const app = document.querySelector("#app");

// Initialize with our data
state.setState({ dishes: initialDishes });

function render() {
  // Destructure the known property from the state
  const { dishes } = state.getState();

  const formFields = [
    { id: "name", placeholder: "Dish name" },
    { id: "assignedTo", placeholder: "Assigned to" },
    { id: "estimatedTime", placeholder: "Estimated time" },
    { id: "temperature", placeholder: "Temperature" },
  ];

  app.innerHTML = `
    <div class="max-w-4xl mx-auto p-4">
      <form id="dishForm" class="space-y-4 mb-8">
        ${formFields
          .map((field) =>
            Input({
              ...field,
              additionalClasses: "mb-2",
            }),
          )
          .join("")}
        
          ${Button({
            type: "submit",
            additionalClasses:
              "w-full bg-indigo-500 text-white px-4 py-2 hover:bg-indigo-600",
            text: "Add Dish",
          })}
      </form>
      
      ${DishesTable(dishes)}
    </div>
  `;
}

// We want the render function to run with the new state every time it changes
state.subscribe(render);

render();

document.addEventListener("click", (event) => {
  state.deleteDish(event.target.closest("tr").dataset.dish);
});

// Using event delegation for form submission
document.addEventListener("submit", (event) => {
  if (event.target.id === "dishForm") {
    event.preventDefault();
    const form = event.target;

    // These come from the input ids. We know they exist because we created them.
    state.addDish({
      name: form.name.value,
      assignedTo: form.assignedTo.value,
      estimatedTime: form.estimatedTime.value,
      temperature: form.temperature.value,
    });
  }
});
