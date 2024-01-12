import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <section className="bg-respon bg-cover bg-no-repeat bg-[bottom_center]">
      <div className="w-full lg:w-[1082px] mx-auto h-screen flex flex-col justify-center items-center px-5 gap-[135px] lg:px-0 relative">
        <Navbar />
        <div className="flex flex-col gap-[50px] text-white text-center">
          <h1 className="text-[40px] lg:text-[52px] lg:leading-[60px] lg:tracking-[4.16px] uppercase">
          INDONESEA Contribution to Environmental Conservation
          </h1>
          <div className="lg:text-[23px] lg:leading-7 lg:tracking-[1.84px] text-lg">
          Our commitment goes beyond the extraordinary. We believe in giving back to the planet that inspires us.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
