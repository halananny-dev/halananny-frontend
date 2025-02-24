import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Card from "./Card";
import { faqs } from "../constants";

export default function FAQ() {
  return (
    <Card title="FAQ">
      <div className="max-w-4xl mx-auto mt-14">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index} mb-2`}>
              <AccordionTrigger className="text-xl font-semibold text-gray-900">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Card>
  );
}
