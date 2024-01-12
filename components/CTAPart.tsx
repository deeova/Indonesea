import Link from "next/link";

const CtaPart = () => {
  return (
    <section className="py-[50px] lg:py-[150px] bg-cta bg-cover bg-no-repeat bg-top ">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150">
          <div className="flex flex-col gap-35">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] uppercase text-white tracking-wider text-left">
              Arrange Your Sustainable Luxury Voyage with INDONESEA
            </h2>
            <Link href="/" className="hidden lg:block">
              <div className="bg-btn text-white tracking-wider p-4 lg:w-fit w-full text-center">
                PLAN YOUR JOURNEY
              </div>
            </Link>
          </div>

          {/* Yachts Card Here */}
          <div className="flex flex-col justify-end">
            <p className="text-base text-justify text-white">
              Connect with our team today to craft a custom, eco-conscious
              adventure that aligns with your aspirations.  Whether it's
              exploring untouched islands or indulging in exclusive experiences,
              we ensure your journey is as responsible as it is luxurious. <br/><br/> Start
              planning your unforgettable voyage with INDONESEA – where luxury
              meets sustainability.
            </p>
          </div>
          <Link href="/" className="block lg:hidden">
              <div className="bg-btn text-white tracking-wider p-4 lg:w-fit w-full text-center">
                PLAN YOUR JOURNEY
              </div>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaPart;
