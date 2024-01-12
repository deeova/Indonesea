import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <section className="bg-hero bg-cover bg-no-repeat bg-center">
      <div className="w-full h-screen flex flex-col justify-center items-center px-5 gap-[135px] lg:px-0 relative">
        <Navbar />
        <div className="flex flex-col gap-[50px] text-white text-center">
          <h1 className="text-[40px] lg:text-[52px] lg:leading-[60px] lg:tracking-[4.16px] uppercase">
            Luxury Yacht Cruises
            <br />
            with a SOUL
          </h1>
          <div className="lg:text-[23px] lg:leading-7 lg:tracking-[1.84px] text-lg">
            Charter your Indonesea’s private phinisi and embark on
            <br />
            an unforgettable journey to discover
            <br />
            Indonesia's heritage.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
