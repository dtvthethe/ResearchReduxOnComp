import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { myReducer } from "./reducers";
import Cal from "./components/cal";

let myStore = createStore(myReducer);

const App = () => (
  <Provider store={myStore}>
    <Cal />
  </Provider>
);

render(<App />, document.getElementById("root"));
