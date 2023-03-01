import { createContext, useCallback, useEffect, useState } from "react";
import { signInService, signInToken } from "@/services/authentication";
import { destroyCookie } from "nookies";
import {
  AuthenticationContextProps,
  AuthenticationProviderProps,
  SignInProps,
  User,
} from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./utils";
import { useToast } from "@chakra-ui/react";

export const AuthenticationContext = createContext<AuthenticationContextProps>(
  {} as AuthenticationContextProps
);

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsloading] = useState(true);
  const toast = useToast();

  const signIn = useCallback(async ({ username, password }: SignInProps) => {
    const tokenAPI = await signInToken();
    const loginAPI = await signInService({
      username,
      password,
      token: tokenAPI?.request_token,
    });

    if (!!tokenAPI?.success && !!loginAPI?.success) {
      const payload = {
        token: tokenAPI.re,
        username: username,
      };
      setUser(payload);
      setUserLocalStorage(payload);
      setIsloading(false);
      toast({
        title: "Login successful",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "The user name or password are incorrect.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    setUserLocalStorage(null);
    destroyCookie(null, "@tmdb");
    toast({
      title: "Logout successful",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  }, []);

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      setUser(user);
    }
    setIsloading(false);
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...user, isLoading, signIn, signOut }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
