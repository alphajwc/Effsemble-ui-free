import Accordion from "@/components/Accordion/Accordion"; //require Effsemble Components
import AccordionGroup from "@/components/Accordion/AccordionGroup"; //require Effsemble Components

const data = [
  {
    question: "What is a web template?",
    answer:
      "A web template is a pre-designed layout that you can use as a starting point for creating your website. It includes all the necessary elements, such as pages, components, and responsive designs, as well as icons, illustrations, and images.",
  },
  {
    question: "How do I use a web template?",
    answer:
      "To utilize a web template, download the template files, modify them with your distinctive content and branding, and subsequently upload them to your web hosting service.",
  },
  {
    question: "Do I need coding skills to use a web template?",
    answer:
      "The necessity for coding skills depends on the specific template. Some templates cater to users without coding expertise, while others might necessitate some coding knowledge for customization.",
  },
  {
    question: "Can I modify a web template to fit my needs?",
    answer:
      "Absolutely! You can tailor a web template to suit your requirements by altering the design, adding or eliminating content, and modifying the functionality.",
  },
  {
    question: "Are web templates responsive?",
    answer:
      "Numerous web templates are crafted to be responsive, ensuring they adapt to various screen sizes and devices for an ideal viewing experience.",
  },
  {
    question: "How do I choose the right web template for my needs?",
    answer:
      "When selecting the ideal web template for your needs, take into account your website's objectives, target audience, design inclinations, and functional necessities. Search for templates that align with these aspects and provide the features you require.",
  },
];

export default function FAQSectionStyleOne() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="mb-8 text-4xl font-bold">Frequently Asked Questions</h1>
      <AccordionGroup>
        {data.map((item, index) => (
          <Accordion key={index}>
            <Accordion.Title className="border p-5 text-gray-900 shadow-sm dark:text-gray-200">
              <h2 className="font-bold">Q: {item.question}</h2>
            </Accordion.Title>
            <Accordion.Content className="border-x border-b bg-gray-50 p-5 dark:bg-gray-900 dark:text-gray-200">
              <p>{item.answer}</p>
            </Accordion.Content>
          </Accordion>
        ))}
      </AccordionGroup>
    </div>
  );
}
