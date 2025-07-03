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
        <section className="tech-hero relative bg-[rgba(0,168,73,1)] text-white rounded-br-[260px] py-48">
            <div className="w-[700px] flex flex-col items-center gap-4 text-center mx-auto">
                <span className="font-inter text-xs bg-white/20 rounded-full px-3 py-1 border border-white/30">
                    Advanced Wastewater Treatment Technology
                </span>
                <h2 className="text-[50px]">
                    C-Tech <span className="text-[rgba(0,89,69,1)]">Technology</span>
                </h2>
                <p className="text-lg text-white/90 font-normal pt-2">
                    Revolutionary biological wastewater treatment system engineered for India's growing infrastructure needs. Delivering 99.5% efficiency with smart monitoring and sustainable operations.
                </p>
                <div className="flex items-center gap-3 pt-4">
                    <OrangeButton text="Download Technical Specs"/>
                    <button
                    className="flex items-center gap-2 text-white whitespace-nowrap border border-white rounded-full px-4 md:px-5 py-2.5">
                        Watch Demo Video
                        <ArrowRightSvg/>
                    </button>
                </div>
            </div>
            <div className="tech-border-1 absolute -bottom-8 -right-8 w-[120%] h-full rounded-br-[260px] border-8 border-[rgba(0,168,73,0.5)]"></div>
            <div className="tech-border-2 absolute -bottom-16 -right-16 w-[120%] h-full rounded-br-[260px] border-8 border-[rgba(0,168,73,0.3)]"></div>
            <div className="tech-border-3 absolute -bottom-24 -right-24 w-[120%] h-full rounded-br-[260px] border-8 border-[rgba(0,168,73,0.1)]"></div>
        </section>
    )
}