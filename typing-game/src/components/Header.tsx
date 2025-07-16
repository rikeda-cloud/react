"use client";

import Image from 'next/image';
import { useRouter } from "next/navigation";

interface HeaderProps {
  path?: string;
};

function Header({ path = "/" }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="absolute top-0 left-0 p-4 md:p-8">
      <div className="relative w-[150px] h-[40px] cursor-pointer">
        <Image src="/logo.svg" alt="Logo" fill style={{ objectFit: 'contain' }} onClick={() => router.push(path)} />
      </div>
    </header>
  );
}

export default Header;
