export default function networkName(id) {
  switch (Number(id)) {
    case 56:
      return 'Binance Smart Chain';
    case 100:
      return 'xDai Network';
    case 137:
      return 'Matic Network';
    default:
      return 'Unsupported Network';
  }
}
