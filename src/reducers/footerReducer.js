const footerReducer = (state = false, action) => {
  switch (action.type) {
    case "close":
      return !state;

    default:
      return state;
  }
};

export default footerReducer;
