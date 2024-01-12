import Link from "next/link";
import React from "react";
import {FaChevronRight} from "react-icons/fa6";

const Raja4Part = () => {
  return (
    <section className="lg:pt-[200px] py-100 relative bg-rajaMB lg:bg-raja bg-no-repeat bg-cover lg:bg-[left_bottom_-1px] lg:min-h-screen">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150 lg:pt-[17rem]">
          <div className="flex flex-col gap-5 justify-center">
            <h2 className="text-4xl font-light lg:text-[52px] lg:leading-[60px] text-white uppercase text-left">
              RAja Ampat
            </h2>
            <p className="text-sm text-justify text-white mb-5">
              Dive into the heart of marine biodiversity at Raja Ampat. Known
              for its pristine coral reefs and abundant marine life, it's a
              paradise for divers and snorkelers. Experience the spectacular
              underwater world and serene island landscapes in this unspoiled
              corner of the world.
            </p>
            <Link href="/destinations/raja-ampat" className="">
              <div className="flex gap-x-2 bg-btn text-white tracking-wider p-4 w-full items-center justify-center group">
                <p>DISCOVER THIS DESTINATION </p> <FaChevronRight className="group-hover:translate-x-5 transition-all duration-100"/>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <img
        src="/svg/Pattern-Wave.svg"
        alt="pattern"
        className="w-full absolute  -top-14 md:-top-20 lg:-top-64 left-0 "
      />
    </section>
  );
};

export default Raja4Part;
