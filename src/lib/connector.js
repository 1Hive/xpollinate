import Notify from 'bnc-notify';
import Onboard from 'bnc-onboard';
import getRpcUrl from 'lib/rpc';

const networkId = 100;
const rpcUrl = getRpcUrl(networkId);
const dappId = process.env.NEXT_PUBLIC_BN_ONBOARD_API_KEY;

export function initOnboard(subscriptions) {
  const onboard = Onboard;
  return onboard({
    dappId,
    hideBranding: false,
    networkId,
    // darkMode: true,
    subscriptions,
    walletSelect: {
      wallets: [{ walletName: 'metamask' }],
    },
    walletCheck: [
      { checkName: 'derivationPath' },
      { checkName: 'connect' },
      { checkName: 'accounts' },
      { checkName: 'network' },
      { checkName: 'balance', minimumBalance: '0' },
    ],
  });
}

export function initNotify() {
  const notify = Notify;
  return notify({
    dappId,
    networkId,
  });
}
