import { useAuthentication } from "@/contexts/AuthenticationProvider/useAuthentication";
import Loading from "../Loading";

interface RouteGuardProps {
  children: React.ReactNode;
}

export default function RouteGuard({ children }: RouteGuardProps) {
  const { isLoading } = useAuthentication();
  if (isLoading) return <Loading />;
  return <>{children}</>;
}
