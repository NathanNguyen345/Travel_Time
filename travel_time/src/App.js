import React from "react";
import "./App.css";
import Landing from "./component/Landing/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LocationSelect from "./component/Location/LocationSelect";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/Location/:city" component={LocationSelect} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
