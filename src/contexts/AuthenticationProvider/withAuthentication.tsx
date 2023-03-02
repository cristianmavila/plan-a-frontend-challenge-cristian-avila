import Loading from "@/components/Loading";
import Router from "next/router";
import { getUserLocalStorage } from "./utils";

const withAuthentication = (WrappedComponent: any) => {
  return (props: any) => {
    if (typeof window !== "undefined") {
      const user = getUserLocalStorage();
      if (!user && window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
      return <WrappedComponent {...props} />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
