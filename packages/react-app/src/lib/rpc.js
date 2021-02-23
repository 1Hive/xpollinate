export default function getRpcUrl(networkId) {
  switch (networkId) {
    case 137:
      return 'https://rpc-mainnet.matic.network';
    case 100:
    default:
      return 'https://rpc.xdaichain.com';
  }
}
