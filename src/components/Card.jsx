import { Card as ChakraCard } from "@chakra-ui/react";
export const Card = ({ children, showCard = false, ...props }) => {
  return (
    <ChakraCard
      bg={{
        base: showCard ? "white" : "transparent",
        md: "white",
      }}
      p={{
        base: showCard ? "4" : "0",
        md: "6",
      }}
      borderRadius={{
        base: showCard ? "1rem" : "none",
        md: "1rem",
      }}
      w='408px'
      boxShadow={{
        base: showCard ? "md" : "none",
        md: "lg",
      }}
      {...props}
    >
      {children}
    </ChakraCard>
  );
};
