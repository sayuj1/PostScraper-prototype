import React, { lazy, Suspense } from "react";
import "./App.css";
import Layouts from "./components/layouts/Layouts";
// const Layouts = lazy(() => import("./components/layouts/Layouts"));

const App = () => {
  return (
    <div className="App">
      <Layouts />
    </div>
  );
};

export default App;
