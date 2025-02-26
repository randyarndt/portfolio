import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack>
      <Box background="white" width="100%" color="white" rounded="lg">
        <Image rounded="lg" src={imageSrc} />
        <Heading size="lg" color="black" padding="4">{title}</Heading>
        <Text color="black" padding="4">{description}</Text>
        <HStack padding="4">
          <Heading size="md" color="black">See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
