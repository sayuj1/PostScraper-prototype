import React from "react";
// import "./App.css";
import Layouts from "./components/layouts/Layouts";
import UserState from "./context/userContext/UserState";

const App = () => {
  return (
    <div className="App">
      <UserState>
        <Layouts />
      </UserState>
    </div>
  );
};

export default App;
