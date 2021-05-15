export default function getRpcUrl(networkId) {
  switch (networkId) {
    case 56:
      return 'https://dry-old-paper.bsc.quiknode.pro/aaefec831b81c9054475932c0b3330f3a3df4f71/';
    case 100:
      return 'https://xdai.poanetwork.dev';
    case 128:
      return 'https://http-mainnet.hecochain.com';
    case 137:
      return 'https://polygon-mainnet.infura.io/v3/e02a34c8aa5d4156aeed1142ea2173c8';
    default:
      throw new Error('No RPC configured for network: ', networkId);
  }
}
