import { cn, color, background } from '@coinbase/onchainkit/theme';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
    <Card>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Event on: {toDate(event.eventTimestamp)}</p>
        <p>Event Capacity: {event.maxEventCapacity}</p>
        <p>Max Group Size: {event.maxGroupSize}</p>
      </CardContent>
      <CardFooter>
        <p className="italic font-light">{event.location}</p>
      </CardFooter>
    </Card>
  );
}
