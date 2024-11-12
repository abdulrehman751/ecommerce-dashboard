import React from "react";
import { Card } from "../../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";

export const ForgotPasswordSent = () => {
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
            <Icon as={FaCircleCheck} boxSize='48px' color='green' />
            <Text fontWeight='medium' textStyle='h4' color='p.black'>
              Successfully Sent
            </Text>
            <Text textAlign='center' textStyle='p2' color='black.60'>
              We have sent instructions on how to reset your password to
              <Box as='b' color='black'>
                {" "}
                jenny.wilson@gmail.com.
              </Box>{" "}
              Please follow the instructions from the email.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};
