import React from 'react';
import { Text } from '@chakra-ui/react';
import { Container } from 'components/index';

export const Home = (props) => (
  <div>
    <Text
      align="center"
      p="1rem"
      fontWeight="thin"
      fontSize="2xl"
      fontFamily="sans-serif"
    >
      Cross-Chain Bridge
    </Text>
    <Container />
  </div>
);
