'use client';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import eventRegistryArtifact from '../../../onchain/out/EventRegistry.sol/EventRegistry.json';
import {
  BASE_SEPOLIA_CHAIN_ID,
  eventRegistryContractAddress,
} from '../../constants';
import { eventRegistryConfig } from 'src/generated';

const abi = eventRegistryArtifact.abi;

export default function Page() {
  return (
    <Transaction
      contracts={[
        {
          ...eventRegistryConfig,
          functionName: 'registerEvent',
          args: [
            'Event Title',
            'Event Description',
            'Event Location',
            0,
            4,
            6,
            10,
            12,
          ],
        },
      ]}
      className="w-[450px]"
      chainId={BASE_SEPOLIA_CHAIN_ID}
      onError={(err) => console.error(err)}
      onSuccess={(res) => console.log(res)}
    >
      <TransactionButton className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]" />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  );
}
