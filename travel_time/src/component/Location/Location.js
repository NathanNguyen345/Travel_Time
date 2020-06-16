import React, { useReducer } from "react";
import classes from "./Location.module.css";
import LocationItem from "./LocationItem";
import LocationSelect from "./LocationSelect";

export const ImageDataContext = React.createContext();

const initialImageDataState = {
  place: "",
  visible: false,
};

const imageDataReducer = (state, action) => {
  switch (action.type) {
    case "location":
      state.place = action.value;
      state.visible = true;
      return { ...state };
    case "exit":
      return state;
    default:
      return;
  }
};

function Location() {
  const [state, dispatch] = useReducer(imageDataReducer, initialImageDataState);

  return (
    <ImageDataContext.Provider
      value={{ imgDataState: state, imgDataDispatch: dispatch }}
    >
      <div className={`${classes.location_container}`}>
        <div className={`${classes.location_grid}`}>
          <div className={`${classes.grid_middle}`}>
            <div className={`${classes.flex} test`}>
              <LocationItem city={"Toronto"} id={1} />
              <LocationItem city={"Seattle"} id={1} />
              <LocationItem city={"Portland"} id={1} />
              <LocationItem city={"Los Angeles"} id={1} />
              <LocationItem city={"San Jose"} id={1} />
            </div>
          </div>
        </div>
        <LocationSelect />
      </div>
    </ImageDataContext.Provider>
  );
}

export default Location;
