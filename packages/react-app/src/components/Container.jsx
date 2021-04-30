import React, { useEffect, useState, useRef } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Modal, AvailableLiquidity } from 'components/index';

const DISABLED = true;

const RE_ENABLED = 1619792809000;

function useInterval(callback, delay) {
  // eslint-disable-next-line no-undef
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

const Container = () => {
  const [countDown, setCountDown] = useState('');

  useInterval(() => {
    const now = Date.now();
    const timeLeft = RE_ENABLED - now;
    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / 1000 / 60) % 60);
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const time = `${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`;

    setCountDown(time);
  }, 1000);

  return (
    <Flex align="center" direction="column">
      <Box
        width={{ sm: 'full', md: 'auto' }}
        w={[300, 400, 560]}
        alignItems="center"
        padding="1rem"
        margin="0.5rem"
        flexGrow={1}
        bg="green.100"
        bgColor="green.100"
        boxShadow="0px 1rem 2rem rgba(204, 218, 238, 0.8)"
        borderRadius="1rem"
      >
        Bridge Re-enabled in: {countDown}
      </Box>
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
          : 'This is beta software! Use at your own risk.'}
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
        boxSize="15rem"
        marginTop="calc(5% + 60px)"
      />
    </Flex>
  );
};

export default Container;
