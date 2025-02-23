'use client';

import Image from 'next/image';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-b from-teal-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Nanny Registration
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our community of trusted childcare professionals. Register now to connect with families looking for dedicated nannies like you.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-teal-500 hover:bg-teal-600 text-lg px-8"
              >
                Register Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative w-[600px] h-[500px]">
            <Image
              src="/hero-nanny.jpg"
              alt="Nanny with children"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
