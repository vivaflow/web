'use client';

import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4 text-white">
        <Link href="/" className="text-2xl font-bold">
          Viva
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/solutions">Solutions</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {/* Language switcher removed */}
      </div>
    </header>
  );
};