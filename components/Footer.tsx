import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-main w-full py-[50px] lg:py-20">
        <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-0 lg:items-center justify-between">
          <div className="">
            <Link href="/">
              <img
                src="/Logo-Indosea.svg"
                alt="Indonesea"
                className="w-[200px] lg:w-[195px]"
              />
            </Link>
          </div>
          <Link href="/">
            <div className="text-white lg:text-center w-fit">
              Jalan Raya Kerobokan No. 5x,
              <br />
              Badung, Bali 80361, Indonesia
            </div>
          </Link>
          <div>
            <a href="https://api.whatsapp.com/send?phone=+6287861854989&text=Hi">
              <div className="text-white flex flex-row gap-3 items-center">
                <img src="/svg/wa.svg" alt="" className="w-5 h-5" />
                +62 878 6185 4989
              </div>
            </a>
            <a href="mailto:info@indonesea.com">
              <div className="text-white flex flex-row gap-3 items-center">
                <img src="/svg/envelope.svg" alt="" className="w-5 h-5" />
                info@indonesea.com
              </div>
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <a href="www.instagram.com">
              <img src="/svg/instagram.svg" alt="" className="h-8" />
            </a>
            <a href="www.facebook.com">
              <img src="/svg/facebook.svg" alt="" className="h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-fourth w-full py-4">
        <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto text-white lg:items-center flex flex-col lg:flex-row justify-between">
          <div className="text-sm">COPYRIGHT © {currentYear}. INDONESEA</div>
          <div className="flex flex-row gap-x-5 lg:items-center order-first lg:order-none">
            <Link href="/privacy-policy">
              <div className="text-white text-xs uppercase">PRIVACY POLICY</div>
            </Link>
            <Link href="/terms">
              <div className="text-white text-xs uppercase">
                TERMS & CONDITIONS{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
