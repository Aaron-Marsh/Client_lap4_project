const initialState = {
  data: {
    username: "",
    email: "",
    about_me: "",
    has_read: [],
    wants_to_read: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET USER":
      return { ...state, data: action.payload };
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
