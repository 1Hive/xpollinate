import React, { useContext } from 'react';
import { Box, Flex, Button, Image } from '@chakra-ui/react';
import { Web3Context } from 'contexts/Web3Context';
import networkName from 'lib/network';
import { shortenAddress } from 'utils/index';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const styles = {
  gradient: 'linear-gradient(257.5deg, #EB0055 -39.73%, #FFFA80 107.97%)',
};

const Header = (props) => {
  const { account, providerChainId } = useContext(Web3Context);

  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      w="100%"
      mb={'1rem'}
      p={'1rem'}
      bg="transparent"
      direction={['column', 'row', 'row', 'row']}
      justify={['center', 'space-between', 'flex-end', 'flex-end']}
      borderBottom="1px"
      borderColor="gray.500"
    >
      <Image
        src="https://storage.googleapis.com/1hive/xpollinate/logo-text.svg"
        alt="xPollinate Logo"
        w="8rem"
      />
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
      <Box>
        <Link href="https://support.connext.network/hc/en-us" isExternal>
          <Button
            colorScheme="red"
            variant="outline"
            borderRadius="1rem"
            direction="column"
            align="center"
            p="0.5rem"
            m="0.5rem"
            fontWeight="light"
            rightIcon={<ExternalLinkIcon />}
          >
            Support
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
