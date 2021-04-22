import React, { useContext } from 'react';
import { Box, Heading, Flex, Button, Image } from '@chakra-ui/react';
import { Web3Context } from 'contexts/Web3Context';
import networkName from 'lib/network';
import { shortenAddress } from 'utils/index';

const styles = {
  gradient: 'linear-gradient(257.5deg, #EB0055 -39.73%, #FFFA80 107.97%)',
};

const Header = (props) => {
  const { account, providerChainId } = useContext(Web3Context);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="transparent"
      border="1px"
      borderColor="gray.500"
      m="0 auto"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          <Image
            src="https://svgshare.com/i/WVX.svg"
            alt="xPollinate Logo"
            w="8rem"
          />
        </Heading>
      </Flex>
      <Box
        display={{ sm: 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        padding="0.5rem"
        flexGrow={1}
      />
      <Box
        bgGradient={styles.gradient}
        borderRadius="1rem"
        direction="column"
        align="center"
        p="0.5rem"
        m="0.5rem"
        fontWeight="light"
      >
        {networkName(providerChainId)}
      </Box>
      <Box>
        {account ? (
          <Button
            bgColor="white"
            borderRadius="1rem"
            direction="column"
            align="center"
            p="0.5rem"
            m="0.5rem"
            fontWeight="light"
          >
            {shortenAddress(account)}
          </Button>
        ) : (
          <Button
            bgColor="white"
            borderRadius="1rem"
            direction="column"
            align="center"
            p="0.5rem"
            m="0.5rem"
            fontWeight="light"
            disabled
          >
            No account found.
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
