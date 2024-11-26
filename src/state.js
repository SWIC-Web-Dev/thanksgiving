export default (() => {
  let state = { dishes: [] };
  const listeners = [];

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      listeners.forEach((listener) => listener(state));
    },
    subscribe(listener) {
      listeners.push(listener);
    },
    addDish({ name, assignedTo, estimatedTime, temperature }) {
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
      this.setState({ dishes: newDishes });
    },
  };
})();
