import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
Notification.requestPermission();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
