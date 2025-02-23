'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="HalaNanny" 
            width={32} 
            height={32} 
          />
          <span className="text-xl font-medium">HalaNanny</span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="flex gap-6 items-center">
            <Link href="/steps" className="text-gray-600 hover:text-gray-900">Steps</Link>
            <Link href="/our-nannies" className="text-gray-600 hover:text-gray-900">Our Nannies</Link>
            <Link href="/plans" className="text-gray-600 hover:text-gray-900">Plans</Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
            <Link href="/why-halananny" className="text-gray-600 hover:text-gray-900">Why HalaNanny</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-gray-600">Login</Button>
            <Button className="bg-teal-500 hover:bg-teal-600">Register</Button>
            <div className="flex items-center gap-2 ml-2">
              <span className="text-sm text-gray-600">En</span>
              <span className="text-sm text-gray-400">Ar</span>
              <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                <Image 
                  src="/globe.svg" 
                  alt="Language" 
                  width={20} 
                  height={20} 
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
