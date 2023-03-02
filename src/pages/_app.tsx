import theme from "@/theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthenticationProvider } from "@/contexts/AuthenticationProvider";
import { MoviesProvider } from "@/contexts/MoviesProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthenticationProvider>
        <MoviesProvider>
          <Component {...pageProps} />
        </MoviesProvider>
      </AuthenticationProvider>
    </ChakraProvider>
  );
}
