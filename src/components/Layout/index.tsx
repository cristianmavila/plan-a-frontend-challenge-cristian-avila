import { Box, Image } from "@chakra-ui/react";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Header />
      {children}
      <Box
        as="footer"
        bg="blue.900"
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        py={10}
      >
        <Image src="/assets/logo.svg" width={154} height={20} />
      </Box>
    </Box>
  );
}
