import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { providers, constants, Contract, utils } from 'ethers';
import { getSignerAddressFromPublicIdentifier } from '@connext/vector-utils';
import { ERC20Abi } from '@connext/vector-types';

import getRpcUrl from '../lib/rpc';
import networkName from '../lib/network';
import { NETWORKS, CONNEXT_ROUTER } from './Modal';

const AvailableLiquidity = () => {
  const [tableData, setTableData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const effect = async () => {
      const signerAddress =
        getSignerAddressFromPublicIdentifier(CONNEXT_ROUTER);
      const _tableData = [];

      for (const network of NETWORKS) {
        // eslint-disable-next-line no-console
        console.log('network: ', network);
        const chainProvider = new providers.JsonRpcProvider(
          getRpcUrl(network.chainId)
        );

        for (const [assetName, assetId] of Object.entries(network.assets)) {
          let onchainBalance;
          let decimals = 18;

          try {
            if (assetId === constants.AddressZero) {
              onchainBalance = await chainProvider.getBalance(signerAddress);
            } else {
              const tokenContract = new Contract(
                assetId,
                ERC20Abi,
                chainProvider
              );

              onchainBalance = await tokenContract.balanceOf(signerAddress);
              decimals = await tokenContract.decimals();
            }
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(
              `Couldn't get balance or decimals for asset ${assetName}:${assetId} on chain ${network.chainId}`,
              e
            );
          }

          const row = {
            chain: networkName(network.chainId),
            assetName,
            balance: onchainBalance
              ? utils.formatUnits(onchainBalance, decimals)
              : '-',
          };

          // eslint-disable-next-line no-console
          console.log('table row: ', row);
          _tableData.push(row);
        }
      }

      setTableData(_tableData);
      setLoadingData(false);
    };

    effect();
  }, []);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Destination Chain</TableCell>
            <TableCell align="right">Asset</TableCell>
            <TableCell align="right">Exit Liquidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loadingData ? (
            <TableRow>{'Loading...'}</TableRow>
          ) : (
            tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.chain}
                </TableCell>
                <TableCell align="right">{row.assetName}</TableCell>
                <TableCell align="right">
                  {parseFloat(row.balance).toFixed(2).toString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AvailableLiquidity;
