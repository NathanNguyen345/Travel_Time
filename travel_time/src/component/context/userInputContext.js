import { createContext } from "react";

const userInputContext = createContext({
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

export default userInputContext;
