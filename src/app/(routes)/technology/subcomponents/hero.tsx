'use client'
import gsap from "gsap"
import { OrangeButton } from "@/app/common/orangebutton"
import { ArrowRightSvg } from "@/app/components/commonsvg"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {

    useEffect(() => {
        const scrollTrigger = {
            trigger: ".tech-hero",
            start: "bottom 50%",
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
        <section className="tech-hero relative bg-[rgba(0,168,73,1)] text-white md:rounded-br-[260px] pt-52 pb-40 md:py-48">
            <div className="w-11/12 md:w-[700px] flex flex-col items-start md:items-center gap-4 text-start md:text-center mx-auto">
                <span className="font-inter text-xs bg-white/20 rounded-full px-3 py-1 border border-white/30">
                    Advanced Wastewater Treatment Technology
                </span>
                <h2 className="w-2/3 md:w-full text-[38px] leading-[42px] md:leading-normal md:text-[50px]">
                    C-Tech <span className="text-[rgba(0,89,69,1)]">Technology</span>
                </h2>
                <p className="text-lg text-white/90 font-normal md:pt-2">
                    Revolutionary biological wastewater treatment system engineered for India's growing infrastructure needs. Delivering 99.5% efficiency with smart monitoring and sustainable operations.
                </p>
                <div className="w-full md:w-10/12 flex flex-col md:flex-row items-center gap-3 pt-4 text-center md:text-start">
                    <OrangeButton text="Download Technical Specs" fullWidth/>
                    <button
                    className="w-full flex-1 flex justify-center items-center gap-2 text-white whitespace-nowrap border border-white rounded-full px-4 md:px-5 py-2.5">
                        Watch Demo Video
                        <ArrowRightSvg/>
                    </button>
                </div>
            </div>
            <div className="tech-border-1 hidden md:block absolute -bottom-8 -right-8 w-[120%] h-full rounded-br-[260px] border-8 border-[rgba(0,168,73,0.5)]"></div>
            <div className="tech-border-2 hidden md:block absolute -bottom-16 -right-16 w-[120%] h-full rounded-br-[260px] border-8 border-[rgba(0,168,73,0.3)]"></div>
            <div className="tech-border-3 hidden md:block absolute -bottom-24 -right-24 w-[120%] h-full rounded-br-[260px] border-8 border-[rgba(0,168,73,0.1)]"></div>
        </section>
    )
}