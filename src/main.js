import Button from "./components/button";
import DishesTable from "./components/dishes-table";
import Input from "./components/input";
import initialDishes from "./db";
import state from "./state";

const app = document.querySelector("#app");

// Initialize with our data
state.setState({ dishes: initialDishes });

function render() {
  const { dishes } = state.getState();

  app.innerHTML = `
    <form>
      ${Input("name", "Dish name")}
      ${Input("assignedTo", "Assigned to")}
      ${Input("estimatedTime", "Estimated time")}
      ${Input("temperature", "Temperature")}
      ${Button("submit", "", "handleSubmit()", "Add Dish")}
    </form>
    
    ${DishesTable(dishes)}
  `;
}

state.subscribe(render);
render();

document.addEventListener("submit", (event) => {
  if (event.target.id === "dishForm") {
    event.preventDefault();
    const form = event.target;
    state.addDish(
      form.name.value,
      "not started",
      form.assignedTo.value,
      form.estimatedTime.value,
      form.temperature.value,
    );
    form.reset();
  }
});
