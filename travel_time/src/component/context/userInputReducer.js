import {
  FIRST_NAME,
  LAST_NAME,
  USER_NAME,
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case FIRST_NAME:
      state.firstName = action.value;
      return { ...state };
    case LAST_NAME:
      state.lastName = action.value;
      return { ...state };
    case USER_NAME:
      state.userName = action.value;
      return { ...state };
    case EMAIL:
      state.email = action.value;
      return { ...state };
    case PASSWORD:
      state.password = action.value;
      return { ...state };
    case CONFIRM_PASSWORD:
      state.confirmPassword = action.value;
      return { ...state };
    default:
      return;
  }
};
