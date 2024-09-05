'use client';

import Link from 'next/link';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

export default function Header() {
  const { address } = useAccount();
  return (
    <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
      <div>
        <Link href="/">
          <h1 className="font-extrabold text-xl">TickIt</h1>
        </Link>
        <p className="font-light italic">Buy tickets with your friends</p>
      </div>
      <div className="flex items-center gap-3">
        <SignupButton />
        {!address && <LoginButton />}
      </div>
    </div>
  );
}
