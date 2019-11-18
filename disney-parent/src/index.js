import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
