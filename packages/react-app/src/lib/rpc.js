export default function getRpcUrl(networkId) {
  switch (networkId) {
    case 56:
      return 'https://bsc-dataseed1.binance.org';
    case 100:
      return 'https://xdai.poanetwork.dev';
    case 128:
      return 'https://http-mainnet.hecochain.com';
    case 137:
      return 'https://matic-mainnet.chainstacklabs.com';
    default:
      throw new Error('No RPC configured for network: ', networkId);
  }
}
