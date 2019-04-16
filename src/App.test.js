import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Need to fix this so it works with authorization
xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
