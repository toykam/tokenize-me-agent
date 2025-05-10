'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ProfileToken</div>
        <div className="hidden space-x-6 md:flex">
          <Link href="#home" className="hover:text-green-400">Home</Link>
          <Link href="#features" className="hover:text-green-400">Features</Link>
          <Link href="#how-it-works" className="hover:text-green-400">How It Works</Link>
          <Link href="#contact" className="hover:text-green-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}