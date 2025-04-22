
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get to Lala Land?",
    answer: "Lala Land is located in Nuweiba, Egypt, on the east coast of the Sinai Peninsula. The nearest international airport is Sharm El Sheikh (SSH), about a 1.5-hour drive away. We can arrange transportation from the airport, or you can take a public bus to Nuweiba and we'll pick you up from there. Detailed directions will be sent after booking."
  },
  {
    question: "Do you have Wi-Fi?",
    answer: "We have limited Wi-Fi available in the common areas of the camp. However, we encourage our guests to disconnect from technology and reconnect with nature during their stay. The cellular reception is generally good if you need to stay connected."
  },
  {
    question: "What should I pack for my stay?",
    answer: "We recommend bringing light, breathable clothing, swimwear, sun protection (hat, sunglasses, sunscreen), a light jacket for cooler evenings, comfortable walking shoes, and a reusable water bottle. Towels and bedding are provided. Don't forget your personal toiletries and any medications you might need."
  },
  {
    question: "Are pets allowed at the camp?",
    answer: "We currently don't allow pets at Lala Land to protect the local wildlife and ensure a peaceful environment for all guests. If you're traveling with a service animal, please contact us in advance."
  },
  {
    question: "What kind of food do you serve?",
    answer: "We serve fresh, locally-sourced food with a mix of traditional Egyptian dishes and international options. Meals are primarily vegetarian with some seafood options. We can accommodate most dietary restrictions with advance notice."
  },
  {
    question: "Can I swim in the Red Sea directly from the camp?",
    answer: "Yes! Lala Land is located right on the beach with direct access to the Red Sea. The waters are crystal clear and perfect for swimming, snorkeling, and relaxing."
  },
  {
    question: "Is Lala Land suitable for families with children?",
    answer: "Yes, we welcome families! Children often enjoy our beach activities and the freedom to explore nature. However, please note that we don't have specific facilities designed for very young children, and parents are responsible for supervising their children at all times."
  },
  {
    question: "What activities are available at the camp?",
    answer: "We offer various activities including snorkeling, beach volleyball, desert hikes, yoga sessions, stargazing, bonfire nights, and cultural experiences with local Bedouin communities. Some activities may need to be booked in advance or might require an additional fee."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-lala-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="handwritten text-4xl text-lala-blue mb-3">Frequently Asked Questions</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Everything you need to know about your stay at Lala Land
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-lala-sand">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-lala-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-8 text-gray-600">
          <p>
            Have more questions? Feel free to <a href="#contact" className="text-lala-blue hover:underline">contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
