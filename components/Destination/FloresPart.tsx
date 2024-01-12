import Link from "next/link";
import React from "react";
import {FaChevronRight} from "react-icons/fa6";

const FloresPart = () => {
  return (
    <section className="w-full bg-floresMB lg:bg-flores bg-no-repeat bg-cover lg:bg-[length:100%]  lg:bg-[left_bottom_-1px] px-5 lg:px-0">
      <div className="lg:w-[1082px] py-100  w-full mx-auto lg:h-[545px] flex flex-col gap-90 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150">
          <div className="hidden lg:block"></div>
          <div className="lg:hidden flex flex-col gap-5">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] text-white uppercase text-left">
              FLORES
            </h2>
            <p className="text-sm text-justify text-white mb-5">
              Discover the wonders of Flores, an island of adventure and natural
              beauty. Encounter mystical Komodo dragons and witness the
              enchanting Kelimutu volcano, boasting tri-colored lakes. Flores
              beckons with thrilling wildlife and awe-inspiring landscapes.
            </p>
            <Link href="/destinations/flores" className="">
              <div className="flex gap-x-2 bg-btn text-white tracking-wider p-4 w-full items-center justify-center">
                <p>DISCOVER THIS DESTINATION </p> <FaChevronRight />
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] text-white uppercase text-left">
              FLORES
            </h2>
            <p className="text-sm text-justify text-white mb-5">
              Discover the wonders of Flores, an island of adventure and natural
              beauty. Encounter mystical Komodo dragons and witness the
              enchanting Kelimutu volcano, boasting tri-colored lakes. Flores
              beckons with thrilling wildlife and awe-inspiring landscapes.
            </p>
            <Link href="/destinations/flores" className="">
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

export default FloresPart;
