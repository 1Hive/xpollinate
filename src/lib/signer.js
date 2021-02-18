import { ethers } from 'ethers';
import Web3 from 'web3';

export function getAddress() {
  // await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
  const signer = provider.getSigner();
  return signer.getAddress();
}

export async function sendTransaction(transaction) {
  // await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(Web3.givenProvider);
  const signer = provider.getSigner();

  const hash = await signer.sendUncheckedTransaction(transaction);
  return {
    hash,
    nonce: null,
    gasLimit: null,
    gasPrice: null,
    data: null,
    value: null,
    chainId: null,
    confirmations: 0,
    from: null,
    wait: (confirmations_1) =>
      provider.waitForTransaction(hash, confirmations_1),
  };
}

export default function getSigner(provider) {
  const signer = provider.getSigner();
  return signer;
}
