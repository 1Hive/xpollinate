import React, { useContext } from "react";
import { Web3Context } from 'contexts/Web3Context';
import { Box, Heading, Flex, Button, Text } from "@chakra-ui/react";
import networkName from 'lib/network'

const Header = props => {
  const {
    onboard,
    provider,
    network,
    address
  } = useContext(Web3Context);
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  async function readyToTransact() {
    if (!provider) {
      const walletSelected = await onboard.walletSelect();
      if (!walletSelected) return false;
    }

    const ready = await onboard.walletCheck();
    return ready;
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5} >
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          xDai/Matic Bridge
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {!address ? (<Button bg="transparent" border="1px" onClick={() => readyToTransact()}>
          Connect Wallet
        </Button>): <Text>{networkName(network)}</Text>}   
      </Box>
    </Flex>
  );
};

export default Header;
