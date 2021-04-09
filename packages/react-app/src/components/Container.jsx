import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Modal } from 'components/index';

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
    </Flex>
  );
};

export default Container;
