"use client";

import Image from 'next/image';

function Header() {
  return (
    <header className="h-1/6 w-full flex items-center justify-start relative">
      <div className="relative w-[150px] h-[40px]">
        <Image src="/logo.svg" alt="Logo" fill style={{ objectFit: 'contain' }} />
      </div>
    </header>
  );
}

export default Header;
