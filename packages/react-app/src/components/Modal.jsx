/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import { Web3Context } from 'contexts/Web3Context';
import { ConnextModal } from '@connext/vector-modal';
import { Grid, Button, TextField, Select, MenuItem } from '@material-ui/core';
import getRpcUrl from 'lib/rpc';

const Modal = (props) => {
  const { web3Provider, account } = useContext(Web3Context);
  const [showModal, setShowModal] = useState(false);
  const [withdrawalAddress, setWithdrawalAddress] = useState(account);
  const [senderOpen, setSenderOpen] = useState(false);
  const [receiverOpen, setReceiverOpen] = useState(false);

  const handleChange = (event) => {
    setWithdrawalAddress(event.target.value);
  };

  const handleSubmit = (values) => {
    const errors = { receiverAddress: '' };

    if (!values.receiverAddress) {
      errors.receiverAddress = 'Required';
    }
    return errors;
  };

  const NETWORKS = [
    {
      assetId: '0x0000000000000000000000000000000000000000',
      chainName: 'xDai Chain',
      chainId: 100,
      assetName: 'XDAI',
    },
    {
      assetId: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      chainName: 'Matic Mainnet',
      chainId: 137,
      assetName: 'DAI',
    },
    {
      assetId: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      chainName: 'Binance Smart Chain Mainnet',
      chainId: 56,
      assetName: 'DAI',
    },
    // {
    //   assetId: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    //   chainName: 'Huobi ECO Chain Mainnet',
    //   chainId: 128,
    //   assetName: 'HUSD',
    // },
  ];
  const [senderChain, setSenderChain] = useState(NETWORKS[0]);
  const [receiverChain, setReceiverChain] = useState(NETWORKS[1]);

  const swapChains = () => {
    const s = senderChain;
    const r = receiverChain;

    setSenderChain(r);
    setReceiverChain(s);
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Select
              id="sender-chain"
              open={senderOpen}
              onClose={() => setSenderOpen(false)}
              onOpen={() => setSenderOpen(true)}
              onChange={(event) => setSenderChain(NETWORKS[event.target.value])}
              fullWidth
              defaultValue={0}
              value={NETWORKS.findIndex(
                (n) => n.chainId === senderChain.chainId
              )}
              // component={Select}
            >
              {NETWORKS.map((t, index) => {
                return (
                  <MenuItem value={index} key={index}>
                    {t.chainName} - {t.assetName}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" fullWidth onClick={swapChains}>
              {'<>'}
            </Button>
          </Grid>

          <Grid item xs={5}>
            <Select
              id="receiver-chain"
              open={receiverOpen}
              onClose={() => setReceiverOpen(false)}
              onOpen={() => setReceiverOpen(true)}
              onChange={(event) =>
                setReceiverChain(NETWORKS[event.target.value])
              }
              fullWidth
              defaultValue={1}
              value={NETWORKS.findIndex(
                (n) => n.chainId === receiverChain.chainId
              )}
              // component={Select}
            >
              {NETWORKS.map((t, index) => {
                return (
                  <MenuItem
                    value={index}
                    key={index}
                    disabled={senderChain.chainId === t.chainId}
                  >
                    {t.chainName} - {t.assetName}
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
            disabled={!withdrawalAddress || !senderChain || !receiverChain}
            onClick={() => {
              console.log('senderChain: ', senderChain);
              console.log('receiverChain: ', receiverChain);
              console.log(
                'getRpcUrl(senderChain.chainId): ',
                getRpcUrl(senderChain.chainId)
              );
              console.log(
                'getRpcUrl(receiverChain.chainId): ',
                getRpcUrl(receiverChain.chainId)
              );
              setShowModal(true);
            }}
          >
            Cross-Chain Transfer
          </Button>
        </Grid>
      </Grid>

      {web3Provider !== 'undefined' ? (
        <ConnextModal
          showModal={showModal}
          routerPublicIdentifier="vector892GMZ3CuUkpyW8eeXfW2bt5W73TWEXtgV71nphXUXAmpncnj8"
          depositAssetId={senderChain.assetId}
          depositChainId={senderChain.chainId}
          withdrawAssetId={receiverChain.assetId}
          withdrawChainId={receiverChain.chainId}
          withdrawalAddress={withdrawalAddress}
          onClose={() => setShowModal(false)}
          depositChainProvider={getRpcUrl(senderChain.chainId)}
          withdrawChainProvider={getRpcUrl(receiverChain.chainId)}
          injectedProvider={web3Provider}
          loginProvider={window.ethereum}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Modal;
