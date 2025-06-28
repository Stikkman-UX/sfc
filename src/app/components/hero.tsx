'use client'
import Image from "next/image"
import { useEffect } from "react"
import { OrangeButton } from "../common/orangebutton"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {

    useEffect(() => {
        const scrollTrigger = {
            trigger: '.border-container',
            start: "top 50%",
        };

        gsap.to(
            '.gsap-border-1',
            {
                scaleY: 1.42,
                scaleX: 1.2,
                duration: 1,
                scrollTrigger
            }
        );
        gsap.to(
            '.gsap-border-2',
            {
                scaleY: 1.25,
                scaleX: 1.12,
                duration: 1,
                scrollTrigger
            }
        );
        gsap.to(
            '.gsap-border-3',
            {
                scaleY: 1.12,
                scaleX: 1.05,
                duration: 1,
                scrollTrigger
            }
        );

    }, [])

    return (
        <div className="relative text-black font-medium space-y-20 md:space-y-40 pb-20 md:py-40">
            <div className="absolute top-0 w-full h-[50vh] md:h-screen z-10">
                <video
                className="w-full h-full object-cover"
                src="/landing/hero-bg.mp4"
                controls={false}
                playsInline
                autoPlay
                muted
                loop/>
            </div>
            <div className="relative w-11/12 md:w-auto flex flex-col items-start md:items-center space-y-6 md:space-y-8 pt-60 md:pt-0 z-20 mx-auto md:mx-0">
                <h1 className=" md:w-[600px] mx-auto text-start md:text-center text-[38px] md:text-[50px] leading-12 md:leading-14 text-[rgba(0,89,67,1)]">
                    Powering India's <span className="text-[rgba(25,169,72,1)]">sustainable</span> water future.
                </h1>
                <OrangeButton text="Explore our technology"/>
            </div>
            <div className="border-container relative w-11/12 md:w-9/12 min-h-[370px] h-[370px] md:h-[450px] max-h-[450px] rounded-tl-[40px] md:rounded-tl-[125px] rounded-br-[40px] md:rounded-br-[125px] mx-auto z-20 overflow-hidden md:overflow-visible">
                <Image
                className="w-full object-cover scale-150 md:scale-100 min-h-[370px] md:h-[450px] max-h-[450px] rounded-tl-[40px] md:rounded-tl-[125px] rounded-br-[40px] md:rounded-br-[125px]"
                src="/landing/hero.jpg"
                alt="SFC"
                width={100}
                height={60}
                />
                <div className="gsap-border-1 hidden md:block absolute inset-0 w-full h-full rounded-tl-[125px] rounded-br-[125px] border-8 border-[rgba(0,168,73,0.1)]"></div>
                <div className="gsap-border-2 hidden md:block absolute inset-0 w-full h-full rounded-tl-[125px] rounded-br-[125px] border-8 border-[rgba(0,168,73,0.3)]"></div>
                <div className="gsap-border-3 hidden md:block absolute inset-0 w-full h-full rounded-tl-[125px] rounded-br-[125px] border-8 border-[rgba(0,168,73,0.5)]"></div>
            </div>
        </div>
    )
}