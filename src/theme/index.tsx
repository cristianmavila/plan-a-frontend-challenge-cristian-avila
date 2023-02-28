import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = {
  config: { ...config },
};

const theme = extendTheme({ customTheme });

export default theme;
