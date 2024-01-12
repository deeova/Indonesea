"use client";
import {useEffect, useState} from "react";
import Slider from "react-slick";
import CardPart from "./CardPart";
import Link from "next/link";
import {SimilarNext, SimilarPrev} from "../SlickControl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {yacht} from "@/pages/api/yachts";

const YachtPart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const settings = {
    className: "center",
    swipeToSlide: true,
    swipe: true,
    centerMode: true,
    infinite: false,
    centerPadding: "45px",
    slidesToShow: 1,
    speed: 500,
    prevArrow: <SimilarPrev />,
    nextArrow: <SimilarNext />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  useEffect(() => {
    if (yacht) {
      setIsLoading(false);
    }
  }, [yacht]);

  return (
    <section className="py-100 lg:py-150">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-150">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] uppercase tracking-wider">
              Experience Tradition and Luxury on Our Phinisi Yachts
            </h2>
            <div>
              <p className="text-base text-justify">
                Embark on a journey steeped in Indonesian heritage with
                INDONESEA's exclusive Phinisi yachts. Embark on a journey
                steeped in Indonesian heritage with INDONESEA's exclusive
                Phinisi yachts. These traditional wooden sailing vessels,
                handcrafted by master artisans, blend ancient maritime
                craftsmanship with modern luxury. Each yacht is a testament to
                Indonesia's rich seafaring history, offering an authentic,
                culturally immersive sailing experience. Onboard, you'll find
                elegant design, state-of-the-art amenities, and a crew deeply
                rooted in the nautical traditions of the Indonesian archipelago.
                Sail with us and discover Indonesia's heritage from the deck of
                a timeless Phinisi.
              </p>
            </div>
          </div>

          {/* Yachts Card Here */}
          <div className="relative flex flex-col justify-end">
            {isLoading ? (
              <div className="relative h-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* spinner */}
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-main"></div>
                </div>
              </div>
            ) : (
              
              <Slider {...settings}>
                {yacht.map((yacht, index) => (
                  <div key={index}>
                    <CardPart
                      imgUrl={yacht.img_featured}
                      title={yacht.title}
                      cabins={yacht.cabin}
                      guests={yacht.guest}
                      crews={yacht.crew}
                      lengths={yacht.length}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtPart;
