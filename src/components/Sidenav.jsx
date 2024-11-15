import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FcSupport } from "react-icons/fc";
import { PiSignInFill } from "react-icons/pi";
import { SiGnuprivacyguard } from "react-icons/si";

import { Link, useLocation } from "react-router-dom";
const Sidenav = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
    {
      icon: FcSupport,
      text: "Support",
      link: "/support",
    },
    {
      icon: PiSignInFill,
      text: "Signin",
      link: "/signin",
    },
    {
      icon: SiGnuprivacyguard,
      text: "Signup",
      link: "/signup",
    },
  ];

  return (
    <Stack
      bg='white'
      justify='space-between'
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h='100vh'
    >
      <Box>
        <Heading textAlign='center' fontSize='20px' as='h1' pt='3.5rem'>
          @DOSOMECODING
        </Heading>
        <Box mt='6' mx='3'>
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius='10px'
                py='3'
                px='4'
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize='14px' fontWeight='medium'>
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default Sidenav;
