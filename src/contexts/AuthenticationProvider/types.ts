export type User = {
  token?: string;
  username?: string;
  session?: string;
};

export interface AuthenticationContextProps extends User {
  isLoading: boolean;
  signIn: ({ username, password }: SignInProps) => Promise<void>;
  signOut: () => void;
}

export interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export interface SignInProps {
  username?: string;
  password?: string;
  token?: string;
}
