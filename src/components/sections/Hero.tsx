'use client';

import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="pt-24 pb-12 min-h-screen flex items-center bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">
            Find Your Perfect Nanny with Confidence
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with experienced, vetted nannies who share your values and parenting style.
            Your family deserves the best care possible.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Find a Nanny</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
