export default function getRpcUrl(networkId) {
  switch (networkId) {
    case 56:
      return 'https://bsc-dataseed1.ninicoin.io/';
    case 100:
      return 'https://xdai.poanetwork.dev/';
    case 128:
      return 'https://http-mainnet.hecochain.com/';
    case 137:
      return 'https://polygon-mainnet.infura.io/v3/e02a34c8aa5d4156aeed1142ea2173c8';
    case 250:
      return 'https://rpc.ftm.tools/';
    default:
      throw new Error('No RPC configured for network: ', networkId);
  }
}
