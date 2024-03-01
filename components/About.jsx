import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Flex direction="column" align="center" justify="center" p="5px 40px">
      <Flex wrap="wrap" justify="center">
        <Box w="45%" p="2">
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
            <Text fontSize="xl" color="white" fontWeight="bold" marginBottom="2%">Context and Problem Statement</Text>
            <Text color="white" textAlign="left">
              The advent of blockchain technology and the proliferation of cryptocurrencies have ushered in a new era of financial innovation, offering unparalleled opportunities for growth, transparency, and security. As the ecosystem continues to expand, with thousands of cryptocurrencies and numerousblockchain networks coming into existence, users are presented with incredible opportunities to engage in a decentralized economy.
              <br />
              However, this rapid expansion has also introduced significant complexities for users, particularly in managing their digital assets across multiple blockchain platforms. The current landscape is characterized by a fragmented ecosystem where each blockchain operates in isolation, requiring users to navigate a maze of addresses, wallets, and networks. This fragmentation presents several challenges
              <br /><br/>
              <span style={{ fontWeight: 'bold' }}>Multi-Address Management Complexity</span> <br />
              <span style={{ fontWeight: 'bold' }}>Increased Risk of Transactional Errors</span> <br />
              <span style={{ fontWeight: 'bold' }}>Barrier to Cryptocurrency Adoption</span> <br />
              <span style={{ fontWeight: 'bold' }}>Lack of Interoperability</span> 
            </Text>
          </Flex>
        </Box>
        <Box w="45%" p="2">
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
            <Text fontSize="xl" color="white" fontWeight="bold" marginBottom="2%">The CryptoSwiftApp Solution</Text>
            <Text color="white" textAlign="left">
              In response to the fragmented and complex landscape of the cryptocurrency ecosystem, CryptoSwiftApp introduces a revolutionary solution designed to streamline the management and transaction of digital assets across multiple blockchain networks. At its core, CryptoSwiftApp leverages a unique identifier known as "CryptoSwift," which acts as a universal key to access and transact with a user's assets, regardless of the underlying blockchain. This innovative approach addresses the critical challenges of multi-address management complexity, the risk of transactional errors, barriers to adoption, and the lack of interoperability.
              <br/><br/>
              <span style={{ fontWeight: 'bold' }}>Simplified Asset Management</span> <br />
              <span style={{ fontWeight: 'bold' }}>Enhanced Security and Privacy</span> <br />
              <span style={{ fontWeight: 'bold' }}>Seamless Interoperability</span> <br />
              <span style={{ fontWeight: 'bold' }}>Empowering Adoption</span> 
            </Text>
          </Flex>
        </Box>

        <Box w="45%" p="2">
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
            <Text fontSize="xl" color="white" fontWeight="bold" marginBottom="2%">Technology and Innovation</Text>
            <Text color="white" textAlign="left">
              At the core of CryptoSwiftApp's transformative solution is a commitment to leveraging cutting-edge technology and innovation to address the challenges within the cryptocurrency ecosystem. This chapter delves into the technological backbone of CryptoSwiftApp, highlighting how it utilizes Zero-Knowledge Proofs (ZKP), Artificial Intelligence (AI), and blockchain interoperability to revolutionize the management and transaction of digital assets.
              <br/><br/>
              <span style={{ fontWeight: 'bold' }}>Zero-Knowledge Proofs (ZKP)</span> <br />
              <span style={{ fontWeight: 'bold' }}>Artificial Intelligence (AI)</span> <br />
              <span style={{ fontWeight: 'bold' }}>Blockchain Interoperability</span> <br />
              <span style={{ fontWeight: 'bold' }}>Innovative User Interface (UI)</span> 
            </Text>
          </Flex>
        </Box>
        <Box w="45%" p="2">
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
            <Text fontSize="xl" color="white" fontWeight="bold" marginBottom="2%">Call to Action</Text>
            <Text color="white" textAlign="left">
              As we stand on the brink of revolutionizing the cryptocurrency management and transaction landscape with CryptoSwiftApp, our journey is just beginning. We believe in the transformative power of our platform to simplify, secure, and unify the digital asset experience across the blockchain ecosystem. However, to realize this vision, we need the support, expertise, and enthusiasm of a diverse community of users, developers, investors, and blockchain enthusiasts. Here’s how you can join us in shaping the future of cryptocurrency transactions.
              <br/><br/>
              <span style={{ fontWeight: 'bold' }}>For Potential Users:</span> If you're excited about the prospect of a simplified, secure, and seamless cryptocurrency experience, we invite you to join our community. Stay updated on our progress, participate in beta testing, and be among the first to experience the power of CryptoSwiftApp. Your feedback will be invaluable in refining our platform to better meet your needs.
              <br />
              <span style={{ fontWeight: 'bold' }}>For Developers and Technologists:</span> We're on the lookout for innovative minds to contribute to the CryptoSwiftApp ecosystem. Whether you're interested in developing on our platform, integrating your service with CryptoSwiftApp, or contributing ideas for new features, there’s a place for you in our community. Together, we can build a more interconnected and user-friendly blockchain world.
              <br />
              <span style={{ fontWeight: 'bold' }}>For Investors:</span> For those who see the potential in CryptoSwiftApp to disrupt the cryptocurrency management space, we offer a unique investment opportunity. By investing in CryptoSwiftApp, you're not just funding a project; you're supporting a vision that aims to enhance the global adoption and usability of cryptocurrencies. We’re committed to building a sustainable and scalable platform, and we invite you to be part of this promising venture.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutPage;
