'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const GsapFadeIn = () => {

    useEffect(() => {
        gsap.utils.toArray<HTMLElement>('.gsap-fade-in').forEach((section) => {
            gsap.set(section, { y: 200, opacity: 0 });
            gsap.to(
                section,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        toggleActions: "play none none none",
                        // markers: true,
                        once: true,
                    }
                }
            );
        });
    }, [])

    return null;
}