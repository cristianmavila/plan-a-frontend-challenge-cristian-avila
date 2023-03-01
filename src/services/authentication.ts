import { SignInProps } from "@/contexts/AuthenticationProvider/types";
import api from ".";

export async function signInToken() {
  try {
    const response = await api.get<any>("/authentication/token/new");
    if (!!response?.data.success) return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function signInService({ username, password, token }: SignInProps) {
  try {
    const response = await api.post<any>("/authentication/token/validate_with_login", {
      username: username,
      password: password,
      request_token: token,
    });
    if (!!response?.data.success) return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
