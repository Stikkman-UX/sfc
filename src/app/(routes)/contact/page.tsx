'use client'
import Image from "next/image"
import { Hero } from "./subcomponents/hero"
import { Support } from "./subcomponents/support"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    return (
        <div className="w-full mt-44 mb-20 sm:mt-48 sm:mb-40">
            <Image
            className="absolute top-0 w-full h-screen object-cover -z-10"
            width={1000}
            height={700}
            src="/white-bg.png"
            alt="White Background"/>
            <Hero/>
            <Support/>
            <Image
            className="gsap-fade-in w-11/12 sm:w-10/12 min-h-[260px] mx-auto object-cover rounded-xl"
            width={400}
            height={300}
            src="/contact/map.png"
            alt="location on map"/>
        </div>
    )
}

export default Contact