import { combineReducers } from "redux";

import loggedInReducer from "./loggedInReducer";
import footerReducer from "./footerReducer";
import serverReducer from "./serverReducer"

const allReducers = combineReducers({
  loggedIn: loggedInReducer,
  footerClose: footerReducer,
  serverReducer: serverReducer,
});
export default allReducers;
