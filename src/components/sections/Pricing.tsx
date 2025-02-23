'use client';

import { Check } from 'lucide-react';
import { Button } from '../ui/button';

export function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '99',
      description: 'Perfect for families just starting their search',
      features: [
        'Access to nanny profiles',
        'Basic background checks',
        'Message up to 5 nannies',
        'Email support'
      ]
    },
    {
      name: 'Premium',
      price: '199',
      description: 'Most popular choice for families',
      features: [
        'All Basic features',
        'Advanced background checks',
        'Unlimited messages',
        'Priority support',
        'Interview scheduling',
        'Trial period option'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '399',
      description: 'Complete solution for long-term placement',
      features: [
        'All Premium features',
        'Dedicated account manager',
        'Contract assistance',
        'Replacement guarantee',
        'Legal consultation',
        'Extended support hours'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Plans and Pricing</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your family's needs. All plans include our basic
          screening process and support.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-8 border ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-4 py-1 text-sm bg-primary text-primary-foreground rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
