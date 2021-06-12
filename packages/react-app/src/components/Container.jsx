import React from 'react';
import { Modal, AvailableLiquidity } from 'components/index';
import { useMediaQuery, Box, Flex, Image } from '@chakra-ui/react';

const DISABLED = false;

const Container = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
  return (
    <Flex align="center" direction="column">
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
      <div style={{
        display: "flex",
       flexDirection: isLargerThan1280 ? "row" : "column",
        marginTop: "calc(5% + 60px)",
       alignItems: "center",
        justifyContent: "center"
      }}>
        <Image
          src={require("../assets/poweredby.svg")}
          bottom="0"
         h="2rem"
       />
        <a href="https://connext.network/">
         <Image
           src={require("../assets/connext.svg")}
           bottom="0"
           h="3rem"
         />
       </a>
       <h3 style={{marginLeft: "15px"}}>x</h3>
       <a href="https://1hive.org">
         <Image
           src={require("../assets/1hive.svg")}
           bottom="0"
           h="3rem"
           
          />
       </a>
      </div>
    </Flex>
  );
};

export default Container;
