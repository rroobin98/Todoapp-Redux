import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createReduxModule, Provider } from "hooks-for-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);