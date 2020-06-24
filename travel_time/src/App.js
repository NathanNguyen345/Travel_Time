import React, { useContext, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./component/Landing/Landing";
import LocationSelect from "./component/Location/LocationSelect";
import Login from "./component/Login/Login";

import UserInputContext from "./component/context/userInputContext";
import UserInputReducer from "./component/context/userInputReducer";
import UserLoginContext from "./component/context/userLoginContext";
import UserLoginReducer from "./component/context/userLoginReducer";

function App() {
  // User Input Context
  const userInputInitialState = useContext(UserInputContext);
  const [inputState, inputDispatch] = useReducer(
    UserInputReducer,
    userInputInitialState
  );

  // User Login Context
  const userLoginInitialState = useContext(UserLoginContext);
  const [loginState, loginDispatch] = useReducer(
    UserLoginReducer,
    userLoginInitialState
  );

  return (
    <Router>
      <UserLoginContext.Provider value={{ loginState, loginDispatch }}>
        <UserInputContext.Provider value={{ inputState, inputDispatch }}>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/Location/:city" component={LocationSelect} />
              <Route path="/Login" exact component={Login} />
            </Switch>
          </div>
        </UserInputContext.Provider>
      </UserLoginContext.Provider>
    </Router>
  );
}

export default App;
