import { Button, Flex } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      width={"100%"}
      height={"calc(100vh - 300px)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button isLoading colorScheme="teal" variant="solid">
        Email
      </Button>
    </Flex>
  );
}
