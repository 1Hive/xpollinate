import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Modal, AvailableLiquidity } from 'components/index';

const DISABLED = false;

const Container = () => {
  return (
    <Flex align="center" direction="column">
      <Box
        width={{ sm: 'full', md: 'auto' }}
        w={[300, 400, 560]}
        alignItems="center"
        padding="1.5rem"
        paddingTop="2.5rem"
        paddingBottom="2.5rem"
        bgColor="white"
        boxShadow="0px 1rem 2rem rgba(204, 218, 238, 0.8)"
        borderRadius="1rem"
      >
        <Modal disabled={DISABLED} />
      </Box>
      <Box
        bgGradient="linear-gradient(257.5deg, rgba(235, 0, 85, 0.3) -39.73%, rgba(255, 250, 128, 0.3) 107.97%)"
        w={[250, 350, 500]}
        padding="1rem"
        margin="2rem"
        borderRadius="lg"
        fontWeight="light"
        bgColor="white"
      >
        {DISABLED
          ? 'We are experiencing some issues with the bridge, we will be back soon.'
          : 'BSC down for maintenance. This is beta software! Use at your own risk.'}
      </Box>
      <Box
        width={{ sm: 'full', md: 'auto' }}
        w={[300, 400, 560]}
        alignItems="center"
        padding="1rem"
        margin="0.5rem"
        bgColor="white"
        boxShadow="0px 1rem 2rem rgba(204, 218, 238, 0.8)"
        borderRadius="1rem"
      >
        <AvailableLiquidity />
      </Box>
      <Image
        src="https://storage.googleapis.com/1hive/xpollinate/powered-by.svg"
        bottom="0"
        h="2rem"
        marginTop="calc(5% + 60px)"
      />
    </Flex>
  );
};

export default Container;
