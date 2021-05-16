export default function getRpcUrl(networkId) {
  switch (networkId) {
    case 56:
      return 'https://dry-old-paper.bsc.quiknode.pro/aaefec831b81c9054475932c0b3330f3a3df4f71/';
    case 100:
      return 'https://xdai.poanetwork.dev';
    case 128:
      return 'https://http-mainnet.hecochain.com';
    case 137:
      return 'https://ancient-lively-sky.matic.quiknode.pro/05cf5df0b0658d5cb3ab576ec4aefefc3731e0c5/';
    default:
      throw new Error('No RPC configured for network: ', networkId);
  }
}
