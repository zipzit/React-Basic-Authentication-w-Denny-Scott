import { createContext, useContext } from "react";

export const AuthContext = createContext();

export function useAuth() {
  console.log("(auth.js) AuthContext: ", AuthContext);
  return useContext(AuthContext);
}
