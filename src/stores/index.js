import { createStore } from "redux";
import { myReducer } from "../reducers";

export const myStore = createStore(myReducer);
