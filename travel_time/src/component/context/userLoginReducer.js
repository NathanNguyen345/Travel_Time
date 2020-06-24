import { LOG_IN, LOG_OUT } from "./types";

export default (state, action) => {
  switch (action.type) {
    case LOG_IN:
      state.id = action.value.data.id;
      state.userName = action.value.data.userName;
      return { ...state };
    case LOG_OUT:
      state.id = "";
      state.userName = "GUEST";
      return { ...state };
    default:
      return;
  }
};
