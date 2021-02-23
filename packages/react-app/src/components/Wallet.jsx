import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Web3Context } from 'contexts/Web3Context';
import { Modal } from 'components/index';

const Wallet = () => {
  const { account, balance, ethersProvider } = useContext(Web3Context);

  return (
    <div>
      <Box
        padding="4"
        margin="4"
        borderWidth="1px"
        borderRadius="lg"
        maxW="3xl"
      >
        Address: {account && <span>{account}</span>}
        <br />
        {account != null && (
          <span>
            {Number(balance) > 0 ? balance / 1000000000000000000 : balance} xDai
          </span>
        )}
        <br />
        <div style={{ padding: '2rem' }}>
          {ethersProvider != null ? <Modal /> : <p>Connect Wallet First!</p>}
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

export default Wallet;
