import {home} from "@/pages/api/home";

const EnvironPart = () => {
  return (
    <section>
      <div className="w-full py-80 lg:py-150 px-5 lg:px-0 lg:w-[1082px] mx-auto grid grid-cols-1 gap-[65px] lg:grid-cols-2">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl lg:text-[48px] lg:leading-[57px] uppercase text-main text-center lg:text-left ">
            Our Action,<br/>Your Contribution
          </h2>
          <div className="hidden flex-col gap-2 lg:flex">
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
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-base text-center lg:text-justify">
            At INDONESEA, we believe paradise isn't just our destination, it
            also needs our efforts to create one. That's why 20% of INDONESEA's
            revenue is dedicated to supporting environmental causes and
            preservation efforts. With every cruise, you're not just exploring
            the seas; you're helping protect them for future generations.
          </p>
          <p className="text-base text-center lg:text-justify">
            Your journey becomes a force for good. We partner with renowned
            conservation organizations, channeling your support directly to
            their impactful initiatives. From coral reef restoration projects to
            protecting endangered marine life, your INDONESEA experience becomes
            a ripple of positive change.
          </p>
          <p className="text-base text-center lg:text-justify">
            Explore the breathtaking beauty of Indonesia with INDONESEA, where
            your luxury cruise adventure contributes to a greater cause.
          </p>
          <div className="flex flex-col gap-2 lg:hidden pt-5">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironPart;
