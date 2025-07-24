import { OrangeButton } from "../common/orangebutton";
import Image from "next/image";
import { ArrowRightSvg, DropSvg, LightDropSvg, StatsSvg, TreeSvg } from "./commonsvg";

export const Impact = () => {
  return (
    <section className="gsap-fade-in bg-[rgba(0,89,67,1)] py-8 md:py-20">
      <div className="w-11/12 md:w-10/12 flex flex-col-reverse lg:flex-row justify-between items-stretch gap-4 md:gap-12 lg:gap-20 mx-auto">
        
        {/* Content: 70% */}
        <div className="max-w-[700px] flex flex-col justify-between items-start gap-10 lg:w-[65%]">
          <div className="space-y-3 md:space-y-6">
            <h3 className="text-[22px] md:text-[32px] text-[rgba(0,168,73,1)] leading-8">
              Environmental impact commitment
            </h3>
            <p className="font-normal text-white md:text-lg leading-6">
              At SFC, we’re committed to pioneering sustainable solutions in environmental technology. From minimizing waste to optimizing energy use, sustainability is integrated into every aspect of our operations. We actively engage in environmental education and community outreach, inspiring positive change for a greener future.
            </p>
            <p className="font-normal text-white md:text-lg leading-6">
              Sustainability is not just a goal; it’s a guiding principle that shapes our vision for a brighter, greener future. Together, we’re not only advancing technology, we’re building a world where innovation and environmental stewardship go hand in hand, ensuring a sustainable legacy for generations to come.
            </p>
            <div className="flex items-center gap-3">
              <OrangeButton text="Learn more" />
              <button className="flex items-center gap-2 text-white whitespace-nowrap border border-[rgba(0,168,73,1)] g-bordered-btn rounded-full px-4 md:px-5 py-2.5">
                Sustainability report
                <ArrowRightSvg />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="w-full flex justify-start gap-16  text-center md:text-start mx-auto lg:mx-0">
            <div className="flex flex-col items-center md:items-start gap-2">
              <StatsSvg />
              <span className="text-lg md:text-2xl font-bold !font-basic text-[#B7D433]">Zero</span>
              <span className="text-white font-normal text-sm">Environment violations</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <LightDropSvg/>
              <span className="text-lg md:text-2xl font-bold !font-basic text-[#B7D433]">3.6B</span>
              <span className="text-white font-normal text-sm">Liters treated annually</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <TreeSvg />
              <span className="text-lg md:text-2xl font-bold !font-basic text-[#B7D433]">15</span>
              <span className="text-white font-normal text-sm">Green certifications</span>
            </div>
          </div>
        </div>

        {/* Image: 30% */}
        <div className="relative w-full h-[300px] min-w-[400px] lg:w-[50%] lg:h-auto ">
          <Image
            className="object-cover rounded-xl curve-image"
            src="/landing/impact.jpg"
            alt="SFC"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      </div>
    </section>
  );
};
