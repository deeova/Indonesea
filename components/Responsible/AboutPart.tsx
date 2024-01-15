import Link from "next/link";
import {home} from "@/pages/api/home";

const AboutPart = () => {
  return (
    <section className="bg-third py-100 lg:py-150">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150">
          <div className="relative flex flex-col justify-center">
            <img
              src="/package/Img-wioutpattren.png"
              alt="honeymoon"
              className="object-cover h-full"
            />
            <img src="/svg/pattern.svg" alt="pattern" className=" w-[100px] h-[130px] lg:w-[120px] lg:h-[150px] object-cover absolute top-5 -left-5 lg:-left-10" />
          </div>
          <div className="flex flex-col gap-11 justify-stretch">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] uppercase tracking-wider">
            Why Choose Indonesea?
            </h2>
            <div className="flex flex-col gap-[10px]">
              {home[0].aboutPart.map((p, index) => (
                <div className="flex gap-5 items-center" key={index}>
                  <img
                    src="/svg/pattern.svg"
                    alt="Pattern"
                    className="w-5 h-6 object-cover"
                  />
                  <p className="text-base">{p}</p>
                </div>
              ))}
            </div>
            <Link href="/about-us">
              <div className="bg-btn text-white tracking-wider p-4 w-full lg:w-fit text-center">
                ABOUT US
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPart;
