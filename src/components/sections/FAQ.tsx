'use client';

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: 'How do you screen your nannies?',
      answer: 'We conduct thorough background checks, verify references, check employment history, and conduct in-person interviews. All nannies must also provide proof of relevant certifications.'
    },
    {
      question: 'What happens if the nanny placement doesnt work out?',
      answer: 'We offer a replacement guarantee within the first 30 days. If youre not satisfied with your nanny, well help you find a replacement at no additional cost.'
    },
    {
      question: 'How much does it cost to hire a nanny?',
      answer: 'Nanny rates vary based on experience, qualifications, and responsibilities. We can help you understand market rates and develop a fair compensation package.'
    },
    {
      question: 'Do you offer temporary or backup care?',
      answer: 'Yes, we can help you find temporary or backup care solutions. Many of our nannies are available for short-term assignments or last-minute care.'
    },
    {
      question: 'Are your nannies insured?',
      answer: 'While individual nannies are typically covered under your homeowners insurance, we recommend additional liability insurance. We can provide guidance on insurance options.'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our nanny placement services and process.
        </p>
        <div className="max-w-3xl mx-auto">
          {/* <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion> */}
        </div>
      </div>
    </section>
  );
}
