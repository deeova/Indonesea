import Link from "next/link";
import React from "react";

const DestinationsPart = () => {
  return (
    <>
      <section className="bg-third">
        <div className="w-full lg:w-[1082px] mx-auto text-center py-[35px]">
          <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] uppercase text-main text-center tracking-widest">
            THE DESTINATIONS
          </h2>
        </div>
      </section>
      <section className="">
        <div className="grid grid-cols-1  lg:grid-cols-4 ">
          <Link href="/destinations/raja-ampat" className="group">
            <div className="flex h-[230px] lg:h-[450px] flex-col justify-end text-center items-center py-[35px] bg-mbRaja lg:bg-yacht-raja bg-no-repeat bg-cover bg-bottom">
              <h4 className="text-[28px] leading-7 tracking-[2.24px] uppercase text-white lg:group-hover:-translate-y-20 transition-all duration-100">
                Raja Ampat
              </h4>
            </div>
          </Link>
          <Link href="/destinations/flores" className="group">
            <div className="flex h-[230px] lg:h-[450px] flex-col justify-end text-center items-center py-[35px] bg-mbFlores lg:bg-yacht-flores bg-no-repeat bg-cover bg-bottom">
              <h4 className="text-[28px] leading-7 tracking-[2.24px] uppercase text-white lg:group-hover:-translate-y-20 transition-all duration-100">
                Flores
              </h4>
            </div>
          </Link>
          <Link href="/destinations/banda-neira" className="group">
            <div className="flex h-[230px] lg:h-[450px] flex-col justify-end text-center items-center py-[35px] bg-mbBanda lg:bg-yacht-banda bg-no-repeat bg-cover bg-bottom">
              <h4 className="text-[28px] leading-7 tracking-[2.24px] uppercase text-white lg:group-hover:-translate-y-20 transition-all duration-100">
                Banda Neira
              </h4>
            </div>
          </Link>
          <Link href="/destinations/labuan-bajo" className="group">
            <div className="flex h-[230px] lg:h-[450px] flex-col justify-end text-center items-center py-[35px] bg-mbBajo lg:bg-yacht-labuan bg-no-repeat bg-cover bg-bottom">
              <h4 className="text-[28px] leading-7 tracking-[2.24px] uppercase text-white lg:group-hover:-translate-y-20 transition-all duration-100">
                Labuan Bajo
              </h4>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default DestinationsPart;
