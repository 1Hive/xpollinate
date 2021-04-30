import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Web3Provider } from 'contexts/Web3Context';
import { Routes } from './Routes';
import { Layout } from './pages/Layout';
import { theme } from './theme';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
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
