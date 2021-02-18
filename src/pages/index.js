import Head from 'next/head';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { Web3Context } from 'contexts/Web3Context';
import { useContext } from 'react';
import styles from 'styles/Home.module.css';
import { Container, Box } from '@chakra-ui/react';

export default function Home() {
  const {
    address,
    network,
    balance,
    onboard,
    provider,
    wallet,
    notify,
  } = useContext(Web3Context);

  return onboard && notify ? (
    <div>
      <Head>
        <title>xDai/Matic Bridge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div>Hello</div>
      </Header>
      <div className={styles.container}>
        <Container>
          <Box
            padding="4"
            margin="4"
            borderWidth="1px"
            borderRadius="lg"
            maxW="3xl"
          >
            Address: {address && <span>{address}</span>}
            <br />
            {balance != null && (
              <span>
                {Number(balance) > 0 ? balance / 1000000000000000000 : balance}{' '}
                xDai
              </span>
            )}
            <br />
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
        </Container>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
