const loggedInReducer = (state = false, action) => {
  switch (action.type) {
    case "change":
      return !state;

    default:
      return state;
  }
};

export default loggedInReducer;
