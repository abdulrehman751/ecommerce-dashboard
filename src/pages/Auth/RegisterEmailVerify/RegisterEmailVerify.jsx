import React, { useEffect } from "react";
import { Card } from "../../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";

export const RegisterEmailVerify = () => {
  const toast = useToast();
  const { email } = useParams();

  if (email === "") {
    return <Center h='100vh'>Invalid Email</Center>;
  }

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: [" send-verification-mail"],
    mutationFn: sendVerificationMail,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);
  if (isLoading) {
    <Center h='100vh'>
      <Spinner />
    </Center>;
  }
  return (
    <Container>
      <Center minH='100vh'>
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={MdEmail} boxSize='48px' color='p.purple' />
            <Text fontWeight='medium' textStyle='h4' color='p.black'>
              Email Verification
            </Text>
            <Text textAlign='center' textStyle='p2' color='black.60'>
              We have sent you an email verification to{" "}
              <Box as='b' color='black'>
                {email}
              </Box>{" "}
              If you didn’t receive it, click the button below.
            </Text>
            <Button
              variant='outline'
              w='full'
              onClick={() => {
                mutate({ email });
              }}
              isLoading={isLoading}
            >
              Re-Send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};
