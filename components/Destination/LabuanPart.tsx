import Link from "next/link";
import {FaChevronRight} from "react-icons/fa6";

const LabuanPart = () => {
  return (
    <section className="w-full bg-labuanMB lg:bg-labuan bg-no-repeat bg-cover lg:bg-[length:100%]  lg:bg-[left_bottom_-1px] px-5 lg:px-0">
      <div className="lg:w-[1082px] py-100  w-full mx-auto lg:h-[545px] flex flex-col gap-90 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150">
          <div className="hidden lg:block"></div>
          <div className="lg:hidden flex flex-col gap-5">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] text-white uppercase text-left">
              Labuan Bajo
            </h2>
            <p className="text-sm text-justify text-white mb-5">
              Labuan Bajo, the gateway to Komodo National Park, is a destination
              of extraordinary beauty. It's a launching point for trips to see
              the famous Komodo dragons, with stunning sunsets and a chance to
              explore some of Indonesia's most beautiful and diverse marine
              environments.
            </p>
            <Link href="/destinations/labuan-bajo" className="">
              <div className="flex gap-x-2 bg-btn text-white tracking-wider p-4 w-full items-center justify-center">
                <p>DISCOVER THIS DESTINATION </p> <FaChevronRight />
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] text-white uppercase text-left">
              Labuan Bajo
            </h2>
            <p className="text-sm text-justify text-white mb-5">
              Labuan Bajo, the gateway to Komodo National Park, is a destination
              of extraordinary beauty. It's a launching point for trips to see
              the famous Komodo dragons, with stunning sunsets and a chance to
              explore some of Indonesia's most beautiful and diverse marine
              environments.
            </p>
            <Link href="/destinations/labuan-bajo" className="">
              <div className="flex gap-x-2 bg-btn text-white tracking-wider p-4 w-full items-center justify-center group">
                <p>DISCOVER THIS DESTINATION </p> <FaChevronRight className="group-hover:translate-x-5 transition-all duration-100"/>
              </div>
            </Link>
          </div>
          <div className="hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default LabuanPart;
