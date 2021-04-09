import React, { useContext } from 'react';
import { Box, Heading, Flex, Button } from '@chakra-ui/react';
import { Web3Context } from 'contexts/Web3Context';
import networkName from 'lib/network';
import { shortenAddress } from 'utils/index';

const Header = (props) => {
  const { account, providerChainId } = useContext(Web3Context);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="2rem"
      bg="teal.500"
      color="white"
      m="0 auto"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Cross-Chain Bridge
        </Heading>
      </Flex>
      <Box
        display={{ sm: 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        padding="0.5rem"
        flexGrow={1}
      ></Box>
      <Box style={{ margin: '0.5rem' }}>{networkName(providerChainId)}</Box>
      <Box display={{ sm: 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
        {account ? (
          <Button colorScheme="white" variant="outline">
            {shortenAddress(account)}
          </Button>
        ) : (
          <Button colorScheme="white" variant="outline" disabled>
            No account found.
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
