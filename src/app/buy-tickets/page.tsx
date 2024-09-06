'use client';

import EventCard from '@/components/EventCard';
import {
  useReadEventRegistryGetNumberOfEvents,
  useReadEventRegistryListEvents,
} from '@/generated';
import Link from 'next/link';

export default function Page() {
  const { data: totalNumberOfEvents } = useReadEventRegistryGetNumberOfEvents();
  const offset = 0;
  // this will overflow at some point... probably not any time soon though
  const limit = Math.min(10, Number(totalNumberOfEvents ?? 0));
  const { data: paginatedEvents } = useReadEventRegistryListEvents({
    args: [BigInt(offset), BigInt(limit)],
  });

  if (totalNumberOfEvents === undefined || paginatedEvents === undefined) {
    return 'Something went wrong';
  }

  return (
    <div>
      <h3 className="font-semibold text-lg">Listing all events here</h3>
      {paginatedEvents.length > 0 && (
        <ul>
          {paginatedEvents.map((event, i) => {
            return (
              <li key={i}>
			  <Link href={`/buy-tickets/${event.hash}`}>
                <EventCard event={event.info} />
				</Link>
              </li>
            );
          })}
        </ul>
      )}

      <p>
        Showing {offset}-{offset + limit} of {Number(totalNumberOfEvents)}
      </p>
    </div>
  );
}
