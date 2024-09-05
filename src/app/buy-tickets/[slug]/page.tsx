'use client';

import { MultiSelect } from '@/components/ui/multi-select';
import { useState } from 'react';
import Button from 'src/components/Button';
import EventCard from 'src/components/EventCard';
import { useReadEventRegistryGetEventById } from 'src/generated';

export default function Page({ params }: { params: { slug: string } }) {
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);

  if (!params.slug.startsWith('0x')) {
    return;
  }
  const { data: result } = useReadEventRegistryGetEventById({
    args: [params.slug as `0x${string}`],
  });
  if (!result) {
    //should probs do suspense..
    return;
  }

  const friendsList = [
    { value: 'abs', label: 'abs.base.eth' },
    { value: 'katzman', label: 'katzman.base.eth' },
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      <EventCard event={result} />
      <label className="text-lg">
        Select your friends to apply for this event
      </label>
      <MultiSelect
        options={friendsList}
        onValueChange={setSelectedFriends}
        defaultValue={selectedFriends}
        placeholder="Choose your friends!"
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
