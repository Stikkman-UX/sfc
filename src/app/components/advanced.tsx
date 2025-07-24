import { VerticalCarousel } from "./verticalcarousel";
import { HorizontalCarousel } from "./HorizontalCarousel";
import { DropSvg } from "./commonsvg";
import { SwiperCarousel } from "./swiperCarousel";

export const Advanced = () => {
  const cards = [
    {
      cardNo: "01",
      icon: <DropSvg />,
      title: "Biological Selector Zone",
      desc: "The incorporation of a multi-cell biological selector at the systems front-end sets C-Tech apart from other technologies. This innovative feature utilizes Return Activated Sludge (RAS) pumps to recycle a portion of Mixed Liquor Suspended Solids from the aeration zone. The selector guarantees excellent sludge settling characteristics under various operating conditions. Achieving a Sludge Volume Index (SVI) as low as 40 mL/g is a testament to its effectiveness. Additionally, the anaerobic conditions in the Selector Zone facilitate phosphorous removal, enhancing overall wastewater treatment efficiency.",
    },
    {
      cardNo: "02",
      icon: <DropSvg />,
      title: "Oxygen Uptake Rate Control",
      desc: "The incorporation of a multi-cell biological selector at the system’s front-end sets CTech apart from other technologies. This innovative feature utilizes Return Activated Sludge (RAS) pumps to recycle a portion of Mixed Liquor Suspended Solids from the aeration zone. The selector guarantees excellent sludge settling characteristics under various operating conditions. Achieving a Sludge Volume Index (SVI) as low as 40 mL/g is a testament to its effectiveness. Additionally, the anaerobic conditions in the Selector Zone facilitate phosphorous removal, enhancing overall wastewater treatment efficiency.",
    },
    {
      cardNo: "03",
      icon: <DropSvg />,
      title: "Simultaneous Nitrification & Denitrification",
      desc: "The incorporation of a multi-cell biological selector at the system’s front-end sets CTech apart from other technologies. This innovative feature utilizes Return Activated Sludge (RAS) pumps to recycle a portion of Mixed Liquor Suspended Solids from the aeration zone. The selector guarantees excellent sludge settling characteristics under various operating conditions. Achieving a Sludge Volume Index (SVI) as low as 40 mL/g is a testament to its effectiveness. Additionally, the anaerobic conditions in the Selector Zone facilitate phosphorous removal, enhancing overall wastewater treatment efficiency.",
    },
    {
      cardNo: "04",
      icon: <DropSvg />,
      title: "Biophosphorus Removal",
      desc: "The incorporation of a multi-cell biological selector at the system’s front-end sets CTech apart from other technologies. This innovative feature utilizes Return Activated Sludge (RAS) pumps to recycle a portion of Mixed Liquor Suspended Solids from the aeration zone. The selector guarantees excellent sludge settling characteristics under various operating conditions. Achieving a Sludge Volume Index (SVI) as low as 40 mL/g is a testament to its effectiveness. Additionally, the anaerobic conditions in the Selector Zone facilitate phosphorous removal, enhancing overall wastewater treatment efficiency.",
    },
    {
      cardNo: "05",
      icon: <DropSvg />,
      title: "Configuration Flexibility",
      desc: "The incorporation of a multi-cell biological selector at the system’s front-end sets CTech apart from other technologies. This innovative feature utilizes Return Activated Sludge (RAS) pumps to recycle a portion of Mixed Liquor Suspended Solids from the aeration zone. The selector guarantees excellent sludge settling characteristics under various operating conditions. Achieving a Sludge Volume Index (SVI) as low as 40 mL/g is a testament to its effectiveness. Additionally, the anaerobic conditions in the Selector Zone facilitate phosphorous removal, enhancing overall wastewater treatment efficiency.",
    },
  ];

  const PlaySvg = () => {
    return (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 2.63574L13.3333 8.63574L4 14.6357V2.63574Z"
          stroke="#19A948"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <section>
      <div className="gsap-fade-in bg-[url(/landing/advanced.jpg),linear-gradient(180deg,rgba(0,0,0,0)_9.35%,#000000_100%)] bg-blend-multiply bg-cover bg-no-repeat bg-center font-medium pt-40 pb-16 md:pb-28">
        <div className="w-11/12 lg:w-[900px] flex flex-col items-center space-y-2 md:space-y-8 text-center mx-auto">
          <h3 className="text-[22px] md:text-4xl lg:text-[56px] leading-10 text-white">
            Introducing C-Tech technology
          </h3>
          <p className="font-normal md:text-lg leading-5 md:leading-[26px] text-white/80">
            C-Tech is an advanced technology for treating sewage and effluents.
            The latest generation SBR process, employed extensively for treating
            both domestic sewage and industrial effluents to achieve recyclable
            quality water with low life cycle cost. Offers high efficiency,
            operational simplicity, and compact design.
          </p>
          <button
            className="flex w-btn items-center gap-2 text-[rgba(25,169,72,1)] text-xs md:text-base bg-white rounded-full px-6 py-3 mt-4 md:mt-2"
            type="button"
          >
            <PlaySvg />
            Watch C-Tech in action
          </button>
        </div>
      </div>
     <div className="gsap-fade-in bg-[linear-gradient(to_right,_#005945_0%,_#00A849_100%)] py-12">
        <h4 className="text-center text-white/80 text-[22px] md:mb-[160px]">
          C-Tech <span className="text-white">features</span> 
        </h4>
        <VerticalCarousel cards={cards} />
        {/* <HorizontalCarousel /> */}
        <div className="pt-52 sm:pt-40 lg:pt-20 pb-10">
          <SwiperCarousel/>
        </div>
      </div>
    </section>
  );
};
