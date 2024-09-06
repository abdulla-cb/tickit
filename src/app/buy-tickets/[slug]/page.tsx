'use client';

import { MultiSelect } from '@/components/ui/multi-select';
import { BASE_SEPOLIA_CHAIN_ID } from '@/constants';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import { notFound } from 'next/navigation';
import { useMemo, useState } from 'react';
import EventCard from 'src/components/EventCard';
import {
  eventRegistryConfig,
  l2ResolverConfig,
  useReadBasefriendsGetFollowNodes,
  useReadEventRegistryGetEventById,
  useReadReverseRegistrarNode,
} from 'src/generated';
import { useAccount, useReadContracts } from 'wagmi';

export default function Page({ params }: { params: { slug: string } }) {
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const { address } = useAccount();

  if (!params.slug.startsWith('0x')) {
    return;
  }

  // Get data for this event
  const { data: result, error: resultError } = useReadEventRegistryGetEventById(
    {
      args: [params.slug as `0x${string}`],
    },
  );

  // Get the users node (from their address)
  const { data: userNode } = useReadReverseRegistrarNode({
    args: [address as `0x${string}`],
  });

  // get their follows nodes
  const { data: friendNodes } = useReadBasefriendsGetFollowNodes({
    args: [userNode ?? '0x'],
  });

  const { data: friendData } = useReadContracts({
    contracts: (friendNodes ?? []).flatMap((node) => [
      {
        ...l2ResolverConfig,
        functionName: 'name',
        args: [node as `0x${string}`],
      },
      {
        ...l2ResolverConfig,
        functionName: 'addr',
        args: [node as `0x${string}`],
      },
    ]),
  });

  const isDisabled = useMemo(() => {
    if (!result) {
      return;
    }
    if (selectedFriends.length > result.maxGroupSize - 1) {
      return true;
    }
    return false;
  }, [selectedFriends, result]);

  if (resultError) {
    notFound();
  }

  if (!address) {
    return 'You should probably log in... Hit one of those buttons at the top';
  }

  if (!result || !userNode || !friendNodes) {
    //should probs do suspense..
    return;
  }

  const friendsList = friendNodes.map((node, i) => ({
    label: friendData ? friendData[2 * i].result ?? 'Unknown' : 'Unknown',
    value: friendData ? friendData[2 * i + 1].result ?? 'Unknown' : 'Unknown',
  }));

  return (
    <div className="flex flex-col gap-8">
      <EventCard event={result} />
      {friendsList.length > 0 ? (
        <>
          <label className="text-lg">
            Select your friends to apply for this event
          </label>
          <MultiSelect
            options={friendsList}
            onValueChange={setSelectedFriends}
            defaultValue={selectedFriends}
            placeholder="Choose your friends"
            maxCount={result.maxGroupSize - 1}
          />
          <p>
            If you are lucky enough to get tickets, you and all your friends
            will be able to attend together
          </p>
          {isDisabled && (
            <p className="text-destructive">
              The maximum group size for this event is {result.maxGroupSize}
            </p>
          )}
        </>
      ) : (
        <div>
          <p>Sorry, we couldn't find any of your friends.</p>
          <p>
            Go to <span className="underline">basefriends</span> to add your
            friends.
          </p>
          <p>You can still apply for tickets on your own though!</p>
        </div>
      )}
      <Transaction
        contracts={[
          {
            ...eventRegistryConfig,
            functionName: 'requestTicket',
            args: [params.slug, selectedFriends],
          },
        ]}
        className="w-[450px]"
        chainId={BASE_SEPOLIA_CHAIN_ID}
        onError={(err) => console.error(err)}
        onSuccess={() => window.alert('Contratulations!')}
      >
        <TransactionButton
          disabled={isDisabled}
          text="Apply for tickets"
          className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]"
        />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
