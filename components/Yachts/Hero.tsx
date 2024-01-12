import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <section className="bg-yacht bg-cover bg-no-repeat bg-[center_bottom]">
      <div className="w-full lg:w-[1082px] mx-auto h-screen flex flex-col justify-center items-center px-5 gap-[135px] lg:px-0 relative">
        <Navbar />
        <div className="flex flex-col gap-[50px] text-white text-center">
          <h1 className="text-[40px] lg:text-[52px] lg:leading-[60px] lg:tracking-[4.16px] uppercase">
          INDONESEA Phinisi Yachts          </h1>
          <div className="lg:text-[23px] lg:leading-7 lg:tracking-[1.84px] text-lg">
          Indulge in personalized services, from gourmet cuisine<br/> prepared by our expert chefs to guided tours by<br/> knowledgeable local guides.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
