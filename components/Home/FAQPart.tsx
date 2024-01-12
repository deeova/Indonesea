import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {home} from "@/pages/api/home";

const FAQ = () => {
  return (
    <div>
            <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        {home[0].FAQ.map((faq) => (
          <AccordionItem value={`item-${faq.id}`} key={faq.id} className="border-white">
            <AccordionTrigger className="hover:no-underline text-white ">
              <h4 className="text-[28px] leading-[28px] tracking-[2.24px] uppercase py-5">
                {faq.title}
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex flex-col gap-5">
                <img
                  src={faq.img}
                  alt="Raja Empat"
                  className="w-full h-[155px]"
                />
                <p className="text-white text-sm leading-[25px] text-justify">
                  {faq.desc}
                </p>
                <a href={faq.link} className="hover:underline text-white">
                  <p className="text-[15px] leading-[15px] tracking-[1.2px] py-3">
                    {faq.button}
                  </p>
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
