import {useEffect, useState} from "react";
import {mbNavLink, navLink} from "@/pages/api/navLink";
import Link from "next/link";
import {RiMenu3Fill} from "react-icons/ri";
import {BsFacebook, BsInstagram, BsWhatsapp} from "react-icons/bs";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {FaChevronRight} from "react-icons/fa6";
import Image from "next/image";
import { Lang } from "./Lang";
import { Contact } from "./Contact";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [idHover, setIdHover] = useState(0);

  const handleHover = (id: number) => {
    setIsHover(!isHover);
    setIdHover(id);
  };

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop and Mobile start*/}
      <nav className="relative lg:absolute lg:top-0 z-10 w-full">
        <div className="absolute top-0 lg:static mx-0 px-5 lg:px-0 lg:mx-auto gap-[35px] flex flex-col justify-center items-center h-[175px]">
          <Link href="/">
            <img
              src="/Logo-Indosea.svg"
              alt="Indonesea"
              className="object-cover w-[230px] hidden lg:block"
            />
          </Link>
          <div
            className={`hidden lg:block  ${
              isSticky
                ? "fixed top-0 mx-auto w-screen bg-fourth ease-in-out duration-500"
                : ""
            }`}
          >
            <div
              className={`hidden lg:flex flex-row justify-center items-center h-[50px] ${
                isSticky ? "gap-x-[200px]" : ""
              }`}
            >
              <Link href="/">
                <img
                  src="/Logo-Indosea.svg"
                  alt="Indonesea"
                  className={`${isSticky ? "block w-[195px]" : "hidden"}`}
                />
              </Link>
              <ul className="flex gap-10 tracking-[0.5px] items-center text-white uppercase">
                {navLink &&
                  Array.isArray(navLink) &&
                  navLink.map((item) => (
                    <li
                      key={`menu-link-${item.id}`}
                      onMouseEnter={
                        item.title === "Destinations"
                          ? handleMouseEnter
                          : undefined
                      }
                      onMouseLeave={
                        item.title === "Destinations"
                          ? handleMouseLeave
                          : undefined
                      }
                      className={`${isSticky ? "py-5" : "py-0"}`}
                    >
                      <Link href={item.link}>{item.title}</Link>
                      {item.title === "Destinations" && (
                        <div className={`${open ? "block" : "hidden"}`}>
                          <div
                            className={`absolute left-1/2 transform -translate-x-1/2 translate-y-0 !w-[900px] !h-[300px] z-[9999] ${
                              isSticky ? "top-12 " : "top-32"
                            }`}
                          >
                            <div className="p-10">
                              <div
                                className={`bg-main/40 backdrop-blur-md border w-full`}
                              >
                                <div className="grid grid-cols-2 p-[30px] gap-[10px]">
                                  <div className="flex flex-col gap-3 justify-center">
                                    <img
                                      src={`/background/${
                                        image ? image : "img-nav-raja"
                                      }.png`}
                                      alt="test"
                                      className="w-full h-[150px] object-cover"
                                    />
                                    <Link href="/destinations" className="group">
                                      <div className="flex gap-x-2 bg-btn text-white tracking-wider p-4 w-full items-center justify-center ">
                                        <p>ALL DESTINATIONS </p>{" "}
                                        <FaChevronRight className="group-hover:translate-x-5 transition-all duration-100" />
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="flex flex-col text-white justify-center">
                                    <Link
                                      onMouseEnter={() => {
                                        setImage("img-nav-raja"),
                                          handleHover(1);
                                      }}
                                      onMouseLeave={() => {
                                        setImage(""), handleHover(1);
                                      }}
                                      href="/destinations/raja-ampat"
                                      className="p-5 group"
                                    >
                                      <div className="flex gap-x-2  items-center">
                                        <p>Raja Ampat</p>
                                        <FaChevronRight className="group-hover:translate-x-5 transition-all duration-100" />
                                      </div>
                                      <p
                                        className={`text-xs capitalize ${
                                          idHover === 1
                                            ? "block transition-all duration-100"
                                            : "hidden"
                                        }`}
                                      >
                                        Dive into the heart of marine
                                        biodiversity at Raja Ampat.
                                      </p>
                                    </Link>
                                    <Link
                                      onMouseEnter={() => {
                                        setImage("img-nav-flores"),
                                          handleHover(2);
                                      }}
                                      onMouseLeave={() => {
                                        setImage(""), handleHover(2);
                                      }}
                                      href="/destinations/flores"
                                      className="p-5 group"
                                    >
                                      <div className="flex gap-x-2  items-center">
                                        <p>FLORES ARCHIPELAGO</p>
                                        <FaChevronRight className="group-hover:translate-x-5 transition-all duration-100" />
                                      </div>
                                      <p
                                        className={`text-xs capitalize ${
                                          idHover === 2
                                            ? "block transition-all duration-100"
                                            : "hidden"
                                        }`}
                                      >
                                        Discover the wonders of Flores, an
                                        island of natural beauty.
                                      </p>
                                    </Link>
                                    <Link
                                      onMouseEnter={() => {
                                        setImage("img-nav-banda"),
                                          handleHover(3);
                                      }}
                                      onMouseLeave={() => {
                                        setImage(""), handleHover(3);
                                      }}
                                      href="/destinations/banda-neira"
                                      className="p-5 group"
                                    >
                                      <div className="flex gap-x-2  items-center">
                                        <p>BANDA NEIRA</p>
                                        <FaChevronRight className="group-hover:translate-x-5 transition-all duration-100" />
                                      </div>
                                      <p
                                        className={`text-xs capitalize ${
                                          idHover === 3
                                            ? "block transition-all duration-100"
                                            : "hidden"
                                        }`}
                                      >
                                        Embark on a journey into the rich
                                        culture of Banda Neira.
                                      </p>
                                    </Link>
                                    <Link
                                      onMouseEnter={() => {
                                        setImage("img-nav-labuan"),
                                          handleHover(4);
                                      }}
                                      onMouseLeave={() => {
                                        setImage(""), handleHover(4);
                                      }}
                                      href="/destinations/labuan-bajo"
                                      className="p-5 group"
                                    >
                                      <div className="flex gap-x-2  items-center">
                                        <p>LABUAN BAJO</p>
                                        <FaChevronRight className="group-hover:translate-x-5 transition-all duration-100" />
                                      </div>
                                      <p
                                        className={`text-xs capitalize ${
                                          idHover === 4
                                            ? "block transition-all duration-100"
                                            : "hidden"
                                        }`}
                                      >
                                        Labuan Bajo, the gateway to Komodo
                                        National Park.
                                      </p>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                <li className={`${isSticky ? "py-5" : "py-0"}`}>
                  <Contact />
                </li>
                <li className={`${isSticky ? "py-5" : "py-0"}`}>
                  <Lang />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Only Start*/}
        <div className="lg:hidden block w-full fixed top-0 left-0">
          <div
            className={`mx-0 px-5 flex flex-row justify-between items-center h-24 ${
              isSticky ? "bg-fourth" : "bg-transparent"
            }`}
          >
            <Link href="/">
              <img
                src="/Logo-Indosea.svg"
                alt="Indonesea"
                className="object-cover w-[195px]"
              />
            </Link>

            <Sheet>
              <SheetTrigger>
                <RiMenu3Fill size={30} className="text-btn" />
              </SheetTrigger>
              <SheetContent className="bg-main border-0 ">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex justify-center items-center pt-14">
                      <img
                        src="/Logo-Indosea.svg"
                        alt="Indonesea"
                        className="object-cover w-[195px]"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="py-10">
                  <ul className="flex flex-col items-center gap-5 ">
                    {mbNavLink &&
                      Array.isArray(mbNavLink) &&
                      mbNavLink.map((item) => (
                        <Link key={`menu-link-${item.id}`} href={item.link}>
                          <li
                            className="tracking-[1px] text-white uppercase font-font2B"
                            onMouseEnter={
                              item.title === "Destinations"
                                ? handleMouseEnter
                                : undefined
                            }
                            onMouseLeave={
                              item.title === "Destinations"
                                ? handleMouseLeave
                                : undefined
                            }
                          >
                            {item.title}
                            {item.title === "Destinations" && (
                              <ul
                                className={`flex flex-col items-center`}
                              >
                                {item.dropdownLinks?.map((navMB) => (
                                  <Link href={navMB.link} key={`menu-link-${navMB.id}`}>
                                    <li className="pt-5">{navMB.title}</li>
                                  </Link>
                                ))}
                              </ul>
                            )}
                          </li>
                        </Link>
                      ))}
                  </ul>
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                  <a href="/">
                    <BsFacebook
                      size={25}
                      className="text-white bg-btn p-1 rounded"
                    />
                  </a>
                  <a href="/">
                    <BsInstagram
                      size={25}
                      className="text-white bg-btn p-1 rounded"
                    />
                  </a>
                  <a href="/" target="_blank">
                    <BsWhatsapp
                      size={25}
                      className="text-white bg-btn p-1 rounded"
                    />
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        {/* Mobile Only End*/}
      </nav>
    </>
  );
};

export default Navbar;
