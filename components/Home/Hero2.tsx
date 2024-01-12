const Hero2 = () => {
    return (
      <section className="relative">
        <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto relative">
          <div className="py-150 flex flex-col gap-5">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] uppercase text-main text-center tracking-widest">
              Experience Indonesia<br/>Like Never Before
            </h2>
            <p className="text-base text-center lg:px-20">
              Indulge in personalized services, from gourmet cuisine prepared by
              our expert chefs to guided tours by knowledgeable local guides.
              Every aspect of your trip is crafted to ensure an unparalleled
              experience, merging luxury with the spirit of adventure.
            </p>
          </div>
        </div>
        <img src="/svg/pattern.svg" alt="pattern" className="absolute right-0 -bottom-14 lg:-bottom-[6.25rem] w-[88px] lg:w-auto" />
      </section>
    );
  };
  
  export default Hero2;
  