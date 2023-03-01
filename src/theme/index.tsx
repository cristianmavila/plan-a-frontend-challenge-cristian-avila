import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = {
  config: { ...config },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("gray.200", "black")(props),
      },
    }),
  },
};

const theme = extendTheme({ customTheme });

export default theme;
