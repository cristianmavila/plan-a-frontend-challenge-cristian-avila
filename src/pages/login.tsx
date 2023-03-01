import { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useAuthentication } from "@/contexts/AuthenticationProvider/useAuthentication";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignInProps } from "@/contexts/AuthenticationProvider/types";

const LoginSchema = Yup.object({
  username: Yup.string().trim().required("Please type a valid username"),
  password: Yup.string()
    .required("Please type a valid password")
    .min(6, "The password must have at least 6 digits."),
});

function Login() {
  const { username, signIn, isLoading } = useAuthentication();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmitForm = async (data: SignInProps) => {
    await signIn(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInProps>({
    resolver: yupResolver(LoginSchema),
  });

  useEffect(() => {
    if (!!username) {
      router.push("/");
    }
  }, [username]);

  if (isLoading) return null;

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Stack spacing={4} p="1rem" boxShadow="md">
              <FormControl isInvalid={!!errors.username?.message}>
                <InputGroup>
                  <Input
                    {...register("username")}
                    title="email"
                    placeholder="username"
                    type={"text"}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password?.message}>
                <InputGroup>
                  <Input
                    {...register("password")}
                    title="Password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
