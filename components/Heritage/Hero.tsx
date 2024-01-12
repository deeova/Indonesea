import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <section className="bg-heritage bg-cover bg-no-repeat bg-[bottom_center]">
      <div className="w-full lg:w-[1082px] mx-auto h-screen flex flex-col justify-center items-center px-5 gap-[135px] lg:px-0 relative">
        <Navbar />
        <div className="flex flex-col gap-[50px] text-white text-center">
          <h1 className="text-[40px] lg:text-[52px] lg:leading-[60px] lg:tracking-[4.16px] uppercase">
            Phinisi Heritage & Tradition
          </h1>
          <div className="lg:text-[23px] lg:leading-7 lg:tracking-[1.84px] text-lg">
            Each yacht is a testament to Indonesia's rich seafaring history,
            offering an authentic, culturally immersive sailing experience. 
            Sail with us and discover Indonesia's heritage from the deck of a
            timeless Phinisi.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
