import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <section className="bg-destinations bg-cover bg-no-repeat bg-center">
      <div className="w-full h-screen flex flex-col justify-center items-center px-5 gap-[135px] lg:px-0 relative">
        <Navbar />
        <div className="flex flex-col gap-[50px] text-white text-center">
          <h1 className="text-[40px] lg:text-[52px] lg:leading-[60px] lg:tracking-[4.16px] uppercase">
          Luxury Destination
            <br />
            of Indonesea
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
