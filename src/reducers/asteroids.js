const asteroidsList = (state = 0, action) => {
  switch (action.type) {
    // list action reducer
    case "LIST":
      return (state = action.payload);
    // Search filtered list action reducer
    case "FILTEREDLIST":
      return (state = action.payload);
      //default case
    default:
      return state;
  }
};
export default asteroidsList;
