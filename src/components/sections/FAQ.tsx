"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/i18/i18Context";
import Card from "./Card";

export default function FAQ() {
  const { t } = useI18n();

  return (
    <Card title={t.faqTitle}>
      <div className="max-w-4xl mx-auto mt-14">
        <Accordion type="single" collapsible>
          {t.faqs.map((faq: any, index: number) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-2">
              <AccordionTrigger className="text-xl font-semibold text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Card>
  );
}