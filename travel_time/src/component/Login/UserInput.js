import React, { useRef, useState } from "react";
import classes from "./Login.module.css";
import { gsap } from "gsap";

function UserInput(props) {
  const { labelName, dispatch } = props;
  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const tl = new gsap.timeline();

  const inputClick = () => {
    tl.to(inputRef.current, { x: "100%", duration: 0.5 }).to(
      labelRef.current,
      { y: "-20px", duration: 1 },
      "-=1"
    );
  };

  const inputUnclick = () => {
    if (inputValue === "") {
      tl.to(inputRef.current, { x: "0%", duration: 0.5 }).to(
        labelRef.current,
        { y: "0px", duration: 1 },
        "-=1"
      );
    }
  };

  return (
    <React.Fragment>
      <div className={classes.user_input_container}>
        <div className={classes.form_label_container} ref={labelRef}>
          <label>{labelName}</label>
        </div>
        <div className={classes.form_input_container}>
          <input
            type={
              labelName === "Password" || labelName === "Confirm Password"
                ? "password"
                : "text"
            }
            onFocus={inputClick}
            onBlur={inputUnclick}
            onChange={(e) => {
              dispatch({
                type: labelName,
                value: e.target.value.toLowerCase(),
              });
              setInputValue(e.target.value);
            }}
          ></input>
          <div className={classes.form_input_line} ref={inputRef}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserInput;
