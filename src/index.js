import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<div style={{ fontSize: "50px" }}>Loading App1....</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
