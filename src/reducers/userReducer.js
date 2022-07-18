const initialState = { user: "" };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET USER":
      return { user: action.payload };
    case "SET ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
