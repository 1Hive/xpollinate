export default function networkName(id) {
  switch (Number(id)) {
    case 56:
      return 'Binance Smart Chain';
    case 100:
      return 'xDai Network';
    case 137:
      return 'Matic Network';
    case 250:
      return 'Fantom Opera';
    default:
      return 'Unsupported Network';
  }
}
