import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import getSigner from 'lib/signer';
import { initOnboard, initNotify } from 'lib/connector';

export const Web3Context = React.createContext({});

export const Web3Provider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [balance, setBalance] = useState(null);
  const [wallet, setWallet] = useState({});
  const [provider, setProvider] = useState();

  const [onboard, setOnboard] = useState(null);
  const [notify, setNotify] = useState(null);

  const [toAddress, setToAddress] = useState('');

  useEffect(() => {
    const onboard = initOnboard({
      address: setAddress,
      network: setNetwork,
      balance: setBalance,
      wallet: (wallet) => {
        if (wallet.provider) {
          setWallet(wallet);

          const ethersProvider = new ethers.providers.Web3Provider(
            wallet.provider
          );

          setProvider(ethersProvider);

          window.localStorage.setItem('selectedWallet', wallet.name);
        } else {
          setProvider(null);
          setWallet({});
        }
      },
    });

    setOnboard(onboard);

    setNotify(initNotify());
  }, []);

  useEffect(() => {
    const previouslySelectedWallet = window.localStorage.getItem(
      'selectedWallet'
    );

    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet);
    }
  }, [onboard]);

  async function sendHash() {
    if (!toAddress) {
      alert('An Ethereum address to send Eth to is required.');
      return;
    }

    const signer = getSigner(provider);

    const { hash } = await signer.sendTransaction({
      to: toAddress,
      value: 1000000000000000,
    });

    const { emitter } = notify.hash(hash);

    emitter.on('txPool', (transaction) => ({
      // message: `Your transaction is pending, click <a href="https://rinkeby.etherscan.io/tx/${transaction.hash}" rel="noopener noreferrer" target="_blank">here</a> for more info.`,
      // or you could use onclick for when someone clicks on the notification itself
      onclick: () =>
        window.open(`https://rinkeby.etherscan.io/tx/${transaction.hash}`),
    }));

    emitter.on('txSent', console.log);
    emitter.on('txConfirmed', console.log);
    emitter.on('txSpeedUp', console.log);
    emitter.on('txCancel', console.log);
    emitter.on('txFailed', console.log);

    // emitter.on("all", event => {
    //   console.log("ALLLLLLL", event)
    // })
  }

  async function sendInternalTransaction() {
    if (!toAddress) {
      // eslint-disable-next-line no-alert
      alert('An Ethereum address to send Eth to is required.');
      return;
    }

    const { hash } = await internalTransferContract.internalTransfer(
      toAddress,
      {
        value: 1000000000000000,
      }
    );

    const { emitter } = notify.hash(hash);

    emitter.on('txSent', console.log);
    emitter.on('txPool', console.log);
    emitter.on('txConfirmed', console.log);
    emitter.on('txSpeedUp', console.log);
    emitter.on('txCancel', console.log);
    emitter.on('txFailed', console.log);
  }

  async function sendTransaction() {
    if (!toAddress) {
      alert('An Ethereum address to send Eth to is required.');
    }

    const signer = getSigner(provider);

    const txDetails = {
      to: toAddress,
      value: 1000000000000000,
    };

    const sendTransaction = () =>
      signer.sendTransaction(txDetails).then((tx) => tx.hash);

    const gasPrice = () => provider.getGasPrice().then((res) => res.toString());

    const estimateGas = () =>
      provider.estimateGas(txDetails).then((res) => res.toString());

    const { emitter } = await notify.transaction({
      sendTransaction,
      gasPrice,
      estimateGas,
      balance: onboard.getState().balance,
      txDetails,
    });

    emitter.on('txRequest', console.log);
    emitter.on('nsfFail', console.log);
    emitter.on('txRepeat', console.log);
    emitter.on('txAwaitingApproval', console.log);
    emitter.on('txConfirmReminder', console.log);
    emitter.on('txSendFail', console.log);
    emitter.on('txError', console.log);
    emitter.on('txUnderPriced', console.log);
    emitter.on('txSent', console.log);
    emitter.on('txPool', console.log);
    emitter.on('txConfirmed', console.log);
    emitter.on('txSpeedUp', console.log);
    emitter.on('txCancel', console.log);
    emitter.on('txFailed', console.log);
  }

  return (
    <Web3Context.Provider
      value={{
        address,
        network,
        balance,
        wallet,
        onboard,
        notify,
        provider,
        setProvider,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
