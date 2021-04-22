import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Modal, AvailableLiquidity } from 'components/index';

const Container = () => {
  return (
    <Flex align="center" direction="column">
      <Box
        width={{ sm: 'full', md: 'auto' }}
        w={[300, 400, 560]}
        alignItems="center"
        padding="2.5rem"
        margin="0.5rem"
        bgColor="white"
        boxShadow="0px 1rem 2rem rgba(204, 218, 238, 0.8)"
        borderRadius="1rem"
      >
        <Modal />
      </Box>
      <Box
        bgGradient="linear-gradient(257.5deg, rgba(235, 0, 85, 0.3) -39.73%, rgba(255, 250, 128, 0.3) 107.97%)"
        w={[250, 350, 500]}
        padding="1rem"
        margin="2rem"
        borderRadius="lg"
        fontWeight="light"
      >
        This is beta software, use at your own risk.
      </Box>

      <Box
        width={{ sm: 'full', md: 'auto' }}
        w={[300, 400, 560]}
        alignItems="center"
        padding="1rem"
        margin="0.5rem"
        flexGrow={1}
        borderWidth="1px"
        borderRadius="lg"
      >
        <AvailableLiquidity />
      </Box>
    </Flex>
  );
};

export default Container;
