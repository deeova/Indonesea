import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import parse, {domToReact} from "html-react-parser";

interface Props {
  title: string;
  desc: string;
  img: string;
  data: any;
}
const options = {
  replace({attribs, children}: any) {
    if (!attribs) {
      return;
    }
    if (attribs) {
      return (
        <p className="text-base text-justify">
          {domToReact(children, options)}
        </p>
      );
    }
  },
};
const DestinationHeading = ({title, desc, img, data}: Props) => {
  return (
    <section className="py-100 lg:py-150 relative">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] uppercase tracking-wider">
              {title}
            </h2>
            {parse(desc, options)}
            <div className="hidden lg:block">
              <img src={img} alt={`img-${title}`} className="w-full h-[400px]"/>
            </div>
          </div>

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
                  className="border-main"
                >
                  <AccordionTrigger className="hover:no-underline lg:hover:underline text-main ">
                    <h4 className="text-[28px] leading-[28px] tracking-[2.24px] uppercase py-3 w-4/5 text-left">
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
        </div>
      </div>
      <img src="/svg/pattern.svg" alt="pattern" className="absolute right-0 -top-4 lg:-top-[2.25rem] w-[80px] lg:w-auto" />
    </section>
  );
};

export default DestinationHeading;
