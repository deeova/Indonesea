import Link from "next/link";
import {FaChevronRight} from "react-icons/fa6";

const BandaPart = () => {
  return (
    <section className="w-full bg-bandaMB lg:bg-banda bg-no-repeat bg-cover lg:bg-[length:100%]  lg:bg-[left_bottom_-1px] px-5 lg:px-0">
      <div className="lg:w-[1082px] py-100  w-full mx-auto lg:h-[545px] flex flex-col gap-90 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] text-white uppercase text-left">
              Banda Neira
            </h2>
            <p className="text-sm text-justify text-white mb-5">
              Embark on a journey into the rich history and vibrant culture of
              Banda Neira. Formerly the epicenter of the Spice Trade, this
              destination captivates with a unique fusion of historical sites,
              fragrant nutmeg plantations, and pristine waters perfect for
              snorkeling and diving enthusiasts.
            </p>
            <Link href="/destinations/banda-neira" className="">
              <div className="flex gap-x-2 bg-btn text-white tracking-wider p-4 w-full items-center justify-center group">
                <p>DISCOVER THIS DESTINATION </p>{" "}
                <FaChevronRight className="group-hover:translate-x-5 transition-all duration-100" />
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BandaPart;
