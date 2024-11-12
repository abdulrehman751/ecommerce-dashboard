import { Center, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const DashboardLink = () => {
  return (
    <Center>
      <Link to='/'>
        <Text textStyle='p3' as='span' color='p.purple'>
          Go Dasboard
        </Text>
      </Link>
    </Center>
  );
};

export default DashboardLink;
