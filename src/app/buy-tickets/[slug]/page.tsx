'use client';

import { MultiSelect } from '@/components/ui/multi-select';
import { useState } from 'react';
import Button from 'src/components/Button';
import EventCard from 'src/components/EventCard';
import {
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
  const { data: result } = useReadEventRegistryGetEventById({
    args: [params.slug as `0x${string}`],
  });

  // Get the users node (from their address)
  const { data: userNode } = useReadReverseRegistrarNode({
    args: [address as `0x${string}`],
  });

  // get their follows
  const { data: friendNodes } = useReadBasefriendsGetFollowNodes({
    args: [userNode ?? '0x'],
  });

  const { data: friendData } = useReadContracts({
    contracts: (friendNodes ?? []).map((node) => ({
      ...l2ResolverConfig,
      functionName: 'name',
      args: [node as `0x${string}`],
    })),
  });

  if (!result || !userNode || !friendNodes || !friendData) {
    //should probs do suspense..
    return;
  }

  const friendsList = friendNodes.map((node, i) => ({
    value: node,
    label: friendData[i].result ?? 'Unknown',
  }));

  return (
    <div className="flex flex-col gap-8">
      <EventCard event={result} />
      <label className="text-lg">
        Select your friends to apply for this event
      </label>
      <MultiSelect
        options={friendsList}
        onValueChange={setSelectedFriends}
        defaultValue={selectedFriends}
        placeholder="Choose your friends"
        maxCount={result.maxGroupSize}
      />
      <p>
        If you are lucky enough to get tickets, you and all your friends will be
        able to attend together
      </p>
      <Button>Apply for Tickets!</Button>
    </div>
  );
}
