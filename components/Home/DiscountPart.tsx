
const DiscountPart = () => {
  return (
    <section className=" bg-main">
      <div className="w-full px-5 lg:px-0 lg:w-[1082px] mx-auto relative">
        <div className="py-100">
          <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] uppercase  tracking-wide text-white text-center tracking-wider">
            20% of our revenue,
            <br />
            We allocate to NGOs dedicated
            <br /> to protecting the sea
          </h2>
        </div>
        <img
          src="/svg/bookmark.svg"
          alt=""
          className="absolute top-0 left-5 lg:left-0 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
        />
      </div>
    </section>
  );
};

export default DiscountPart;
