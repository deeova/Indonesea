import React from "react";
import FAQ from "./FAQPart";

const DestinationPart = () => {
  return (
    <section className="lg:pt-[200px] py-150 relative bg-destination bg-no-repeat bg-cover bg-[center_top] lg:min-h-screen">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150 lg:pt-96">
            <div>
                <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] text-white uppercase text-left tracking-wider">Discover Enchanting Destinations<br/> with <br/>INDONESEA</h2>
            </div>
            <div>
                <FAQ/>
            </div>
        </div>
      </div>
      <img
          src="/svg/Pattern-Wave.svg"
          alt=""
          className="w-full absolute -top-14 md:-top-20 lg:-top-64 left-0 "
        />
    </section>
  );
};

export default DestinationPart;
