'use client';
import { useState } from "react";
import { BlogSvg, DateSvg, NewsSvg1, NewsSvg2, NewsSvg3, PdfSvg, RedirectSvg, VideoSvg, ViewsSvg } from "./commonsvg";

interface  FilterBtn {
    id: string;
    text: string;
}

interface NewsCard {
    cardData: {
        tag: string;
        date: string;
        icon: React.JSX.Element;
        title: string;
        desc: string;
        min: number;
        source: string;
    };
    isLarge?: boolean;
}

export const News = () => {
    const [ActiveFilter, setActiveFilter] = useState<string>('all news');

    const cards = {
        'all news': [
            {
                tag: 'Award',
                date: 'March 15, 2024',
                icon: <NewsSvg1/>,
                title: "SFC wins 'Excellence in Environmental Technology' Award 2024",
                desc: "Recognized by the National Water Awards for outstanding contribution to sustainable wastewater treatment innovation across India's smart cities program.",
                min: 3,
                source: "Industry Today",
            },
            {
                tag: 'Expansion',
                date: 'March 10, 2024',
                icon: <NewsSvg2/>,
                title: "New Manufacturing Facility Opens in Chennai",
                desc: "State-of-the-art production facility to support growing demand for CTEK systems in South India.",
                min: 2,
                source: "Business Wire",
            },
            {
                tag: 'Partnership',
                date: 'March 5, 2024',
                icon: <NewsSvg3/>,
                title: "Strategic Partnership with Larsen & Toubro",
                desc: "Expanded collaboration to deliver integrated water treatment solutions for mega infrastructure projects.",
                min: 4,
                source: "Economic Times",
            },
        ],
        'awards': [
            {
                tag: 'Award',
                date: 'March 15, 2024',
                icon: <NewsSvg1/>,
                title: "SFC wins 'Excellence in Environmental Technology' Award 2024",
                desc: "Recognized by the National Water Awards for outstanding contribution to sustainable wastewater treatment innovation across India's smart cities program.",
                min: 3,
                source: "Industry Today",
            },
            {
                tag: 'Expansion',
                date: 'March 10, 2024',
                icon: <NewsSvg2/>,
                title: "New Manufacturing Facility Opens in Chennai",
                desc: "State-of-the-art production facility to support growing demand for CTEK systems in South India.",
                min: 2,
                source: "Business Wire",
            },
            {
                tag: 'Partnership',
                date: 'March 5, 2024',
                icon: <NewsSvg3/>,
                title: "Strategic Partnership with Larsen & Toubro",
                desc: "Expanded collaboration to deliver integrated water treatment solutions for mega infrastructure projects.",
                min: 4,
                source: "Economic Times",
            },
        ],
        'partnerships': [
            {
                tag: 'Award',
                date: 'March 15, 2024',
                icon: <NewsSvg1/>,
                title: "SFC wins 'Excellence in Environmental Technology' Award 2024",
                desc: "Recognized by the National Water Awards for outstanding contribution to sustainable wastewater treatment innovation across India's smart cities program.",
                min: 3,
                source: "Industry Today",
            },
            {
                tag: 'Expansion',
                date: 'March 10, 2024',
                icon: <NewsSvg2/>,
                title: "New Manufacturing Facility Opens in Chennai",
                desc: "State-of-the-art production facility to support growing demand for CTEK systems in South India.",
                min: 2,
                source: "Business Wire",
            },
            {
                tag: 'Partnership',
                date: 'March 5, 2024',
                icon: <NewsSvg3/>,
                title: "Strategic Partnership with Larsen & Toubro",
                desc: "Expanded collaboration to deliver integrated water treatment solutions for mega infrastructure projects.",
                min: 4,
                source: "Economic Times",
            },
        ],
        'news': [
            {
                tag: 'Award',
                date: 'March 15, 2024',
                icon: <NewsSvg1/>,
                title: "SFC wins 'Excellence in Environmental Technology' Award 2024",
                desc: "Recognized by the National Water Awards for outstanding contribution to sustainable wastewater treatment innovation across India's smart cities program.",
                min: 3,
                source: "Industry Today",
            },
            {
                tag: 'Expansion',
                date: 'March 10, 2024',
                icon: <NewsSvg2/>,
                title: "New Manufacturing Facility Opens in Chennai",
                desc: "State-of-the-art production facility to support growing demand for CTEK systems in South India.",
                min: 2,
                source: "Business Wire",
            },
            {
                tag: 'Partnership',
                date: 'March 5, 2024',
                icon: <NewsSvg3/>,
                title: "Strategic Partnership with Larsen & Toubro",
                desc: "Expanded collaboration to deliver integrated water treatment solutions for mega infrastructure projects.",
                min: 4,
                source: "Economic Times",
            },
        ],
    };

    const NewsCard = ({ cardData, isLarge }: NewsCard) => {
        const { tag, title, desc, date, icon, min, source } = cardData;

        return (
            <div className={`${ isLarge ? 'md:w-auto md:row-span-2 md:col-span-2' : 'md:w-auto md:col-span-1' } w-full sm:w-[340px] shrink-0  flex flex-col bg-[rgba(249,249,249,1)] rounded-2xl overflow-hidden`}>
                <div className="relative  min-h-[200px] h-[240px] flex-1 flex justify-center items-center bg-[linear-gradient(135deg,rgba(0,89,69,0.1)_0%,rgba(0,168,73,0.1)_100%)] text-xs">
                    <div className="absolute top-0 w-full flex justify-between items-center p-4">
                        <span className="bg-[rgba(0,168,73,1)] text-white rounded-full px-4 py-2">
                            { tag }
                        </span>
                        <span className="bg-white text-[rgba(54,65,83,1)] rounded-full px-4 py-2">
                            { date }
                        </span>
                    </div>
                    <div className="w-fit mx-auto bg-[rgba(0,89,69,1)] rounded-2xl p-4 shadow-md">
                        { icon }
                    </div>
                </div>
                <div className={`${ isLarge ? 'p-6 md:px-8 md:py-6' : 'p-6' }`}>
                    <div className="space-y-2 md:space-y-4">
                        <h6 className="md:text-xl leading-6 text-[rgba(16,24,40,1)] font-bold">
                            { title }
                        </h6>
                        <p className="text-sm md:text-base text-[rgba(74,85,101,1)] font-normal">
                            { desc }
                        </p>
                        <div className="flex justify-between items-center text-xs text-[rgba(106,114,130,1)] pt-2 md:pt-4">
                            <span className="flex items-center gap-2">
                                <DateSvg/>
                                { min } min read
                            </span>
                            <span className="flex items-center gap-2">
                                { source }
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-6 md:pt-8">
                        <span className="text-sm text-[rgba(54,65,83,1)]">
                            Read more
                        </span>
                        <RedirectSvg/>
                    </div>
                </div>
            </div>
        )
    }

    const FilterBtn = ({ id, text }: FilterBtn) => {

        const handleActive = () => {
            setActiveFilter(id);
        }

        return (
            <button
            className={`${
                ActiveFilter === id ? 'bg-[rgba(25,169,72,1)] text-white' : 'bg-white border border-[rgba(229,231,235,1)] text-[rgba(54,65,83,1)]'
            } text-xs md:text-sm rounded-full px-3 md:px-4 py-2 md:py-3 whitespace-nowrap capitalize`}
            onClick={handleActive}>
                { text }
            </button>
        )
    }

    return (
        <section className="md:w-10/12 mx-auto md:pt-20 md:py-20">
            <div className="md:w-full  flex flex-col lg:flex-row justify-between gap-4">
                <div className="w-11/12 md:w-2/3 lg:w-1/2 space-y-2 md:space-y-4 mx-auto md:mx-0">
                    <h4 className="w-2/3 lg:w-1/2 text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9">
                        <span className="text-[rgba(25,169,72,1)]">Latest</span> news & updates
                    </h4>
                    <p className="text-base md:text-lg font-normal text-[rgba(74,85,101,1)]">
                        Stay updated with our latest achievements, partnerships, and innovations driving India's water treatment industry forward.
                    </p>
                </div>
                <div className="disable-scrollbar lg:w-1/2 flex justify-start lg:justify-end items-end gap-x-4 overflow-x-auto px-4 sm:px-7 md:px-0">
                    {
                        Object.keys(cards).map((key) => {
                            return <FilterBtn key={key} id={key} text={key} />
                        })
                    }
                </div>
            </div>
            <div className="disable-scrollbar flex items-stretch md:grid md:grid-rows-2 gap-8 px-4 sm:px-7 md:px-0 pt-10 md:pt-20 pb-10 overflow-x-auto">
                {
                    cards[ActiveFilter as keyof typeof cards].map((cardData, i) => {
                        return <NewsCard key={i} cardData={cardData} isLarge={i === 0}/>
                    })
                }
            </div>
        </section>
    )
}