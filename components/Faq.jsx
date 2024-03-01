import React from 'react';
import { Flex, Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";

const FaqPage = () => {
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
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="xl" color="white" fontWeight="bold">Context</Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="white" textAlign="left">
                  In today's digital age, the cryptocurrency market is burgeoning, yet it remains fragmented by a myriad of blockchain platforms, each with its unique set of addresses. This fragmentation poses significant challenges to users, from the complexity of managing multiple addresses to the heightened risk of transaction errors. Recognizing this critical pain point, Cryptoswiftapp proposes a revolutionary solution designed to unify the cryptocurrency experience across various blockchains, making transactions seamless and accessible to everyone.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FaqPage;
