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
import { Link } from "react-router-dom";

export const ResetPasswordSuccess = () => {
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
              Password Reset Done
            </Text>
            <Text textAlign='center' textStyle='p2' color='black.60'>
              Now you can access you account.
            </Text>
            <Box w='full'>
              <Link to='/signin'>
                <Button w='full'>Sign In</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};
