export default (() => {
  let state = { dishes: [] };
  const listeners = [];

  return {
    getState: state,
    setState(newState) {
      state = newState;
      listeners.map((listener) => listener(state));
    },
    subscribe(listener) {
      listeners.push(listener);
    },
    addDish(name, status, assignedTo, estimatedTime, temperature) {
      state.dishes.push({
        name,
        status,
        assignedTo,
        estimatedTime,
        temperature,
      });
    },
  };
})();
