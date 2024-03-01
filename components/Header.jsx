"use client";

import React from 'react';
import { Flex, Link, Image } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link';

const Header = () => {
  return (
    <Flex className="header-container" align="center" justify="center" p="20px 40px">
      <Flex
        className="menu-links-container"
        align="center"
        borderRadius="20px"
        style={{
          backgroundColor: 'rgba(19, 19, 48, 0.5)',
          backdropFilter: 'blur(10px)',
          padding: '8px 16px',
        }}
      >
        <Link lineHeight='38px' fontWeight='600' fontSize='1.125rem' color='#ffff' margin='0 12px' href='/'>Home</Link>
        <Link lineHeight='38px' fontWeight='600' fontSize='1.125rem' color='#ffff' margin='0 12px' href='/news'>News</Link>
        <Link lineHeight='38px' fontWeight='600' fontSize='1.125rem' color='#ffff' margin='0 12px' href='/about'>About</Link>
        <Link lineHeight='38px' fontWeight='600' fontSize='1.125rem' color='#ffff' margin='0 12px' href='/faq'>Faq</Link>
      </Flex>
    </Flex>
  );
};

export default Header;