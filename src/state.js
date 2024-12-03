export default (() => {
  // Establishes private state
  let state = { dishes: [] };

  // List of listeners to be called when the state changes
  const listeners = [];

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;

      // Call all listeners to notify them that the state has changed
      listeners.forEach((listener) => {
        listener(state);
      });
    },
    subscribe(listener) {
      listeners.push(listener);
    },
    addDish({ name, assignedTo, estimatedTime, temperature }) {
      // Update the state by mixing the new dish with the existing dishes
      const newDishes = [
        ...state.dishes,
        {
          name,
          status: "not started",
          assignedTo,
          estimatedTime,
          temperature,
        },
      ];

      // Update the state
      this.setState({ dishes: newDishes });
    },
    deleteDish(dishId) {
      // Filter out the dish with the given name
      const newDishes = state.dishes.filter(
        // * Be sure to compare the same type of values
        (dish) => dish.id !== Number(dishId),
      );

      this.setState({ dishes: newDishes });
    },
  };
})();
