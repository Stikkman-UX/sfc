'use client'
import { ArrowDownSvg, ArrowRightGreenSvg, LocationSvg } from "@/app/components/commonsvg";
import { useState } from "react";

interface  FilterBtn {
    id: string;
    text: string;
}

interface JobCardProps {
    data: {
        title: string;
        category: string;
        location: string;
        shift: string;
        exp: string;
        desc: string;
        tags: string[];
    }
}

export const Positions = () => {
    const [ActiveFilter, setActiveFilter] = useState<string>('content');

    const cards = [
        {
            title: "Project Manager - Water Infrastructure",
            category: "Operations",
            location: "Mumbai, Maharastra",
            shift: "Full-time",
            exp: "7-10 years",
            desc: "Manage large-scale municipal and industrial wastewater treatment projects.",
            tags: ['Project Management', 'EPC', 'Water Treatment'],
        },
        {
            title: "Project Manager - Water Infrastructure",
            category: "Operations",
            location: "Mumbai, Maharastra",
            shift: "Full-time",
            exp: "7-10 years",
            desc: "Manage large-scale municipal and industrial wastewater treatment projects.",
            tags: ['Project Management', 'EPC', 'Water Treatment'],
        },
        {
            title: "Project Manager - Water Infrastructure",
            category: "Operations",
            location: "Mumbai, Maharastra",
            shift: "Full-time",
            exp: "7-10 years",
            desc: "Manage large-scale municipal and industrial wastewater treatment projects.",
            tags: ['Project Management', 'EPC', 'Water Treatment'],
        },
    ]

    const CategorySvg = () => {
        return (
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2799 7.66699C14.3992 7.61434 14.5005 7.52783 14.5712 7.41819C14.6418 7.30855 14.6788 7.18058 14.6774 7.05015C14.6761 6.91971 14.6365 6.79254 14.5636 6.68438C14.4907 6.57622 14.3876 6.49183 14.2672 6.44165L8.5532 3.83899C8.37949 3.75975 8.19079 3.71875 7.99987 3.71875C7.80894 3.71875 7.62024 3.75975 7.44653 3.83899L1.7332 6.43899C1.61451 6.49097 1.51354 6.57641 1.44264 6.68487C1.37174 6.79332 1.33398 6.92008 1.33398 7.04966C1.33398 7.17923 1.37174 7.30599 1.44264 7.41444C1.51354 7.5229 1.61451 7.60834 1.7332 7.66032L7.44653 10.2657C7.62024 10.3449 7.80894 10.3859 7.99987 10.3859C8.19079 10.3859 8.37949 10.3449 8.5532 10.2657L14.2799 7.66699Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.666 7.05469V11.0547" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 8.71875V11.0521C4 11.5825 4.42143 12.0912 5.17157 12.4663C5.92172 12.8414 6.93913 13.0521 8 13.0521C9.06087 13.0521 10.0783 12.8414 10.8284 12.4663C11.5786 12.0912 12 11.5825 12 11.0521V8.71875" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const ExpSvg = () => {
        return (
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2799 7.66699C14.3992 7.61434 14.5005 7.52783 14.5712 7.41819C14.6418 7.30855 14.6788 7.18058 14.6774 7.05015C14.6761 6.91971 14.6365 6.79254 14.5636 6.68438C14.4907 6.57622 14.3876 6.49183 14.2672 6.44165L8.5532 3.83899C8.37949 3.75975 8.19079 3.71875 7.99987 3.71875C7.80894 3.71875 7.62024 3.75975 7.44653 3.83899L1.7332 6.43899C1.61451 6.49097 1.51354 6.57641 1.44264 6.68487C1.37174 6.79332 1.33398 6.92008 1.33398 7.04966C1.33398 7.17923 1.37174 7.30599 1.44264 7.41444C1.51354 7.5229 1.61451 7.60834 1.7332 7.66032L7.44653 10.2657C7.62024 10.3449 7.80894 10.3859 7.99987 10.3859C8.19079 10.3859 8.37949 10.3449 8.5532 10.2657L14.2799 7.66699Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.666 7.05469V11.0547" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 8.71875V11.0521C4 11.5825 4.42143 12.0912 5.17157 12.4663C5.92172 12.8414 6.93913 13.0521 8 13.0521C9.06087 13.0521 10.0783 12.8414 10.8284 12.4663C11.5786 12.0912 12 11.5825 12 11.0521V8.71875" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const ClockSvg = () => {
        return (
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00065 15.0521C11.6825 15.0521 14.6673 12.0673 14.6673 8.38542C14.6673 4.70352 11.6825 1.71875 8.00065 1.71875C4.31875 1.71875 1.33398 4.70352 1.33398 8.38542C1.33398 12.0673 4.31875 15.0521 8.00065 15.0521Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 4.38672V8.38672L10.6667 9.72005" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const ArrowRightSvg = () => {
        return (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.06055 12.1875L10.0605 8.1875L6.06055 4.1875" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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

    const JobCard = ({ data }: JobCardProps) => {

        const { title, category, location, shift, exp, desc, tags } = data;

        return (
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 border-b border-[rgba(218,218,218,1)] px-6 pt-12 pb-8">
                <div className="flex flex-col gap-3">
                    <span className="text-[rgba(0,89,69,1)] text-[22px]">
                        { title }
                    </span>
                    <div className="flex items-center gap-3 text-sm font-normal text-[rgba(74,85,101,1)]">
                        <span className="flex items-center gap-1">
                            <CategorySvg/>
                            { category }
                        </span>
                        <span className="flex items-center gap-1">
                            <LocationSvg/>
                            { location }
                        </span>
                        <span className="flex items-center gap-1">
                            <ClockSvg/>
                            { shift }
                        </span>
                        <span className="flex items-center gap-1">
                            <ExpSvg/>
                            { exp }
                        </span>
                    </div>
                    <span className="font-normal text-[rgba(74,85,101,1)]">
                        { desc }
                    </span>
                    <div className="flex gap-2">
                        {
                            tags.map((tag, i) => {
                                return (
                                    <div
                                    key={i}
                                    className="bg-[rgba(229,246,237,1)] text-xs text-[rgba(15,23,42,1)] rounded-xl px-2 py-1">
                                        { tag }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full md:w-fit flex items-center gap-3">
                    <button
                    className="flex-1 w-full sm:w-fit flex justify-center items-center gap-2 g-bordered-btn text-[rgba(0,168,73,1)] whitespace-nowrap border border-[rgba(0,168,73,1)] rounded-full px-4 md:px-5 py-2.5">
                        View Details  
                    </button>
                    <button
                    className={`w-fit flex justify-center items-center gap-2 orange-btn text-white bg-[rgba(245,126,37,1)] border border-[rgba(245,126,37,1)] rounded-full whitespace-nowrap px-4 md:px-5 py-2.5`}>
                        Apply Now
                        <ArrowRightSvg/>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="gsap-fade-in w-11/12 sm:w-10/12 max-w-[1240px] space-y-10 py-28 mx-auto">
            <div className="w-11/12 lg:w-2/5 md:space-y-2 mx-auto md:mx-0">
                <h4 className="w-full lg:w-1/2 text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9">
                    <span className="text-[rgba(25,169,72,1)]">
                        Open{" "}
                    </span>
                    Positions
                </h4>
                <p className=" md:text-lg font-normal text-[rgba(74,85,101,1)]">
                    Discover exciting opportunities to make an impact in India's water infrastructure sector
                </p>
            </div>
            <div className="bottom-shadow flex flex-col-reverse md:flex-row gap-6 md:gap-4 justify-between items-center px-6 py-8 rounded-2xl">
                <div className="disable-scrollbar w-full sm:w-fit flex justify-start lg:justify-end items-center md:items-end gap-x-2 md:gap-x-4 overflow-x-auto px-4 sm:px-7 md:px-0">
                    <FilterBtn id="opening" text="All Opening" />
                    <FilterBtn id="sales" text="Sales" />
                    <FilterBtn id="marketing" text="Marketing" />
                    <FilterBtn id="management" text="Management" />
                </div>
                <div className="w-full sm:w-fit flex justify-between sm:justify-center items-center gap-4 text-[rgba(100,116,139,1)] text-sm font-normal">
                    <input
                    className="w-full h-full px-4 py-1 bg-[rgba(249,249,249,1)] rounded-xl"
                    placeholder="Search positions, keywords..."
                    type="text"
                    />
                    <button
                    className="flex items-center gap-3 bg-[rgba(249,249,249,1)] rounded-xl px-3 py-3 sm:py-1">
                        <LocationSvg/>
                        <span className="hidden sm:inline">Location</span>
                        <span className="hidden sm:inline"><ArrowDownSvg/></span>
                    </button>
                </div>
            </div>
            <div className="pb-10">
                {
                    cards.map((data, i) => {
                        return (
                            <JobCard key={i} data={data}/>
                        )
                    })
                }
            </div>
            <button
            className="flex-1 w-full sm:w-fit flex justify-center items-center gap-2 text-[rgba(0,168,73,1)] whitespace-nowrap border border-[rgba(0,168,73,1)] rounded-full px-4 md:px-5 py-2.5 mx-auto">
                Load more
                <ArrowRightGreenSvg/>
            </button>
        </div>
    )
}