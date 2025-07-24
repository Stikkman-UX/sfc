"use client";
import { OrangeButton } from "@/app/common/orangebutton";
import gsap from "gsap";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(min-width: 360px) and (max-width: 640px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        const conditions = context.conditions || {};
        const isMobile = conditions.isMobile ?? false;
        const isDesktop = conditions.isDesktop ?? false;

        const el = document.querySelector(
          ".carousel-container"
        ) as HTMLDivElement;
        const width = el.scrollWidth;

        if (isMobile) {
          const tl = gsap.timeline({ repeat: -1 });
          tl.to(".carousel-container", {
            x: "-100%",
            duration: 10,
            ease: "linear",
          });
        }
      }
    );
  }, []);

  return (
    <div className="bg-[url('/careers/hero-bg.png')] bg-cover bg-no-repeat pt-52">
      <div className="w-11/12 lg:w-[700px] flex flex-col items-center gap-8 mx-auto text-start sm:text-center">
        <h2 className="text-[38px] lg:text-[50px] text-white leading-[50px] lg:leading-[56px] mx-auto">
          Join the <span className="text-[rgba(183,212,51,1)]">SFC Tribe</span>
        </h2>
        <span className="text-white/70 pb-6">
          A leading environmental technology company committed to solving
          wastewater challenges through innovative engineering.
        </span>
        <div className="w-full sm:max-w-fit">
          <OrangeButton text="View Open Positions" fullWidth />
        </div>
      </div>
      <div className="w-full sm:w-10/12 max-w-[1000px] flex pt-16 sm:pt-28 pb-28 sm:pb-36 mx-auto text-white overflow-hidden">
        <div className="carousel-container w-fit sm:w-full flex items-center justify-between">
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">500+</span>
            <span className="font-normal text-sm">Team Members</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">8</span>
            <span className="font-normal text-sm">Office Locations</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">4.2 years</span>
            <span className="font-normal text-sm">Average Tenure</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">85%</span>
            <span className="font-normal text-sm">Internal Promotions</span>
          </div>
        </div>
        <div className="carousel-container sm:hidden w-fit flex items-center justify-between">
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">500+</span>
            <span className="font-normal text-sm">Team Members</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">8</span>
            <span className="font-normal text-sm">Office Locations</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">4.2 years</span>
            <span className="font-normal text-sm">Average Tenure</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">85%</span>
            <span className="font-normal text-sm">Internal Promotions</span>
          </div>
        </div>
      </div>
    </div>
  );
};
