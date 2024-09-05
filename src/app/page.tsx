'use client';
import Link from 'next/link';
import Button from '../components/Button';

export default function Page() {
  return (
    <>
      <Link href="/promote">
        <Button>Promote your event</Button>
      </Link>
      <Link href="/buy-tickets">
        <Button>Browse events</Button>
      </Link>
    </>
  );
}
