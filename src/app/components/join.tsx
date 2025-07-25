"use client";
import { useEffect } from "react";
import Image from "next/image";
import { OrangeButton } from "../common/orangebutton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

interface AreaCard {
  id: string;
  data: {
    area: string;
    plant: string;
    capacity: string;
  };
  progress: number;
  active?: boolean;
}

export const Join = () => {
  const AboutSvg = () => {
    return (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9116 14.3173V13.0143C10.9116 12.3232 10.637 11.6603 10.1483 11.1716C9.65958 10.6829 8.99674 10.4083 8.30559 10.4083H4.39663C3.70548 10.4083 3.04264 10.6829 2.55392 11.1716C2.06521 11.6603 1.79065 12.3232 1.79065 13.0143V14.3173"
          stroke="#00A849"
          strokeWidth="1.30299"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9114 2.67383C11.4703 2.8187 11.9652 3.14503 12.3185 3.6016C12.6718 4.05816 12.8634 4.61912 12.8634 5.19641C12.8634 5.77371 12.6718 6.33466 12.3185 6.79123C11.9652 7.2478 11.4703 7.57413 10.9114 7.719"
          stroke="#00A849"
          strokeWidth="1.30299"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8205 14.3173V13.0143C14.8201 12.4369 14.6279 11.876 14.2741 11.4197C13.9204 10.9633 13.4251 10.6374 12.866 10.493"
          stroke="#00A849"
          strokeWidth="1.30299"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.35116 7.80229C7.7904 7.80229 8.95713 6.63555 8.95713 5.19631C8.95713 3.75707 7.7904 2.59033 6.35116 2.59033C4.91191 2.59033 3.74518 3.75707 3.74518 5.19631C3.74518 6.63555 4.91191 7.80229 6.35116 7.80229Z"
          stroke="#00A849"
          strokeWidth="1.30299"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const AreaCard = ({ id, data, progress, active }: AreaCard) => {
    const { area, plant, capacity } = data;
    return (
      <div
        className={`${id} min-w-[340px] max-w-[500px] space-y-4 rounded-[14px] font-inter ${
          active
            ? "bg-[rgba(0,168,73,1)] text-white"
            : "hidden lg:block bg-white text-black border border-[rgba(229,231,235,1)] scale-90"
        } p-6`}
      >
        <div className="flex justify-between gap-6">
          <div className="flex flex-col">
            <span className="font-semibold">{area}</span>
            <span
              className={`${
                active
                  ? "text-[rgba(236,236,236,1)]"
                  : "text-[rgba(74,85,101,1)]"
              } text-sm`}
            >
              {plant} operational plants
            </span>
          </div>
          <div className="flex flex-col text-end">
            <span className="font-bold text-2xl leading-7">{capacity}</span>
            <span
              className={`${
                active
                  ? "text-[rgba(224,224,224,1)]"
                  : "text-[rgba(106,114,130,1)]"
              } text-xs`}
            >
              Daily capacity
            </span>
          </div>
        </div>
        <progress
          className="area-progress w-full h-2 rounded-full overflow-hidden"
          value={progress}
          max={100}
        />
      </div>
    );
  };

  useEffect(() => {
    const options = {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio;
        const element = entry.target as HTMLElement;

        // Interpolate between the two colors
        const r = Math.round(106 + (0 - 106) * ratio);
        const g = Math.round(114 + (168 - 114) * ratio);
        const b = Math.round(130 + (73 - 130) * ratio);

        element.style.color = `rgb(${r}, ${g}, ${b})`;
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const elements = document.querySelectorAll(".scroll-text");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="space-y-32 pb-8 md:pb-20 pt-20 join-section">
      <div className="gsap-fade-in w-11/12 sm:w-10/12 max-w-[800px] space-y-6 md:space-y-10 faded mx-auto">
        <p className="scroll-text !font-basic text-2xl md:text-[32px] font-medium text-start md:text-center">
          SFC relentlessly strives to enable your vision of a successful
          wastewater business that also is committed to safeguarding the
          environment. Trusted by customers across the nation, we embed
          simplicity, adaptability, and long-term reliability into every
          wastewater system.
        </p>
        <p className="scroll-text !font-basic text-2xl md:text-[32px] font-medium text-start md:text-center">
          Our innovative technologies are designed for precision and optimised
          performance, making operations seamless even in the most complex
          environments, be it any region, any shape, or any scale.
        </p>
        <div className="flex justify-center items-center gap-4">
          <OrangeButton text="Join the tribe" />
          <button className="flex items-center gap-2 text-[rgba(0,168,73,1)] border border-[rgba(0,168,73,1)] rounded-full px-6 py-3 whitespace-nowrap g-bordered-btn">
            <AboutSvg />
            More about us
          </button>
        </div>
      </div>

      <div className="gsap-fade-in space-y-10">
        <h4 className="w-11/12 md:w-2/3 lg:w-1/2 text-start md:text-center mx-auto text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-7 md:leading-9">
          Treating over{" "}
          <span className="text-[rgba(25,169,72,1)]">
            15,000 million litres
          </span>{" "}
          of sewage every single day across geographies.
        </h4>

        <div className="w-full lg:w-10/12 flex flex-col lg:flex-row justify-center gap-10 lg:gap-6 mx-auto">
          {/* Left Image (50%) */}
          <div className="w-full flex justify-center items-center">
            <div className="relative shrink-0 w-full max-w-[900px] h-[400px] sm:h-[600px] lg:h-full">
              <Image
                className="w-full object-contain"
                src="/landing/map.png"
                alt="SFC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Cards (50%) */}
          <div className="w-fit flex flex-col items-center gap-2 mx-auto px-10 ps-6 lg:ps-0 xl:ps-10 pe-10 lg:pe-0 xl:pe-20">
            {["area1", "area2", "area3", "area4", "area5", "area6"].map(
              (id, i) => (
                <AreaCard
                  key={id}
                  id={id}
                  data={{
                    area: "Bangalore Urban",
                    plant: "18",
                    capacity: "1.8M",
                  }}
                  progress={50}
                  active={i === 0}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
