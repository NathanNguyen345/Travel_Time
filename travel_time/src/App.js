import React from "react";
import "./App.css";
import Landing from "./component/Landing/Landing";
import About from "./component/About/About";
import Location from "./component/Location/Location";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Location />
    </div>
  );
}

export default App;
