'use client';

import Image from 'next/image';
import { Button } from '../ui/button';

export function Nannies() {
  const nannies = [
    {
      name: 'Sarah Johnson',
      experience: '8 years',
      specialties: ['Newborn Care', 'Early Education'],
      image: '/nannies/sarah.jpg'
    },
    {
      name: 'Maria Garcia',
      experience: '12 years',
      specialties: ['Special Needs', 'Multilingual'],
      image: '/nannies/maria.jpg'
    },
    {
      name: 'Emily Chen',
      experience: '6 years',
      specialties: ['Arts & Crafts', 'Music Education'],
      image: '/nannies/emily.jpg'
    },
    {
      name: 'Lisa Anderson',
      experience: '10 years',
      specialties: ['Child Development', 'First Aid Certified'],
      image: '/nannies/lisa.jpg'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Meet Some of Our Nannies</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our nannies are carefully selected professionals with extensive experience in childcare
          and early childhood development.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {nannies.map((nanny, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <Image
                  src={nanny.image}
                  alt={nanny.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{nanny.name}</h3>
                <p className="text-muted-foreground mb-4">{nanny.experience} Experience</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {nanny.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">View Profile</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">View All Nannies</Button>
        </div>
      </div>
    </section>
  );
}
