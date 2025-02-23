'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Jessica R.',
      role: 'Mother of two',
      image: '/testimonials/jessica.jpg',
      content: 'Finding our nanny through HalaNanny was the best decision we made. The process was smooth, and we found someone who truly understands our familys needs.',
      rating: 5
    },
    {
      name: 'Ahmed M.',
      role: 'Father of three',
      image: '/testimonials/ahmed.jpg',
      content: 'The quality of nannies on this platform is exceptional. We appreciated the thorough vetting process and the support throughout our search.',
      rating: 5
    },
    {
      name: 'Sarah K.',
      role: 'Single parent',
      image: '/testimonials/sarah.jpg',
      content: 'As a working single parent, finding reliable childcare was crucial. HalaNanny made it easy to find someone I could trust completely.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">What Parents Say</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what families who've found their
          perfect nanny through our platform have to say.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border">
              <div className="flex gap-2 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
