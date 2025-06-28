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
            <div className={`${ isLarge ? 'row-span-2 col-span-2' : 'w-full col-span-1' } h-full font-inter flex flex-col bg-[rgba(249,249,249,1)] rounded-2xl overflow-hidden`}>
                <div className="relative min-h-[190px] flex-1 flex justify-center items-center bg-[linear-gradient(135deg,rgba(0,89,69,0.1)_0%,rgba(0,168,73,0.1)_100%)] text-xs">
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
                <div className={`${ isLarge ? 'px-8 py-6' : 'p-6' }`}>
                    <div className="space-y-4">
                        <h6 className="text-xl leading-6 text-[rgba(16,24,40,1)] font-bold">
                            { title }
                        </h6>
                        <p className="text-[rgba(74,85,101,1)] font-normal">
                            { desc }
                        </p>
                        <div className="flex justify-between items-center text-xs text-[rgba(106,114,130,1)] pt-4">
                            <span className="flex items-center gap-2">
                                <DateSvg/>
                                { min } min read
                            </span>
                            <span className="flex items-center gap-2">
                                { source }
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-8">
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
            } text-sm rounded-full px-6 py-3 whitespace-nowrap capitalize`}
            onClick={handleActive}>
                { text }
            </button>
        )
    }

    return (
        <section className="w-10/12 mx-auto py-20">
            <div className="flex justify-between gap-4">
                <div className="w-1/2 space-y-4">
                    <h4 className="w-2/3 lg:w-1/2 text-[rgba(0,89,67,1)] text-[32px] leading-9">
                        <span className="text-[rgba(25,169,72,1)]">Latest</span> news & updates
                    </h4>
                    <p className="text-lg font-normal text-[rgba(74,85,101,1)]">
                        Stay updated with our latest achievements, partnerships, and innovations driving India's water treatment industry forward.
                    </p>
                </div>
                <div className="w-1/2 flex justify-end items-end gap-x-4">
                    {
                        Object.keys(cards).map((key) => {
                            return <FilterBtn key={key} id={key} text={key} />
                        })
                    }
                </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-3 gap-8 pt-20 pb-10">
                {
                    cards[ActiveFilter as keyof typeof cards].map((cardData, i) => {
                        return <NewsCard key={i} cardData={cardData} isLarge={i === 0}/>
                    })
                }
            </div>
        </section>
    )
}