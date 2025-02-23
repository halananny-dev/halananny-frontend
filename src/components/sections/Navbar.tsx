'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          HalaNanny
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="#how-it-works">How it Works</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#about">About Us</Link>
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
