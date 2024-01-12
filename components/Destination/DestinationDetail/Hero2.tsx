import parse, {domToReact} from "html-react-parser";

interface Props {
  title: string;
  desc: string;
}
const options = {
  replace({attribs, children}: any) {
    if (!attribs) {
      return;
    }
    if (attribs) {
      return (
        <p className="text-base text-center lg:px-20">
          {domToReact(children, options)}
        </p>
      );
    }
  },
};

const Hero2 = ({title, desc}: Props) => {
  return (
    <section className="bg-main">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="py-70 lg:py-150 flex flex-col gap-5 text-white">
          <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] uppercase text-center tracking-widest">
            {title}
          </h2>
          {parse(desc, options)}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
