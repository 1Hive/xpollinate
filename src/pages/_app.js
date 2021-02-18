import { ChakraProvider } from '@chakra-ui/react';
import { Web3Provider } from 'contexts/Web3Context';

import 'styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </ChakraProvider>
  );
}
