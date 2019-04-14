import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import App from "./App";
import { loadGoals } from "./actions/goalsActions";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();
store.dispatch(loadGoals());
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
