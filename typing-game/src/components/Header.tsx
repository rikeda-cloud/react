"use client";

import Image from 'next/image';
import { useRouter } from "next/navigation";

interface HeaderProps {
  path?: string;
};

function Header({ path = "/" }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="h-1/6 w-full flex items-center justify-start relative">
      <div className="relative w-[150px] h-[40px]">
        <Image src="/logo.svg" alt="Logo" fill style={{ objectFit: 'contain' }} onClick={() => router.push(path)} />
      </div>
    </header>
  );
}

export default Header;
