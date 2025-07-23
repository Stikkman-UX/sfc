'use client'
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";

interface AnimatedCarouselProps {
    cards: ShowcaseCardProps[];
}

interface ShowcaseCardProps {
    id: string;
    image: string;
    tag: string;
    tagColor: string;
    title: string;
    desc: string;
    advantage: string;
}

export const AnimatedCarousel = ({ cards }: AnimatedCarouselProps) => {

    const AdvantageSvg = () => {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1074 6.24609H17.6546V10.7933" stroke="#00A849" strokeWidth="1.51572" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.6572 6.24609L11.2154 12.6879L7.4261 8.89861L2.5 13.8247" stroke="#00A849" strokeWidth="1.51572" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const LearnMoreSvg = () => {
        return (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.68164 2.68359H15.0496" stroke="#0F172A" strokeWidth="1.51572" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.81836 2.68359V14.8094C4.81836 15.2114 4.97805 15.5969 5.2623 15.8812C5.54656 16.1654 5.93209 16.3251 6.33408 16.3251H12.397C12.799 16.3251 13.1845 16.1654 13.4688 15.8812C13.753 15.5969 13.9127 15.2114 13.9127 14.8094V2.68359" stroke="#0F172A" strokeWidth="1.51572" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.81836 11.0195H13.9127" stroke="#0F172A" strokeWidth="1.51572" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const ShowcaseCard = ({ data }: { data: ShowcaseCardProps }) => {
        const { id, image, tag, tagColor, title, desc, advantage, } = data;


        return (
            <div className={` ${id} shrink-0 w-[340px] md:w-[390px] flex flex-col bg-[rgba(249,249,249,1)] rounded-tl-xl rounded-br-xl sm:rounded-tl-2xl sm:rounded-br-2xl overflow-hidden`}>
                <div className="relative w-full">
                    <Image
                    className="relative max-h-[200px] w-full object-cover z-10"
                    src={image}
                    alt="SFC"
                    width={100}
                    height={60}
                    />
                    <span className={`absolute top-4 right-4  text-white text-[13.5px] px-2.5 py-0.5 rounded-full z-20 ${ tagColor }`}>
                        { tag }
                    </span>
                </div>
                {/* <div className="space-y-4 px-4 md:px-6 pt-10 pb-6"> */}
                <div className="space-y-4 px-6 md:px-8 pt-10 pb-5 md:pb-7">
                    <div className="space-y-3">
                        <h4 className="font-semibold md:text-base text-[rgba(0,89,69,1)]">
                            { title }
                        </h4>
                        <p className="text-[rgba(74,85,101,1)] text-sm leading-5 font-normal">
                            { desc }
                        </p>
                    </div>
                    <span className="flex items-center gap-2  text-[rgba(0,168,73,1)]">
                        <AdvantageSvg/>
                        { advantage }
                    </span>
                    <button
                    className="w-full flex justify-center items-center gap-4 border border-[rgba(226,232,240,1)] rounded-[14px] py-1"
                    type="button">
                        <LearnMoreSvg/>
                        Learn More
                    </button>
                </div>
            </div>
        )
    }

    function changeclass() {
        const inactive1 = document.querySelectorAll('.showcase-inactive-1') as NodeListOf<HTMLDivElement>;
        const inactive2 = document.querySelectorAll('.showcase-inactive-2') as NodeListOf<HTMLDivElement>;
        const active = document.querySelectorAll('.showcase-active') as NodeListOf<HTMLDivElement>;

        inactive2.forEach(el => {
            el.classList.remove('inactive-slide-1');
            el.classList.add('inactive-slide-4');
        });
        inactive1.forEach(el => {
            el.classList.remove('inactive-slide-1');
            el.classList.add('inactive-slide-2');
        });
        active.forEach(el => {
            el.classList.remove('active-slide');
            el.classList.add('inactive-slide-1');
        });
    }

    // useEffect(() => {
    //     const tl = gsap.timeline();
    //     const container = document.querySelector('.showcase-container') as HTMLDivElement;
    //     const width = container.clientWidth / 3;

    //     tl
    //     .to('.showcase-inactive-1', { x: -width, opacity: 0, duration: 1})
    //     .to('.showcase-inactive-2', { x: -width, opacity: 0, duration: 1})
    // }, [])

    return (
        <div className="disable-scrollbar w-full lg:w-auto flex lg:justify-center px-4 sm:px-7 md:px-16 lg:px-0 lg:pt-20 lg:pb-10 overflow-x-auto">
            <div className="w-fit showcase-container flex lg:justify-center gap-6">
                {
                    cards.map((cardData, i) => {
                        return <ShowcaseCard key={i} data={cardData} />
                    })
                }
            </div>
        </div>
    )
}