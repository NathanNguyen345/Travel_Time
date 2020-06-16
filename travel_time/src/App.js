import React, { useReducer } from "react";
import "./App.css";
import Landing from "./component/Landing/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LocationSelect from "./component/Location/LocationSelect";

export const ImageDataContext = React.createContext();

const initialImageDataState = {
  place: "",
};

const imageDataReducer = (state, action) => {
  switch (action.type) {
    case "location":
      state.place = action.value;
      return { ...state };
    case "exit":
      return initialImageDataState;
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(imageDataReducer, initialImageDataState);

  return (
    <Router>
      <ImageDataContext.Provider
        value={{ imgDataState: state, imgDataDispatch: dispatch }}
      >
        <div className="App">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/Location/:city" component={LocationSelect} />
          </Switch>
        </div>
      </ImageDataContext.Provider>
    </Router>
  );
}

export default App;
