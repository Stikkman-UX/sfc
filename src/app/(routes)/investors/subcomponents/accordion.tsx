'use client'
import { ArrowUpSvg, ArrowDownSvg } from "@/app/common/commonsvg";
import { useEffect, useRef, useState } from "react";
import { ReportCard } from "./reportcard";
import gsap from "gsap";

interface DesktopAccProps {
    title: string;
    cards: {
        title: string;
        size: string;
        desc?: string;
        date: string;
        isVideo?: boolean;
    }[]
};

interface MobileAccProps {
    title: string;
    accordions: DesktopAccProps[]
}

interface AccordionProps {
    data: DesktopAccProps;
    expanded?: boolean;
}

export const Accordion = ({ data, expanded }: AccordionProps) => {
        const [isExpanded, setIsExpanded] = useState(expanded);
        const AccordionRef = useRef<HTMLDivElement | null>(null);

        const toggleAccordion = () => {
            setIsExpanded(prev => {
                if(prev === false) {
                // Animate expanding
                gsap.to(AccordionRef.current, { duration: 0.3, height: AccordionRef.current ? AccordionRef.current.scrollHeight : 0, ease: "power2.out" });
                } else {
                // Animate collapsing
                gsap.to(AccordionRef.current, { duration: 0.3, height: 0, ease: "power2.in" });
                }
                return !prev;
            });
        };

        useEffect(() => {
            if(expanded) {
                gsap.to(AccordionRef.current, { duration: 0, height: AccordionRef.current ? AccordionRef.current.scrollHeight : 0 });
            }
        }, [])

        return (
            <div className="bg-[rgba(249,249,249,1)] rounded-xl px-6 py-4 cursor-pointer">
                <div
                className="flex justify-between items-center gap-2 pb-4"
                onClick={toggleAccordion}>
                    <h3 className={`${ isExpanded ? 'text-[rgba(0,89,69,1)]' : 'text-[rgba(106,114,130,0.7)]' } transition-all`}>
                        { data.title }
                    </h3>
                    { isExpanded ? <ArrowUpSvg/> : <ArrowDownSvg/> }
                </div>
                <div
                ref={AccordionRef}
                className="grid lg:grid-cols-2 gap-3"
                style={{ height: 0, minHeight: 'none', overflow: "hidden" }}
                >
                    {
                        data.cards.map((card, i) => {
                            return <ReportCard key={'rep'+i} data={card}/>
                        })
                    }
                </div>
            </div>
        )
    };