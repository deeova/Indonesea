import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  data: any
}
const FAQ = ({data}: Props) => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        {data.map((faq: any) => (
          <AccordionItem
            value={`item-${faq.id}`}
            key={faq.id}
            className="border-white"
          >
            <AccordionTrigger className="hover:no-underline text-main ">
              <h4 className="text-[28px] leading-[28px] tracking-[2.24px] uppercase py-5">
                {faq.title}
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex flex-col gap-5">
                <p className="text-main text-sm leading-[25px] text-justify">
                  {faq.desc}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
