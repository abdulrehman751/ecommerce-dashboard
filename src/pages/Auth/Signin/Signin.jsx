import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { Card } from "../../../components/Card";
import { useMutation } from "react-query";
import { signinUser } from "../../../api/query/userQuery";

const signinValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});

const Signin = () => {
  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container bg='white'>
      <Center minH='100vh'>
        <Card>
          <Link to='/Dashboard'>
            <Text fontSize='p3'>Go to Dashboard</Text>
          </Link>
          <Text fontWeight='medium' textStyle='h1'>
            Welcome to Crypto App
          </Text>

          <Text textStyle='p2' color='black.60' mt='4'>
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              mutate(values);
            }}
            validationSchema={signinValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt='10' spacing={6}>
                  <Field name='email'>
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                          {...field}
                          type='email'
                          placeholder='Enter your email....'
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='password'>
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input
                          {...field}
                          type='password'
                          placeholder='Enter your password....'
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <HStack justify='space-between'>
                    <Checkbox>
                      <Text fontSize='p3'>Remember me</Text>
                    </Checkbox>
                    <Link to='/forgot-password'>
                      <Text textStyle='p3' as='span' color='p.purple'>
                        Forgot password?
                      </Text>
                    </Link>
                  </HStack>
                  <Box>
                    <Button isLoading={isLoading} w='full' type='submit'>
                      Log In
                    </Button>
                    <Link to='/signup'>
                      <Button variant='outline' mt='3' w='full'>
                        Create New Acount
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signin;
