import { cn, color, background } from '@coinbase/onchainkit/theme';

export type Event = {
  title: string;
  description: string;
  location: string;
  ticketSaleStart: number;
  ticketSaleEnd: number;
  eventTimestamp: number;
  eventOwner: `0x${string}`;
  maxEventCapacity: number;
  maxGroupSize: number;
};

const toDate = (timestamp: number) =>
  new Date(timestamp * 1000).toLocaleString();

interface EventCardProps {
  event: Event;
}
export default function EventCard({ event }: EventCardProps) {
  return (
    <div
      className={cn(
        background.default,
        color.foreground,
        'border-black border rounded-xl p-4',
      )}
    >
      <h2 className="text-lg font-bold">{event.title}</h2>
      <div className="flex flex-row gap-4">
        <p className="italic font-light">{event.location}</p>
        <p>{toDate(event.eventTimestamp)}</p>
      </div>
      <p>{event.description}</p>
      <br />
      <p>Event Capacity: {event.maxEventCapacity}</p>
      <p>Max Group Size: {event.maxGroupSize}</p>
    </div>
  );
}
