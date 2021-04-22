import { Button, Flex, Text, Image } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { Web3Context } from 'contexts/Web3Context';

const styles = {
  'bold-gradient':
    'linear-gradient(257.5deg, #EB0055 -39.73%, #FFFA80 107.97%)',
  'light-gradient':
    'linear-gradient(257.5deg, rgba(235, 0, 85, 0.3) -39.73%, rgba(255, 250, 128, 0.3) 107.97%)',
};

const ConnectWeb3 = () => {
  const { connectWeb3, loading, account, disconnect } = useContext(Web3Context);

  return (
    <Flex
      bgGradient={styles['light-gradient']}
      boxShadow="0px 1rem 2rem rgba(204, 218, 238, 0.8)"
      borderRadius="1rem"
      direction="column"
      align="center"
      w="calc(100% - 2rem)"
      mt="5rem"
      p="2rem"
      maxW="28.5rem"
      mx={4}
    >
      <Image src="https://svgshare.com/i/WTH.svg" alt="xPollinate Logo"></Image>
      <Text fontWeight="light" m="1rem">
        Please, connect your wallet.
      </Text>
      {account && !loading ? (
        <Button onClick={disconnect} colorScheme="orange" px={12}>
          Disconnect
        </Button>
      ) : (
        <Button
          onClick={connectWeb3}
          fontWeight="light"
          _focus={{ boxShadow: 'outline' }}
          _hover={{
            bg: styles['bold-gradient'],
          }}
          bgGradient={styles['bold-gradient']}
          maxW="15rem"
          isLoading={loading}
        >
          Connect
        </Button>
      )}
    </Flex>
  );
};

export default ConnectWeb3;
