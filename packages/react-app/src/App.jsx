import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Web3Provider } from 'contexts/Web3Context';
import { Routes } from './Routes';
import { Layout } from './pages/Layout';

export const App = () => {
  return (
    <ChakraProvider>
      <Web3Provider>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </Web3Provider>
    </ChakraProvider>
  );
};
