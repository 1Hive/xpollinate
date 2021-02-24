import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';

import getRPCUrl from 'lib/rpc';

export const Web3Context = React.createContext({});

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        100: getRPCUrl(100),
        137: getRPCUrl(137),
      },
    },
  },
};

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
});

export const Web3Provider = ({ children }) => {
  const [web3State, setWeb3State] = useState({});
  const { providerChainId, ethersProvider, web3Provider } = web3State;
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [loading, setLoading] = useState(true);

  const setWeb3Provider = useCallback(async (prov, updateAccount = false) => {
    try {
      if (prov) {
        const web3Provider = new Web3(prov);
        const provider = new ethers.providers.Web3Provider(
          web3Provider.currentProvider
        );

        const providerNetwork = await provider.getNetwork();

        setWeb3State({
          ethersProvider: provider,
          web3Provider: prov,
          providerChainId: providerNetwork.chainId,
        });
        if (updateAccount) {
          const signer = provider.getSigner();
          const gotAccount = await signer.getAddress();
          const gotBalance = await signer.getBalance();

          setAccount(gotAccount);
          setBalance(gotBalance);
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ web3ModalError: error });
    }
  }, []);

  const connectWeb3 = useCallback(async () => {
    try {
      setLoading(true);
      const modalProvider = await web3Modal.connect();

      await setWeb3Provider(modalProvider, true);

      // Subscribe to accounts change
      modalProvider.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
      });

      // Subscribe to chainId change
      modalProvider.on('chainChanged', (_chainId) => {
        setWeb3Provider(modalProvider);
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ web3ModalError: error });
    }
    setLoading(false);
  }, [setWeb3Provider]);

  const disconnect = useCallback(async () => {
    web3Modal.clearCachedProvider();
    setAccount();
    setWeb3State({});
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false;
    }
    if (web3Modal.cachedProvider) {
      connectWeb3();
    } else {
      setLoading(false);
    }
  }, [connectWeb3]);

  return (
    <Web3Context.Provider
      value={{
        ethersProvider,
        web3Provider,
        connectWeb3,
        loading,
        disconnect,
        providerChainId,
        account,
        balance,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
