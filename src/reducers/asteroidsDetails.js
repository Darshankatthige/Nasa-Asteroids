const asteroidsDetails = (state = 0, action) => {
    switch (action.type) {
      case "DETAILS":
        return state = action.payload;
      default:
        return state;
    }
  };
  export default asteroidsDetails;