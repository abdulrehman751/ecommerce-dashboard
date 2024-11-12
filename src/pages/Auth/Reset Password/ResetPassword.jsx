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
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { Card } from "../../../components/Card";

const resetValidationSchema = object({
  password: string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
  repeatPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("RepeatPassword is required"),
});

export const ResetPassword = () => {
  return (
    <Container bg='white'>
      <Center minH='100vh'>
        <Card>
          <Text fontWeight='medium' textStyle='h1'>
            Reset passsword
          </Text>
          <Text textStyle='p2' color='black.60' mt='4'>
            Enter your new password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(data) => {
              console.log(data);
            }}
            validationSchema={resetValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt='10' spacing={6}>
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
                  <Field name='repeatPassword'>
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor='repeatPassword'>
                          Repeat Password
                        </FormLabel>
                        <Input
                          {...field}
                          name='repeatPassword'
                          type='password'
                          placeholder='Enter your repeatpassword....'
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Box>
                    <Button w='full'>Reset Password</Button>
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
