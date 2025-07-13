'use client';
import { useState } from "react";
import { BlogSvg, DateSvg, PdfSvg, RedirectSvg, VideoSvg, ViewsSvg } from "@/app/components/commonsvg";

interface  FilterBtn {
    id: string;
    text: string;
}

interface KnowledgeCard {
    cardData: {
        tag: string,
        title: string,
        desc: string,
        date: string,
        views: string,
        isVideo?: boolean;
        isPdf?: boolean;
    }
}

export const Knowledge = () => {
    const [ActiveFilter, setActiveFilter] = useState<string>('content');

    const cards = {
        'content': [
            {
                tag: 'Whitepaper',
                title: 'The Future of Wastewater Treatment in Smart Cities',
                desc: 'Comprehensive analysis of emerging technologies and their role in sustainable urban development across India.',
                date: 'March 2024',
                views: '2.5k views',
            },
            {
                tag: 'Webinar',
                title: 'Zero Liquid Discharge: Implementation Best Practices',
                desc: 'Expert insights on achieving zero liquid discharge in industrial applications with real-world case studies.',
                date: 'February 2024',
                views: '1.8k views',
                isVideo: true,
            },
            {
                tag: 'Report',
                title: "India's Water Crisis: Technology Solutions for 2030",
                desc: 'Industry analysis of water scarcity challenges and the role of advanced treatment technologies.',
                date: 'January 2024',
                views: '3.2k views',
                isPdf: true,
            },
        ],
        'whitepapers': [
            {
                tag: 'Whitepaper',
                title: 'The Future of Wastewater Treatment in Smart Cities',
                desc: 'Comprehensive analysis of emerging technologies and their role in sustainable urban development across India.',
                date: 'March 2024',
                views: '2.5k views',
            },
            {
                tag: 'Webinar',
                title: 'Zero Liquid Discharge: Implementation Best Practices',
                desc: 'Expert insights on achieving zero liquid discharge in industrial applications with real-world case studies.',
                date: 'February 2024',
                views: '1.8k views',
            },
            {
                tag: 'Report',
                title: "India's Water Crisis: Technology Solutions for 2030",
                desc: 'Industry analysis of water scarcity challenges and the role of advanced treatment technologies.',
                date: 'January 2024',
                views: '3.2k views',
            },
        ],
        'webinars': [
            {
                tag: 'Whitepaper',
                title: 'The Future of Wastewater Treatment in Smart Cities',
                desc: 'Comprehensive analysis of emerging technologies and their role in sustainable urban development across India.',
                date: 'March 2024',
                views: '2.5k views',
            },
            {
                tag: 'Webinar',
                title: 'Zero Liquid Discharge: Implementation Best Practices',
                desc: 'Expert insights on achieving zero liquid discharge in industrial applications with real-world case studies.',
                date: 'February 2024',
                views: '1.8k views',
            },
            {
                tag: 'Report',
                title: "India's Water Crisis: Technology Solutions for 2030",
                desc: 'Industry analysis of water scarcity challenges and the role of advanced treatment technologies.',
                date: 'January 2024',
                views: '3.2k views',
            },
        ],
        'reports': [
            {
                tag: 'Whitepaper',
                title: 'The Future of Wastewater Treatment in Smart Cities',
                desc: 'Comprehensive analysis of emerging technologies and their role in sustainable urban development across India.',
                date: 'March 2024',
                views: '2.5k views',
            },
            {
                tag: 'Webinar',
                title: 'Zero Liquid Discharge: Implementation Best Practices',
                desc: 'Expert insights on achieving zero liquid discharge in industrial applications with real-world case studies.',
                date: 'February 2024',
                views: '1.8k views',
            },
            {
                tag: 'Report',
                title: "India's Water Crisis: Technology Solutions for 2030",
                desc: 'Industry analysis of water scarcity challenges and the role of advanced treatment technologies.',
                date: 'January 2024',
                views: '3.2k views',
            },
        ],
    };

    const KnowledgeCard = ({ cardData }: KnowledgeCard) => {
        const { tag, title, desc, date, views } = cardData;

        return (
            <div className="w-[290px] shrink-0 border md:w-[400px] lg:w-auto space-y-6 bg-[rgba(249,249,249,1)] rounded-tl-xl md:rounded-tl-2xl rounded-br-xl md:rounded-br-2xl px-6 md:px-8 py-6">
                <div className="flex justify-between items-start">
                    <div className=" bg-[rgba(0,89,69,0.1)] p-2 md:p-3 rounded-xl md:rounded-2xl">
                        {
                            cardData.isVideo
                            ? <VideoSvg/>
                            : (
                                cardData.isPdf
                                ? <PdfSvg/>
                                : <BlogSvg/>
                            )
                        }
                    </div>
                    <span className="bg-[rgba(249,250,251,1)] rounded-full px-4 py-2 font-normal text-xs">
                        { tag }
                    </span>
                </div>
                <div className="space-y-4">
                    <h6 className="text-[rgba(0,89,67,1)]">
                        { title }
                    </h6>
                    <p className="hidden md:block text-[rgba(74,85,101,1)] font-normal text-sm">
                        { desc }
                    </p>
                    <div className="flex justify-between items-center text-xs text-[rgba(106,114,130,1)]">
                        <span className="flex items-center gap-2">
                            <DateSvg/>
                            { date }
                        </span>
                        <span className="flex items-center gap-2">
                            <ViewsSvg/>
                            { views }
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <span className="text-[11px] md:text-sm text-[rgba(54,65,83,1)]">
                        { cardData.isVideo ? 'Watch now' : 'Read more' }
                    </span>
                    <RedirectSvg/>
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
            } text-xs md:text-sm rounded-full px-3 md:px-4 py-2 md:py-3 whitespace-nowrap`}
            onClick={handleActive}>
                { text }
            </button>
        )
    }

    return (
        <section className="mx-auto py-20">
            <div className="w-full md:w-10/12 flex flex-col lg:flex-row justify-between gap-10 mx-auto">
                <div className="w-11/12 lg:flex-1 md:space-y-4 mx-auto md:mx-0">
                    <h4 className="w-full lg:w-1/2 text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9">
                        <span className="text-[rgba(25,169,72,1)]">
                            Knowledge
                        </span> library
                    </h4>
                    <p className=" md:text-lg font-normal text-[rgba(74,85,101,1)]">
                        Explore our comprehensive collection of research, insights, and industry analysis.
                    </p>
                </div>
                <div className="disable-scrollbar w-full lg:w-fit flex justify-start lg:justify-end items-center md:items-end gap-x-2 md:gap-x-4 overflow-x-auto px-4 sm:px-7 md:px-0 mx-auto">
                    <FilterBtn id="content" text="All Content" />
                    <FilterBtn id="whitepapers" text="Whitepapers" />
                    <FilterBtn id="webinars" text="Webinars" />
                    <FilterBtn id="reports" text="Industry Reports" />
                </div>
            </div>
            <div className="disable-scrollbar lg:w-10/12 flex lg:grid lg:grid-cols-3 gap-6 pt-10 md:py-20 px-4 sm:px-7 md:px-16 lg:px-0 overflow-x-auto lg:mx-auto">
                {
                    cards[ActiveFilter as keyof typeof cards].map((cardData, i) => {
                        return <KnowledgeCard key={i} cardData={cardData}/>
                    })
                }
            </div>
        </section>
    )
}