import React from "react";

const PhinisiPart = () => {
  return (
    <section className="py-100 lg:py-150">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] text-main uppercase text-center lg:text-left tracking-wider">Phinisi Cruise at INDONESEA</h2>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            <p>
              INDONESEA is bringing that heritage and spirit of the ancient
              Indonesian sailors into your memorable experience.
            </p>
            <p>
              A great travel itinerary is all about adventure and capturing
              those precious moments! INDONESEA will take you on the cruise of a
              lifetime and help you create those special moments. 
            </p>
            <p>
              Our wide range of itineraries meets everyone's wishes. Whether you
              want a luxurious getaway from your busy life, precious family
              time, an adventure with friends, or a diving experience, INDONESEA
              can offer you all this and more! {" "}
            </p>
            <p>
              We can create itineraries that cater to your every wish on your
              journey.
            </p>
          </div>
        </div>
        <img src="/svg/pattern.svg" alt="pattern" className="absolute lg:right-0 -top-[9.5rem] lg:-top-60 w-[88px] lg:w-[140px]" />
      </div>
    </section>
  );
};

export default PhinisiPart;
