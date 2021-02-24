import React from 'react';
import { Box } from '@chakra-ui/react';
import { Modal } from 'components/index';

const Container = () => {
  return (
    <div>
      <Box
        padding="4"
        margin="4"
        borderWidth="1px"
        borderRadius="lg"
        maxW="3xl"
      >
        <div style={{ padding: '2rem' }}>
          <Modal />
        </div>
      </Box>
      <Box
        padding="4"
        margin="4"
        borderWidth="1px"
        borderRadius="lg"
        bg="red.100"
        maxW="3xl"
      >
        This is beta software, use at your own risk.
      </Box>
    </div>
  );
};

export default Container;
