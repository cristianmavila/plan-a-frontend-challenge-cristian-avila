import { useContext } from "react";
import { AuthenticationContext } from ".";

export const useAuthentication = () => useContext(AuthenticationContext);
