import { combineReducers } from "redux";
import product from "./productReducer";
import filter from "./filterReducer";

const compareApp = combineReducers({
  product,
  filter,
});

export default compareApp;
