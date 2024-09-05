'use client';

import { MultiSelect } from '@/components/ui/multi-select';
import { useState } from 'react';
import Button from 'src/components/Button';
import EventCard from 'src/components/EventCard';
import { useReadBasefriendsGetFollows, useReadEventRegistryGetEventById } from 'src/generated';

export default function Page({ params }: { params: { slug: string } }) {
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);

  if (!params.slug.startsWith('0x')) {
    return;
  }
  const { data: result } = useReadEventRegistryGetEventById({
    args: [params.slug as `0x${string}`],
  });
  const {data: friends} = useReadBasefriendsGetFollows({
	  args: ["0xc383c280b1627f049bef1019ec56ba829047dd518b01c1a2c9cda7cb032f760e"]
  })
  if (!result || !friends) {
    //should probs do suspense..
    return;
  }

  const friendsList = friends.map((label) => ({value: label.substring(0, label.length-12), label}))

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
        maxCount={3}
      />
      <p>
        If you are lucky enough to get tickets, you and all your friends will be
        able to attend together
      </p>
      <Button>Apply for Tickets!</Button>
    </div>
  );
}
