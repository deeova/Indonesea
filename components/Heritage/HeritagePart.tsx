import React from "react";

const HeritagePart = () => {
  return (
    <section className="bg-main py-150">
      <div className=" relative flex flex-col gap-[35px] px-5 lg:px-0 w-full lg:w-[1082px] mx-auto">
        <h3 className="text-white text-center text-[45px] leading-[54px] uppercase">
          Phinisi: The Story
        </h3>
        <p className="text-white text-center text-base">
          Centuries ago, exotic spices, sandalwood and textiles were carried
          along the ancient spice trade route on Indonesia's wooden phinisi
          boats.  Sulawesi boatbuilders spent years handcrafting the vessels on
          the beach, a labor-intensive but methodical process guided by ritual.
        </p>
        <img src="/svg/pattern.svg" alt="pattern" className="absolute right-[20px] -top-[12.5rem] lg:right-0 lg:-top-60 w-[88px] lg:w-[140px]" />
      </div>
      <div className="lg:w-[1082px] mx-auto w-full px-5 lg:px-0">
        <div className="relative flex flex-col gap-[90px] overflow-hidden pt-[90px] h-full">
          <div className="top-10 lg:top-[5.5rem] absolute border-btn h-full border left-6 lg:left-1/2 "></div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-stretch lg:justify-between w-full right-timeline">
            <div className="order-1 w-fit lg:w-5/12 z-[5] lg:z-0">
              <img
                src="/background/timeline-left.png"
                alt="timeline-left"
                className="w-full object-contain lg:block hidden"
              />
              <img
                src="/svg/icon.svg"
                alt="pattern"
                className="w-[52px] h-[52px] lg:hidden block z-20"
              />
            </div>
            <div className="z-20 hidden items-center order-1 lg:flex">
              <img
                src="/svg/icon.svg"
                alt="pattern"
                className="w-[52px] h-[52px]"
              />
            </div>
            <div className="order-1 w-full lg:w-5/12 gap-5 flex flex-col lg:justify-center ">
              <h3 className="text-[40px] leading-[48px] text-white">1930</h3>
              <img
                src="/background/timeline-left.png"
                alt="timeline-left"
                className="w-full object-contain lg:hidden block"
              />
              <div className="flex flex-col gap-4">
                <p className="text-base text-justify text-white">
                In the 19th century, Sulawesi sailors began to combine the traditional tanja rig with the fore and aft rigs of the western ships that sailed through the archipelago!
                </p>
                <p className="text-base text-justify text-white">
                Since the 1930s, this sailing ship has adopted a new type of sail called the nade sail! This sail originated from cutters and sloops used by Western pearl seekers and small traders in Eastern Indonesia.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-stretch lg:justify-between lg:flex-row-reverse  w-full left-timeline">
            <div className="order-1 w-fit lg:w-5/12 z-[5] lg:z-0">
              <img
                src="/background/timeline-right.png"
                alt="timeline-right"
                className="w-full object-contain lg:block hidden"
              />
              <img
                src="/svg/icon.svg"
                alt="pattern"
                className="w-[52px] h-[52px] lg:hidden block z-20"
              />
            </div>
            <div className="z-20 hidden lg:flex items-center order-1">
              <img
                src="/svg/icon.svg"
                alt="pattern"
                className="w-[52px] h-[52px]"
              />
            </div>
            <div className="order-1 w-full lg:w-5/12 gap-5 flex flex-col lg:justify-center">
              <h3 className="text-[40px] leading-[48px] text-white">1970</h3>
              <img
                src="/background/timeline-right.png"
                alt="timeline-right"
                className="w-full object-contain lg:hidden block"
              />
              <div className="flex flex-col gap-4">
                <p className="text-base text-justify text-white">
                In the 1970s, more phinisi were equipped with engines, which favored the use of the lambo type hull. The sails were only used as a complement to the engine, so they were removed.
                </p>
                
              </div>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-stretch lg:justify-between w-full right-timeline">
            <div className="order-1 w-fit lg:w-5/12 z-[5] lg:z-0">
              <img
                src="/background/timeline-left-2.png"
                alt="timeline-left"
                className="w-full object-contain lg:block hidden"
              />
              <img
                src="/svg/icon.svg"
                alt="pattern"
                className="w-[52px] h-[52px] lg:hidden block z-20"
              />
            </div>
            <div className="z-20 hidden items-center order-1 lg:flex">
              <img
                src="/svg/icon.svg"
                alt="pattern"
                className="w-[52px] h-[52px]"
              />
            </div>
            <div className="order-1 w-full lg:w-5/12 gap-5 flex flex-col lg:justify-center">
              <h3 className="text-[40px] leading-[48px] text-white">2017</h3>
              <img
                src="/background/timeline-left-2.png"
                alt="timeline-left-2"
                className="w-full object-contain lg:hidden block"
              />
              <div className="flex flex-col gap-4">
                <p className="text-base text-justify text-white">
                In December 2017, UNESCO recognized this South Sulawesi's phinisi yachts as "Intangible Cultural Heritage of Humanity" and their unique heritage lives on today in our modern Phinisi yachts fleet, adapted for cruising, diving, and recreation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritagePart;
