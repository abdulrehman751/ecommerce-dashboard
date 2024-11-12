import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Card } from "../../../components/Card";
import { object, string } from "yup";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const forgotValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
  });
  return (
    <Container>
      <Center minH='100vh'>
        <Card>
          <Link to='/signin'>
            <Icon as={FaArrowLeftLong} boxSize={6} />
          </Link>
          <Text mt='4' fontWeight='medium' textStyle='h1'>
            Forgot Password
          </Text>
          <Text textStyle='p2' color='black.60' mt='4'>
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(data) => {
              console.log(data);
            }}
            validationSchema={forgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt='8' spacing={6}>
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

                  <Button w='full'>Reset Password</Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};
