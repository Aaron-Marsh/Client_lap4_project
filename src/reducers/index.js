import { combineReducers } from "redux";

import loggedInReducer from "./loggedInReducer";
import footerReducer from "./footerReducer";

const allReducers = combineReducers({
  loggedIn: loggedInReducer,
  footerClose: footerReducer,
});
export default allReducers;
