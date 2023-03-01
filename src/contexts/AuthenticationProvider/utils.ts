import { parseCookies, setCookie } from "nookies";
import { useCallback, useEffect, useRef } from "react";
import { User } from "./types";

export function setUserLocalStorage(user: User | null) {
  setCookie(undefined, "@tmdb", JSON.stringify(user), {
    maxAge: 60 * 60 * 1, // 1 hour
  });
}

export function getUserLocalStorage() {
  const { "@tmdb": json } = parseCookies();

  if (!json) return null;

  const user = JSON.parse(json);

  return user ?? null;
}

export function useIsMounted() {
  const isMounted = useRef(false);
  const isMountedFunction = useCallback(() => isMounted.current, []);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMountedFunction;
}
