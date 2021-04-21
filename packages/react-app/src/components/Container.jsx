import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Modal, AvailableLiquidity } from 'components/index';

const Container = () => {
  return (
    <Flex align="center" direction="column">
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
        <Modal />
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
        bg="red.100"
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
