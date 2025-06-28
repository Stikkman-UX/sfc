'use client';
import { useState } from "react";
import { BlogSvg, DateSvg, PdfSvg, RedirectSvg, VideoSvg, ViewsSvg } from "./commonsvg";

interface  FilterBtn {
    id: string;
    text: string;
}

interface LeadingCard {
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

export const Leading = () => {
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

    const LeadingCard = ({ cardData }: LeadingCard) => {
        const { tag, title, desc, date, views } = cardData;

        return (
            <div className="space-y-6 bg-[rgba(249,249,249,1)] rounded-tl-2xl rounded-br-2xl px-8 py-6">
                <div className="flex justify-between items-start">
                    <div className=" bg-[rgba(0,89,69,0.1)] p-3 rounded-2xl">
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
                    <p className="text-[rgba(74,85,101,1)] font-normal text-sm">
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
                    <span className="text-sm text-[rgba(54,65,83,1)]">
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
            } text-sm rounded-full px-4 py-3 whitespace-nowrap`}
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
                        <span className="text-[rgba(25,169,72,1)]">Leading</span> industry conversations
                    </h4>
                    <p className="text-lg font-normal text-[rgba(74,85,101,1)]">
                        Expert insights, research, and analysis on wastewater treatment innovation, sustainability, and the future of water infrastructure in India.
                    </p>
                </div>
                <div className="w-1/2 flex justify-end items-end gap-x-4">
                    <FilterBtn id="content" text="All Content" />
                    <FilterBtn id="whitepapers" text="Whitepapers" />
                    <FilterBtn id="webinars" text="Webinars" />
                    <FilterBtn id="reports" text="Industry Reports" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 py-20">
                {
                    cards[ActiveFilter as keyof typeof cards].map((cardData, i) => {
                        return <LeadingCard key={i} cardData={cardData}/>
                    })
                }
            </div>
        </section>
    )
}