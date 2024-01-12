import {home} from "@/pages/api/home";
import Link from "next/link";

const PartnerPart = () => {
  return (
    <section className="py-100 lg:py-[150px] bg-no-repeat bg-[length:100%] lg:bg-[length:1100px] bg-partner bg-[left_bottom_-1px] h-[1032px] lg:h-screen">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-150">
          <div>
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] uppercase text-main tracking-wider">
              contribute to environmental conservation with indonesea
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-justify text-base">
              Explore the breathtaking beauty of Indonesia with INDONESEA, where
              your luxury cruise adventure contributes to a greater cause. Our
              commitment goes beyond the extraordinary. We believe in giving
              back to the planet that inspires us.
            </p>
            <p className="text-justify text-base">
              That's why 20% of INDONESEA's revenue is dedicated to supporting
              environmental causes and preservation efforts. With every cruise,
              you're not just exploring the seas; you're helping protect them
              for future generations.
            </p>
            <div className="text-2xl">NGO Partner</div>
            <div className="flex flex-row w-full justify-between">
              {home[0].imgPartner.map((partner, index) => (
                <img
                  src={partner}
                  key={index}
                  alt=""
                  className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
                />
              ))}
            </div>
            <Link href="/">
              <div className="bg-btn text-white tracking-widest p-4 text-center w-full lg:w-fit">
                LEARN ABOUT OUR MISSION
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPart;
