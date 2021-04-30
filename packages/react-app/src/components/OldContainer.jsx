import React, { useEffect, useState, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
        borderWidth="1px"
        borderRadius="lg"
        bg="green.100"
      >
        Bridge Re-enabled in: {countDown}
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
        <Modal disabled={DISABLED} />
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
