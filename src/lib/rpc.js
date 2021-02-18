export default function getRpcUrl(networkId) {
  switch (networkId) {
    case 137:
      return process.env.NEXT_PUBLIC_MATIC_RPC;
    case 100:
    default:
      return process.env.NEXT_PUBLIC_XDAI_RPC;
  }
}
