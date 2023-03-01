import {
  Box,
  Container,
  HStack,
  Link,
  useColorMode,
  Text,
  Button,
  useBreakpointValue,
  Drawer,
  IconButton,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  DrawerBody,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { WiDayCloudy, WiNightAltCloudy } from "react-icons/wi";
import { FiMenu } from "react-icons/fi";
import { useAuthentication } from "@/contexts/AuthenticationProvider/useAuthentication";

export default function Header() {
  const { signOut, username } = useAuthentication();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const LoggedUser = () => (
    <Box marginY={"4"} textAlign={"center"} color={"white"}>
      <Text fontWeight={"bold"}>{username}</Text>
    </Box>
  );
  const LogoutButton = () => <Button onClick={() => signOut()}>Logout</Button>;
  const IconShiftColor = () => (
    <Link fontSize={"5xl"} color={"gray.200"} onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <WiNightAltCloudy width={30} height={30} />
      ) : (
        <WiDayCloudy width={30} height={30} />
      )}
    </Link>
  );

  return (
    <Box as="header" shadow={"base"}>
      <Box as="nav" bg="blue.900">
        <Container maxW={"container.xl"} py={0}>
          <HStack spacing="10" justify="space-between">
            <Image src="/assets/logo.svg" width={154} height={20} />
            {isDesktop ? (
              <HStack display={"flex"} alignItems={"center"} flexDirection={"row"}>
                <LoggedUser />
                <LogoutButton />
                <IconShiftColor />
              </HStack>
            ) : (
              <>
                <IconButton
                  onClick={onOpen}
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" color="white" />}
                  aria-label="Open Menu"
                  _hover={{ bg: "transparent" }}
                />
                <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={"full"}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody
                      paddingTop={10}
                      alignItems={"center"}
                      justifyContent={"center"}
                      display={"flex"}
                    >
                      <DrawerCloseButton />
                      <Flex direction={"column"} alignItems={"center"}>
                        <Box mb={"4"}>
                          <LoggedUser />
                          <LogoutButton />
                        </Box>
                        <IconShiftColor />
                      </Flex>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
