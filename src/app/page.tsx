'use client';
import Button from '../components/Button';

export default function Page() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 rounded-xl px-2 py-4 md:grow">
      <Button>Promote your event</Button>
      <Button>Browse events</Button>
    </section>
  );
}
