export default function networkName(id) {
  switch (Number(id)) {
    case 100:
    default:
      return 'xDai Network';
    case 137:
      return 'Matic Network';
  }
}
