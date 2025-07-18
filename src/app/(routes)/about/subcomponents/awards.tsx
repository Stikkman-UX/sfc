'use client'
import Image from "next/image"
import gsap from "gsap";
import { useEffect } from "react";

interface CardProps {
    src: string;
}

export const Awards = () => {
    const cards = [
        "/technology/cert-1.png",
        "/technology/cert-2.png",
        "/technology/cert-3.png",
        "/technology/cert-4.png",
        "/technology/cert-2.png",
        "/technology/cert-1.png",
        "/technology/cert-3.png",
    ]

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(
            '.awards-carousel',
            {
                x: '-100%',
                duration: 10,
                ease: 'linear'
            }
        )
    }, []);


    const Card = ({ src }: CardProps) => {
        return (
            <div className="w-[290px] shrink-0 h-full flex flex-col justify-start gap-4 bg-[rgba(249,249,249,1)]  rounded-lg px-4 py-8">
                <Image
                className={`w-full object-cover rounded-[9px] mt-2 mx-auto`}
                src={src}
                alt="SFC"
                width={100}
                height={60}
                />
            </div>
        )
    }

    return (
        <section className="space-y-10 my-5 md:my-20">
            <div className="w-11/12 lg:w-3/5 max-w-[1000px] md:space-y-2 md:text-center mx-auto">
                <h4 className="w-full md:w-fit text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9 md:mx-auto">
                    <span className="text-[rgba(25,169,72,1)]">
                        Recognitions {" "}
                    </span>
                    and Awards
                </h4>
                <p className="w-11/12 md:w-[550px] md:text-lg font-normal text-[rgba(74,85,101,1)] md:mx-auto">
                    Our systems meet and exceed all national and international standards for quality and environmental compliance.
                </p>
            </div>
            <div className="disable-scrollbar flex gap-4 overflow-x-auto px-4 sm:px-7 md:px-16 lg:px-0">
                <div className="awards-carousel shrink-0 w-fit flex items-center justify-around gap-4">
                {
                    cards.map((src, i) => {
                        return <Card key={i} src={src} />
                    })
                }
                </div>
                <div className="awards-carousel shrink-0 w-fit flex items-center justify-around gap-4">
                {
                    cards.map((src, i) => {
                        return <Card key={i} src={src} />
                    })
                }
                </div>
            </div>
        </section>
    )
}