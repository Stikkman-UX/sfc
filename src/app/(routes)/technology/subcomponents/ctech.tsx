'use client'
import { DropSvg, TechSvg1, TechSvg2, TechSvg3 } from "@/app/components/commonsvg";
import { VerticalCarousel } from "@/app/components/verticalcarousel"
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

export const Ctech = () => {
    const cards = [
        {
            cardNo: '01',
            icon: <TechSvg1/>,
            title: 'Biological processing',
            desc: 'CTEK system uses optimized microbial communities for efficient organic matter breakdown.'
        },
        {
            cardNo: '02',
            icon: <TechSvg2/>,
            title: 'Biological processing',
            desc: 'CTEK system uses optimized microbial communities for efficient organic matter breakdown.'
        },
        {
            cardNo: '03',
            icon: <TechSvg3/>,
            title: 'Biological processing',
            desc: 'CTEK system uses optimized microbial communities for efficient organic matter breakdown.'
        },
        {
            cardNo: '04',
            icon: <DropSvg/>,
            title: 'Biological processing',
            desc: 'CTEK system uses optimized microbial communities for efficient organic matter breakdown.'
        },
    ];
    
    useEffect(() => {
        const scrollTrigger = {
            trigger: '.ctech-section',
            start: "top 40%",
        }

        const mm = gsap.matchMedia();
        mm.add(
            {
              isVertical: "(min-width: 360px) and (max-width: 1024px)",
              isHorizontal: "(min-width: 1025px)",
            },
            (context) => {
              const conditions = context.conditions || {};
              const isVertical = conditions.isVertical ?? false;
              const isHorizontal = conditions.isHorizontal ?? false;
              
                gsap.to(
                    '.feature-card',
                    {
                        opacity: 1,
                        duration: 1,
                        scrollTrigger
                    }
                );
                gsap.to(
                    '.tech-left',
                    {
                        transform: isVertical ? 'translateY(4px)' : 'translateX(20px)',
                        duration: 1,
                        scrollTrigger
                    }
                );
                gsap.to(
                    '.tech-right',
                    {
                        transform: isVertical ? 'translateY(-4px)' : 'translateX(-20px)',
                        duration: 1,
                        scrollTrigger
                    }
                );
            }
        );
    }, [])

    const FeatureCard = ({ text }: { text: string }) => {
        return (
            <div className="feature-card opacity-0 w-32 lg:w-40 h-20 lg:h-auto flex justify-center items-center text-base lg:text-[20px] text-[rgba(0,168,73,1)] bg-white rounded-[9px] px-2.5 py-2 sm:p-3.5 border border-[rgba(0,168,73,0.39)]">
                { text }
            </div>
        )
    }

    return (
        <section className="ctech-section gsap-fade-in  my-10 md:my-40 md:text-center ">
            <h2 className="w-fit text-[32px] text-[rgba(25,169,72,1)] mx-auto mb-5">
                The <span className="text-[rgba(0,89,67,1)]">C-Tech</span> edge
            </h2>
            <p className="w-full font-normal md:text-lg text-[rgba(74,85,101,1)] pb-20 d-flex">
                Distinguished by its Exceptional 98% Treatment Efficiency, Surpassing Conventional Methods.</p>
            <div className="w-11/12 md:w-10/12 flex flex-col lg:flex-row justify-center items-center mx-auto">
                <div className="w-[340px] sm:w-[400px] tech-left translate-y-10 lg:translate-y-0 lg:translate-x-20 relative shrink-0 z-10">
                    <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 top-1/2 -translate-y-1/2 h-[110%] flex lg:flex-col justify-between gap-2 z-20">
                        <FeatureCard text="Outstanding performance"/>
                        <FeatureCard text="Load flexibility"/>
                        <FeatureCard text="Power savings"/>
                    </div>
                    <Image
                    className="h-80 w-auto rotate-90 lg:rotate-0 object-cover z-10"
                    src="/technology/tech-left.png"
                    alt="SFC"
                    width={100}
                    height={60}
                    />
                </div>
                <div className="shrink-0 w-60 rounded-tl-[100px] bg-white rounded-br-[100px] border-[20px] border-[rgba(25,169,72,1)] z-50">
                    <div className="rounded-tl-[80px] rounded-br-[80px] border-[20px] border-[#b4e3c4] px-10 py-8">
                        <Image
                        className="w-2/3 object-cover mx-auto"
                        src="/technology/ctech-logo.png"
                        alt="SFC"
                        width={100}
                        height={60}
                        />
                    </div>
                </div>
                <div className="w-[340px] sm:w-[400px] tech-right -translate-y-10 lg:translate-y-0 lg:-translate-x-20 relative shrink-0 z-10">
                    <Image
                    className="h-80 w-auto rotate-90 lg:rotate-0 object-cover z-10"
                    src="/technology/tech-right.png"
                    alt="SFC"
                    width={100}
                    height={60}
                    />
                    <div className="absolute bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-0 h-[110%] flex lg:flex-col lg:justify-between items-end gap-2 z-20 left-0 right-0 md:left-auto md:right-auto">
                        <FeatureCard text="Energy generation"/>
                        <FeatureCard text="Full automation"/>
                        <FeatureCard text="Substantial land saving"/>
                    </div>
                </div>
            </div>
        </section>
    )
}


    // return (
    //     <section className="h-screen mt-40">
    //         <h2 className="w-fit text-[32px] text-[rgba(25,169,72,1)] mx-auto">
    //             How the <span className="text-[rgba(0,89,67,1)]">C-Tech works</span>
    //         </h2>
    //         <VerticalCarousel
    //         cards={cards}
    //         styling={{
    //             background: "bg-[rgba(42,135,87,1)]",
    //             titleColor: "text-white",
    //             descColor: "text-white"
    //         }}/>
    //     </section>
    // )