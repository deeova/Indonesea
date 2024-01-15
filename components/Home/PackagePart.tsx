import { useState } from "react";
import Form from "../Form";

const PackagePart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="w-full bg-third pt-150 pb-100 lg:pb-96 px-5 lg:px-0">
      <div className="lg:w-[1082px] w-full mx-auto flex flex-col gap-90">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-150">
          {/* Package-1 */}
          <div>
            <img
              src="/package/elite.webp"
              alt="honeymoon"
              className="object-contain w-full"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center pb-[50px] lg:pb-0">
            <h3 className="text-3xl lg:text-[52px] lg:leading-[60px] tracking-wider">
              ELITE FLEET
            </h3>
            <div className="flex flex-col gap-[10px] w-fit text-2xl">
              Starting from
              <span className="text-3xl">$11,500</span>
            </div>
            <p className="text-justify text-base">
              Prepare for a voyage of unparalleled beauty with INDONESEA’s elite
              private phinisi yachts unveils the crown jewels of Indonesia.
            </p>
            <button onClick={openModal} className="bg-btn text-white tracking-wider p-4 w-full text-center lg:text-start lg:w-fit">
                PLAN YOUR JOURNEY
            </button>
          </div>

          {/* Package-2 */}
          {/* <div className="flex flex-col">
            
          </div> */}
          <div className="block lg:hidden">
            <img
              src="/package/fleet.webp"
              alt="honeymoon"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center pb-[50px] lg:pb-0">
            <h3 className="text-3xl lg:text-[52px] lg:leading-[60px] uppercase tracking-wider">
            privilege FLEET
            </h3>
            <div className="flex flex-col gap-[10px] w-fit text-2xl">
              Starting from
              <span className="text-3xl">$6,250</span>
            </div>
            <p className="text-justify text-base">
              Unfold Indonesia's tapestry on an epic voyage with INDONESEA's
              phinisi fleet, a journey weaving cultural richness and
              breathtaking landscapes.
            </p>
            <button onClick={openModal} className="bg-btn text-white tracking-wider p-4 w-full text-center lg:text-start lg:w-fit">
                PLAN YOUR JOURNEY
            </button>
          </div>
          <div className="hidden lg:block">
            <img
              src="/package/fleet.webp"
              alt="honeymoon"
              className="object-contain"
            />
          </div>

          {/* Package-3 */}
          <div>
            <img
              src="/package/adventure-2.webp"
              alt="honeymoon"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center pb-[50px] lg:pb-0">
            <h3 className="text-3xl lg:text-[52px] lg:leading-[60px] uppercase">
              ADVeNTURE FLEET
            </h3>
            <div className="flex flex-col gap-[10px] w-fit text-2xl">
              Starting from
              <span className="text-3xl">$2,850</span>
            </div>
            <p className="text-justify text-base">
              Craft your Indonesian adventure with INDONESEA, exploring aboard
              your private phinisi yacht, an exclusive expedition tailored to
              your desires.
            </p>
            <button onClick={openModal} className="bg-btn text-white tracking-wider p-4 w-full text-center lg:text-start lg:w-fit">
                PLAN YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>
      <Form isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default PackagePart;
