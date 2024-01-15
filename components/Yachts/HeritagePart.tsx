import Link from "next/link";
import React from "react";

const HeritagePart = () => {
  return (
    <section className="bg-main">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-80 lg:py-100 w-full lg:w-[1082px] mx-auto px-5 lg:px-0 border-white border-b ">
        <h2 className="text-4xl lg:col-span-2 lg:text-[52px] lg:leading-[60px] uppercase text-center lg:text-left text-white tracking-widest">
          Experience Tradition and Luxury on Our Phinisi Yachts
        </h2>
        <div className="flex flex-col gap-10">
          <p className="text-white text-base text-center lg:text-justify">
            Each yacht is a testament to Indonesia's rich seafaring history,
            offering an authentic, culturally immersive sailing experience. Sail
            with us and discover Indonesia's heritage from the deck of a
            timeless Phinisi.
          </p>
          <Link href="/heritage" className="">
            <div className="bg-btn text-white tracking-wider p-4 lg:w-fit w-full text-center">
              LEARN ABOUT PHINISI HERITAGE
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeritagePart;
