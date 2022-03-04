import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { UserContextProvider } from "./context";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
