'use client';

import { Check } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      title: 'Thoroughly Vetted Nannies',
      description: 'Every nanny undergoes extensive background checks and interviews.'
    },
    {
      title: 'Experience & Expertise',
      description: 'Our nannies have years of childcare experience and relevant certifications.'
    },
    {
      title: 'Perfect Match Guarantee',
      description: 'We ensure you find a nanny that matches your family\'s needs and values.'
    },
    {
      title: '24/7 Support',
      description: 'Our team is always available to help with any questions or concerns.'
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
