import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex direction="column" align="center" justify="center" p="5px 40px">
      <Box w="100%" p="1">
        <Flex
          direction="column"
          align="center"
          borderRadius="20px"
          bg="rgba(19, 19, 48, 0.5)"
          backdropFilter="blur(10px)"
          p="20px"
          m="2"
          h="full"
        >
          <Text fontSize="xl" color="white" fontWeight="bold" marginBottom="2%">Research and Design (Q1-Q2 2024)</Text>
          <Text color="white" textAlign="left" marginBottom="10px">
            Concept validation and user research.
          </Text>
          <Text color="white" textAlign="left" marginBottom="10px">
            Initial development of the CryptoSwift unique identifier prototype.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomePage;
