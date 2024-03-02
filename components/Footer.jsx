import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { SiGitbook } from "react-icons/si";

const Footer = () => {
  return (
    <Flex className="footer-container" align="center" justify="center" p="20px 40px">
      <Flex
        align="center"
        borderRadius="20px"
        style={{
          backgroundColor: 'rgba(19, 19, 48, 0.5)',
          backdropFilter: 'blur(10px)',
          padding: '8px 16px',
        }}
      >
        <Text lineHeight='38px' fontWeight='600' fontSize='1.125rem' color='#ffff' margin='0 12px'>
          All rights reserved &copy; CryptoSwift {new Date().getFullYear()}
        </Text>

        <a href="https://github.com/cryptoswiftapp" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} style={{ marginLeft: '10px', color: 'white' }} />
        </a>
        
        <a href="https://discord.gg/cryptoswift" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={24} style={{ marginLeft: '10px', color: 'white' }} />
        </a>

        <a href="https://cryptoswift.gitbook.io/cryptoswift-network/" target="_blank" rel="noopener noreferrer">
          <SiGitbook size={24} style={{ marginLeft: '10px', color: 'white' }} />
        </a>
      </Flex>
    </Flex>
  );
};

export default Footer;
