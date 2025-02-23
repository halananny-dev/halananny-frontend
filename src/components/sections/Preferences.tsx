'use client';

import { Button } from '../ui/button';

export function Preferences() {
  const preferences = [
    'Experience Level',
    'Age Group Expertise',
    'Language Skills',
    'Special Needs Experience',
    'Schedule Flexibility',
    'Educational Background',
    'First Aid Certification',
    'Cooking Skills'
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Share Your Preferences</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tell us what you're looking for in a nanny. We'll match you with candidates
              who meet your specific requirements and preferences.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {preferences.map((pref, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {pref}
                </div>
              ))}
            </div>
            <Button size="lg">Start Matching</Button>
          </div>
          <div className="bg-card rounded-lg p-8 border">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  What age group(s) are you looking for help with?
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Newborn (0-12 months)</option>
                  <option>Toddler (1-3 years)</option>
                  <option>Preschool (3-5 years)</option>
                  <option>School Age (5+ years)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  When do you need care?
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Occasional</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Any specific skills required?
                </label>
                <input
                  type="text"
                  placeholder="e.g., First Aid, Music, Languages"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <Button className="w-full">Find Matches</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
