export default function networkName(id) {
  switch (Number(id)) {
    case 100:
      return 'xdai';
    case 137:
      return 'matic';
  }
}
