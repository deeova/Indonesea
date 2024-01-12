import Link from "next/link";

const DestinationsPart = () => {
  return (
    <section className="lg:pt-[200px] py-150 relative bg-atf-about bg-no-repeat bg-cover bg-[center_bottom] lg:min-h-screen">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150 lg:pt-96">
            <div>
                <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] text-white uppercase text-left tracking-wider">Where Tradition and Luxury Meets</h2>
            </div>
            <div className="flex flex-col gap-10">
                <p className="text-justify text-white text-base">Embark on a journey steeped in Indonesian heritage with INDONESEA's exclusive Phinisi yachts. These traditional wooden sailing vessels, handcrafted by master artisans, blend ancient maritime craftsmanship with modern luxury. Sail with us and discover Indonesia's heritage from the deck of a timeless Phinisi.</p>
                <Link href="/" className="">
            <div className="bg-btn text-white tracking-wider p-4 lg:w-fit w-full text-center">
              LEARN ABOUT PHINISI HERITAGE
            </div>
          </Link>
            </div>
        </div>
      </div>
      <img
          src="/svg/Pattern-Wave.svg"
          alt=""
          className="w-full absolute -top-14 md:-top-20 lg:-top-64 left-0 "
        />
    </section>
  );
};

export default DestinationsPart;
