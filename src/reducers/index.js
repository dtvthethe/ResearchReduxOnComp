import { combineReducers } from "redux";
import { calReducer } from "./cal";

export const myReducer = combineReducers({
  calReducer,
});
