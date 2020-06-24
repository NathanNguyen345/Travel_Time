import { createContext } from "react";

const userLoginContext = createContext({
  id: "",
  userName: "GUEST",
});

export default userLoginContext;
