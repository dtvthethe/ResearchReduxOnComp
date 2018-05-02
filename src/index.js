import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { myStore } from "./stores";
import Cal from "./components/cal";

const App = () => (
  <Provider store={myStore}>
    <Cal />
  </Provider>
);

render(<App />, document.getElementById("root"));
