import { combineReducers } from "redux";

import loggedInReducer from "./loggedInReducer";
import footerReducer from "./footerReducer";
import serverReducer from "./serverReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  user: userReducer,
  loggedIn: loggedInReducer,
  footerClose: footerReducer,
  serverReducer: serverReducer,
});
export default allReducers;
