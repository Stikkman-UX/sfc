'use client'
import { useState } from "react";
import { Overview } from "./subcomponents/overview";
import { ReportPanel } from "./subcomponents/reportpanel";
import { data } from "./data";

interface MiniCardProps {
    amount: number;
    text: string;
    percent: number;
}

interface FilterBtnProps {
    id: string;
    text: string;
}

const Investor = () => {
    const [activeFilter, setActiveFilter] = useState('overview');

    const MiniCard = ({ amount, text, percent }: MiniCardProps) => {
        return (
            <div className="min-w-[200px] flex-1 flex flex-col items-center gap-2 bg-[rgba(249,249,249,1)] text-[rgba(75,75,75,1)] rounded-tl-2xl rounded-br-2xl px-4 py-6">
                <span className="font-bold !font-basic text-2xl leading-6">&#8377;{`${ amount } Cr`}</span>
                <span className="text-sm text-[rgba(121,121,121,0.8)]">{ text }</span>
                <span className="w-fit font-medium text-xs rounded-full bg-[rgba(245,126,37,0.8)] px-2 py-1">{`+${ percent }%`}</span>
            </div>
        )
    }

    const FilterBtn = ({ id, text }: FilterBtnProps) => {

        return (
            <button
            className={`${
                activeFilter === id ? 'bg-[rgba(25,169,72,1)] text-white shadow-lg' : 'bg-white border border-[rgba(229,231,235,1)] text-[rgba(54,65,83,1)]'
            } text-xs md:text-sm rounded-full px-4 py-2 whitespace-nowrap`}
            onClick={() => handleActive(id)}>
                { text }
            </button>
        )
    }

    const ContactCard = () => {
        return (
            <div className="w-10/12 max-w-[1280px] flex flex-col justify-between gap-3 border border-[rgba(229,231,235,1)] rounded-2xl bg-white px-8 py-6 mx-auto">
                <div className="grid gap-2 text-[rgba(15,23,42,1)]">
                    <span className="font-semibold">
                        Shweta Deshpande
                    </span>
                    <span className="text-xs">
                        Company Secretary and Compliance Officer
                    </span>
                </div>
                <span className="grid font-normal text-sm text-[rgba(74,85,101,1)] pt-4">
                    The Ambience Court, Hi-Tech Business Park 21st Floor, Sector 19-D, Plot No. 2 Vashi, Navi Mumbai, Thane 400 705 Maharashtra, India
                </span>
                <span className="grid font-normal text-sm text-[rgba(74,85,101,1)]">
                    +91-22-2783 2504
                </span>
                <span className="grid font-normal text-sm text-[rgba(74,85,101,1)]">
                    compliance@sfcenv.com
                </span>
            </div>
        )
    }

    const handleActive = (id: string) => {
        setActiveFilter(id);
    }

    return (
        <div className="w-full mb-20 sm:mb-40">
            <div className="bg-[url('/white-bg.png')] bg-no-repeat bg-cover pt-30 sm:pt-52 md:pt-48 pb-20">
                <h2 className="w-11/12 sm:w-10/12 font-medium text-[30px] lg:text-[50px] text-[rgba(0,89,69,1)] leading-[56px] text-start lg:text-center mx-auto">
                    Powering the backbone of <br/>
                    <span className="text-[rgba(0,168,73,1)]">
                        wastewater systems. Quietly. Relentlessly.
                    </span>
                </h2>
                <div className="disable-scrollbar w-full lg:w-fit xl:w-fit max-w-[940px] flex gap-4 sm:mx-auto mt-10 px-6 sm:px-14 overflow-x-auto">
                    <MiniCard amount={2850} text="Revenue (FY 2024)" percent={24}/>
                    <MiniCard amount={685} text="EBITDA" percent={18}/>
                    <MiniCard amount={425} text="Net Profit" percent={22}/>
                    <MiniCard amount={4200} text="Order Book" percent={35}/>
                </div>
            </div>
            <div className="disable-scrollbar w-full flex lg:justify-center gap-2 px-6 sm:px-14 lg:px-32 xl:px-40 mx-auto mt-12 sm:mt-20 mb-10 overflow-x-auto">
                <FilterBtn id="overview" text="Overview"/>
                <FilterBtn id="finance" text="Financial highlights"/>
                {/* <FilterBtn id="shareholders" text="Shareholders"/> */}
                <FilterBtn id="governance" text="Governance"/>
                <FilterBtn id="draft" text="Draft red herring prospectus"/>
                <FilterBtn id="name" text="Name change certificate"/>
                <FilterBtn id="grievance" text="Grievance contact"/>
            </div>
            <div className="gsap-fade-in">
                {
                    activeFilter === 'overview'
                    ? <Overview/>
                    : (
                        activeFilter === 'grievance'
                        ? <ContactCard/>
                        : <ReportPanel key={activeFilter} data={ data[activeFilter as keyof typeof data] }/>
                    )
                }
            </div>
        </div>
    )
}

export default Investor