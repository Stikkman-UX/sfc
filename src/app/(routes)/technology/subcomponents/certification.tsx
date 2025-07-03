'use client'
import Image from "next/image"
import gsap from "gsap";
import { useEffect } from "react";

interface CardProps {
    data: {
        src: string;
        title?: string;
        location?: string;
        isCaseStudy?: boolean;
    }
}

export const Certification = () => {
    const cards = [
        {
            src: "/technology/cert-1.png",
        },
        {
            src: "/technology/case-1.jpg",
            title: "Delhi Industrial Complex",
            location: "Gurgaon, Haryana",
            isCaseStudy: true,
        },
        {
            src: "/technology/cert-2.png",
        },
        {
            src: "/technology/cert-3.png",
        },
        {
            src: "/technology/cert-4.png",
        },
    ]

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(
            '.cert-carousel',
            {
                x: '-100%',
                duration: 10,
                ease: 'linear'
            }
        )
    }, []);


    const Card = ({ data }: CardProps) => {
        return (
            <div className="w-[260px] h-full flex flex-col justify-start gap-4 bg-[rgba(249,249,249,1)] font-inter rounded-lg px-4 py-2.5">
                <span className="w-fit text-[rgba(245,126,37,0.8)] text-xs rounded-full border border-[rgba(245,126,37,0.8)] px-2 py-0.5">
                    { data.isCaseStudy ? 'Case study' : 'certificate' }
                </span>
                <Image
                className={`w-full object-cover rounded-[9px] mt-2 mx-auto ${ !data.isCaseStudy && 'px-4' }`}
                src={data.src}
                alt="SFC"
                width={100}
                height={60}
                />
                {
                    data.isCaseStudy && (
                        <div className="">
                            <h6 className="font-bold">
                                { data.title }
                            </h6>
                            <span className="font-normal">
                                { data.location }
                            </span>
                        </div>

                    )
                }
            </div>
        )
    }

    return (
        <section className="my-20 py-10">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <h2 className="w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)]">
                    Certifications <span className="text-[rgba(0,89,67,1)]">and case studies</span>
                </h2>
                <p className="md:w-[500px] font-normal md:text-lg text-[rgba(74,85,101,1)] pb-20">
                    Our systems meet and exceed all national and international standards for quality and environmental compliance.
                </p>
            </div>
            <div className="disable-scrollbar flex overflow-x-auto px-4 sm:px-7 md:px-16 lg:px-0">
                <div className="cert-carousel shrink-0 w-fit md:w-full flex items-center justify-around gap-4 md:gap-0">
                {
                    cards.map((cardData, i) => {
                        return <Card key={i} data={cardData} />
                    })
                }
                </div>
                <div className="cert-carousel shrink-0 w-fit md:w-full flex items-center justify-around gap-4 md:gap-0">
                {
                    cards.map((cardData, i) => {
                        return <Card key={i} data={cardData} />
                    })
                }
                </div>
            </div>
        </section>
    )
}