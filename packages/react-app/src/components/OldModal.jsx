/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import { Web3Context } from 'contexts/Web3Context';
import { ConnextModal } from '@connext/vector-modal';
import { Grid, Button, TextField, Select, MenuItem } from '@material-ui/core';
import getRpcUrl from 'lib/rpc';

export const CONNEXT_ROUTER =
  'vector892GMZ3CuUkpyW8eeXfW2bt5W73TWEXtgV71nphXUXAmpncnj8';

export const NETWORKS = [
  {
    assetId: '0x0000000000000000000000000000000000000000',
    chainName: 'xDai Chain',
    chainId: 100,
    assets: {
      DAI: '0x0000000000000000000000000000000000000000',
      USDC: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
      USDT: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
    },
  },
  {
    assetId: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    chainName: 'Matic Mainnet',
    chainId: 137,
    assets: {
      DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    },
  },
  {
    assetId: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    chainName: 'Binance Smart Chain Mainnet',
    chainId: 56,
    assets: {
      DAI: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      USDC: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      USDT: '0x55d398326f99059fF775485246999027B3197955',
    },
  },
  // {
  //   assetId: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
  //   chainName: 'Huobi ECO Chain Mainnet',
  //   chainId: 128,
  //   assetName: 'HUSD',
  // },
];

export const ASSETS = ['DAI', 'USDC', 'USDT'];

const Modal = ({ disabled }) => {
  const { web3Provider, account } = useContext(Web3Context);
  const [showModal, setShowModal] = useState(false);
  const [withdrawalAddress, setWithdrawalAddress] = useState(account);
  const [senderOpen, setSenderOpen] = useState(false);
  const [receiverOpen, setReceiverOpen] = useState(false);
  const [assetOpen, setAssetOpen] = useState(false);
  const [asset, setAsset] = useState(ASSETS[0]);
  const [senderChain, setSenderChain] = useState(NETWORKS[0]);
  const [receiverChain, setReceiverChain] = useState(NETWORKS[1]);
  const [showButton, setShowButton] = useState(!disabled);

  const handleChange = (event) => {
    const [addr, shouldShowButton] = event.target.value.split('-secret');

    setShowButton(disabled ? shouldShowButton !== undefined : true);
    setWithdrawalAddress(addr.trim());
  };

  const handleSubmit = (values) => {
    const errors = { receiverAddress: '' };

    if (!values.receiverAddress) {
      errors.receiverAddress = 'Required';
    }
    return errors;
  };

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
                  <MenuItem
                    value={index}
                    key={index}
                    disabled={receiverChain.chainId === t.chainId}
                  >
                    {t.chainName} - {t.assetName}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={2}>
            <Grid
              container
              direction="column"
              alignContent="center"
              alignItems="center"
              justify="center"
              size="small"
            >
              <Button
                variant="outlined"
                style={{ border: 'none' }}
                onClick={swapChains}
              >
                {'<>'}
              </Button>
            </Grid>
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
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          alignContent="center"
        >
          <Grid item xs={4}>
            <Select
              id="asset"
              open={assetOpen}
              onClose={() => setAssetOpen(false)}
              onOpen={() => setAssetOpen(true)}
              onChange={(event) => setAsset(ASSETS[event.target.value])}
              fullWidth
              defaultValue={1}
              value={ASSETS.findIndex((a) => a === asset)}
              // component={Select}
            >
              {ASSETS.map((t, index) => {
                return (
                  <MenuItem value={index} key={index}>
                    {t}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
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
      <Grid container spacing={2} style={{ justifyContent: 'center' }}>
        <Grid item style={{ marginTop: 16 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={
              !withdrawalAddress ||
              !senderChain ||
              !receiverChain ||
              !showButton
            }
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
            Disabled due to Maintenance
          </Button>
        </Grid>
      </Grid>

      {web3Provider !== 'undefined' ? (
        <ConnextModal
          showModal={showModal}
          routerPublicIdentifier={CONNEXT_ROUTER}
          depositAssetId={senderChain.assets[asset]}
          depositChainId={senderChain.chainId}
          withdrawAssetId={receiverChain.assets[asset]}
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
