import React, { useState, useContext, useEffect } from "react";
import { Web3Context } from 'contexts/Web3Context';
import { ConnextModal } from "@connext/vector-modal";
import { Grid, Button, TextField, Select, MenuItem } from "@material-ui/core";
import getRpcUrl from 'lib/rpc'

export default function Modal() {
  const {
    provider,
  } = useContext(Web3Context);
  const [showModal, setShowModal] = useState(false);
  const [injectedProvider, setInjectedProvider] = useState();
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [open, setOpen] = useState(false);
  
  useEffect(async () => {
    if (window.ethereum) {
      const req = await (window).ethereum.send(
        "eth_requestAccounts"
      );
      setInjectedProvider((window).ethereum);
    }
  }, window.ethereum)

  const handleChange = (event) => {
    setWithdrawalAddress(event.target.value);
  };

  const handleSubmit = (values) => {
    const errors = { receiverAddress: "" };
    if (!values.receiverAddress) {
      errors.receiverAddress = "Required";
    }
    return errors;
  };


  const XDAI_MATIC_TOKENS = [
    {
      name: "DAI",
      depositAssetId: "0x44fA8E6f47987339850636F88629646662444217", // xDai
      withdrawAssetId: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // Matic
    },
  ];

  const MATIC_XDAI_TOKENS = [
    {
      name: "DAI",
      depositAssetId: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // Matic
      withdrawAssetId: "0x44fA8E6f47987339850636F88629646662444217", // xDai
    },
  ];
  

  const networks = [
    {
      depositChainId: 100,
      depositChainName: "xDai Chain",
      withdrawChainId: 137,
      withdrawChainName: "Matic Mainnet",
      tokens: XDAI_MATIC_TOKENS,
    },
    {
      depositChainId: 137,
      depositChainName: "Matic Mainnet",
      withdrawChainId: 100,
      withdrawChainName: "xDai",
      tokens: MATIC_XDAI_TOKENS,
    },
  ];

  const handleNetwork = (event) => {
    setChain(networks[event.target.value]);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [chain, setChain] = useState(networks[0]);
  console.log('chain.depositChainId: ', chain?.depositChainId);
  console.log('chain.withdrawChainId: ', chain?.withdrawChainId);
  console.log('getRpcUrl[chain.depositChainId]: ', getRpcUrl[chain?.depositChainId]);
  console.log('getRpcUrl[chain.withdrawChainId]: ', getRpcUrl[chain?.withdrawChainId]);
  return (
    <>
     <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Select
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={handleNetwork}
              fullWidth
              defaultValue={0}
              // component={Select}
            >
              {networks.map((t, index) => {
                return (
                  <MenuItem value={index} key={index}>
                    {t.depositChainName} to {t.withdrawChainName}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Receiver Address"
              name="receiverAddress"
              aria-describedby="receiverAddress"
              defaultValue={withdrawalAddress}
              type="search"
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={2} justifyContent="center">
        <Grid item style={{ marginTop: 16 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!withdrawalAddress || !chain}
            onClick={() => setShowModal(true)}
          >
            Cross-Chain Transfer
          </Button>
        </Grid>
      </Grid>

      <ConnextModal
        showModal={showModal}
        routerPublicIdentifier="vector8Uz1BdpA9hV5uTm6QUv5jj1PsUyCH8m8ciA94voCzsxVmrBRor"
        depositAssetId={chain.tokens[0].depositAssetId}
        depositChainId={chain.depositChainId}
        withdrawAssetId={chain.tokens[0].withdrawAssetId}
        withdrawChainId={chain.withdrawChainId}
        withdrawalAddress={withdrawalAddress}
        onClose={() => setShowModal(false)}
        depositChainProvider={getRpcUrl(chain.depositChainId)}
        withdrawChainProvider={getRpcUrl(chain.withdrawChainId)}
        injectedProvider={injectedProvider}
      />
    </>
  );
}