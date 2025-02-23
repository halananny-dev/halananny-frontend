'use client';

export function Steps() {
  const steps = [
    {
      title: 'Share Your Needs',
      description: 'Tell us about your family and what you\'re looking for in a nanny.'
    },
    {
      title: 'Browse Profiles',
      description: 'Review detailed profiles of qualified nannies in your area.'
    },
    {
      title: 'Connect & Interview',
      description: 'Schedule interviews with your favorite candidates.'
    },
    {
      title: 'Make Your Choice',
      description: 'Select the perfect nanny and start your journey together.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Simple Steps</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
