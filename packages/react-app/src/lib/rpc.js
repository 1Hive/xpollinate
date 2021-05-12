export default function getRpcUrl(networkId) {
  switch (networkId) {
    case 56:
      return 'https://dry-old-paper.bsc.quiknode.pro/aaefec831b81c9054475932c0b3330f3a3df4f71/';
    case 100:
      return 'https://xdai.poanetwork.dev';
    case 128:
      return 'https://http-mainnet.hecochain.com';
    case 137:
      return 'https://rpc-connext-mainnet.maticvigil.com/v1/7d850b583693ed94dcf7e6f7088cf0bac4289e0d';
    default:
      throw new Error('No RPC configured for network: ', networkId);
  }
}
