'use client'
import gsap from "gsap"
import { OrangeButton } from "@/app/common/orangebutton"
import { ArrowRightSvg } from "@/app/components/commonsvg"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

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

    useEffect(() => {
        const scrollTrigger = {
            trigger: ".tech-hero",
            start: "bottom 70%",
        };

        gsap.to(
            '.tech-hero',
            {
                borderRadius: '0px',
                duration: 1,
                scrollTrigger
            }
        );
        gsap.to(
            '.tech-border-1',
            {
                bottom: 0,
                borderRadius: 0,
                duration: 1,
                scrollTrigger
            }
        );
        gsap.to(
            '.tech-border-2',
            {
                bottom: 0,
                borderRadius: 0,
                duration: 1,
                scrollTrigger
            }
        );
        gsap.to(
            '.tech-border-3',
            {
                bottom: 0,
                borderRadius: 0,
                duration: 1,
                scrollTrigger
            }
        );
    }, [])

    return (
        <section className="tech-hero relative bg-[rgba(0,168,73,1)] text-white md:rounded-br-[260px] pt-52 pt-35 pb-20 md:pt-48 md:pb-25">
            <div className="w-11/12 md:w-[1000px] flex flex-col items-start md:items-center gap-4 text-start md:text-center mx-auto">
                <span className=" text-xs bg-white/20 rounded-full px-3 py-1 border border-white/30">
                    Advanced Wastewater Treatment Technology
                </span>
                <h2 className="w-full text-[38px] leading-[42px] md:leading-normal md:text-[50px]">
                    C-Tech <span className="text-[rgba(0,89,69,1)]">Technology</span>
                </h2>
                <h3 className="text-[23px]">India’s most preferred SBR (Sequencing Batch Reactor) technology </h3>
                <p className="text-lg text-white/90 font-normal md:pt-2">
                    C-Tech is an advanced technology for treating sewage and effluents. The latest generation SBR process, employed extensively for treating both domestic sewage and industrial effluents to achieve recyclable quality water with low life cycle cost. Offers high efficiency, operational simplicity, and compact design.

                </p>
                <div className="w-full md:w-10/12 flex flex-col md:flex-row items-center gap-3 pt-4 text-center md:text-start">
                    <OrangeButton text="Download Technical Specs" fullWidth/>
                    <button
                    className="w-full flex-1 flex justify-center items-center gap-2 text-white whitespace-nowrap border border-white rounded-full px-4 md:px-5 py-2.5">
                        Watch Demo Video
                        <ArrowRightSvg/>
                    </button>
                </div>

                  <div className="w-full sm:w-10/12  flex pt-8 mx-auto text-white overflow-hidden">
        <div className="carousel-container w-fit sm:w-full flex items-center justify-between">
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">20+</span>
            <span className="font-normal text-sm">Years of Experience</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">1,200+</span>
            <span className="font-normal text-sm">reference plants</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">650 </span>
            <span className="font-normal text-sm">commissioned plants</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">12,000+</span>
            <span className="font-normal text-sm">MLD Cumulative Capacity</span>
          </div>
        </div>
        <div className="carousel-container sm:hidden w-fit flex items-center justify-between">
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">20+</span>
            <span className="font-normal text-sm">Years of Experience</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">1,200+ </span>
            <span className="font-normal text-sm">reference plants</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">650</span>
            <span className="font-normal text-sm">commissioned plants</span>
          </div>
          <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
          <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
            <span className="font-semibold text-2xl">12,000+</span>
            <span className="font-normal text-sm">MLD Cumulative Capacity</span>
          </div>
        </div>
      </div>
            </div>
        </section>
    )
}