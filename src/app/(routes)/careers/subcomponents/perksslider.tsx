'use client'
import { useEffect, useState } from "react";
import gsap from "gsap";

import { ContactCallSvg } from "@/app/common/commonsvg";

interface PerkCardProps {
  data: {
    id: string;
    logo: React.JSX.Element;
    title: string;
    desc: string;
  };
}

export const PerksSlider = () => {

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
            tl.to(".perks-carousel-container", {
            x: "-100%",
            duration: 10,
            ease: "linear",
        });
    }, [])

  const PerkCard = ({ data }: PerkCardProps) => {
    const { id, logo, title, desc } = data;

    return (
      <div
        className={`${id} perk-shadow w-[250px] lg:w-[300px] shrink-0 flex flex-col items-center gap-6 bg-[rgba(249,249,249,1)] text-[15px] text-center rounded-tl-[22px] rounded-br-[22px] px-6 lg:px-8 py-4 lg:py-6`}
      >
        <div className="bg-[rgba(0,168,73,0.1)] rounded-[21px] p-3">
          {logo}
        </div>
        <span className="text-[rgba(0,89,69,1)] !font-basic">{title}</span>
        <span className="text-[rgba(74,85,101,1)]">{desc}</span>
      </div>
    );
  };

  const SlideContainer = ({ id }: { id: string }) => {
    return (
      <div
        className={`${id} ${
          id === "slide-container-2" ? "hidden lg:flex" : ""
        } disable-scrollbar perks-carousel-container min-w-fit w-full shrink-0 flex justify-between gap-4 lg:gap-8 px-4 lg:px-4 py-20 overflow-x-auto`}
      >
        <PerkCard
          data={{
            id: "perk-inactive-2",
            logo: <ContactCallSvg />,
            title: "Perk A",
            desc: "Flexible working arrangements and generous leave policies",
          }}
        />
        <PerkCard
          data={{
            id: "perk-inactive-1",
            logo: <ContactCallSvg />,
            title: "Perk B",
            desc: "Collaborative and inclusive work culture",
          }}
        />
        <PerkCard
          data={{
            id: "perk-active",
            logo: <ContactCallSvg />,
            title: "Perk C",
            desc: "Health and wellness benefits to support you",
          }}
        />
        <PerkCard
          data={{
            id: "perk-inactive-3",
            logo: <ContactCallSvg />,
            title: "Perk D",
            desc: "Continuous learning and upskilling programs",
          }}
        />
        <PerkCard
          data={{
            id: "perk-inactive-4",
            logo: <ContactCallSvg />,
            title: "Perk E",
            desc: "Recognition and reward programs",
          }}
        />
      </div>
    );
  };

  return (
      <div className="relative flex px-4 sm:px-10 lg:px-0 overflow-hidden">
        <SlideContainer id="slide-container-1" />
        <SlideContainer id="slide-container-2" />
      </div>
  );
};