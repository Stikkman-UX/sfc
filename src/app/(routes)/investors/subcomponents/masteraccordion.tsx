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
    }[];
};

interface MasterAccordionProps {
    title: string;
    children: React.JSX.Element;
}

export const MasterAccordion = ({ title, children }: MasterAccordionProps) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const masterRef = useRef<HTMLDivElement | null>(null);
        const AccordionRef = useRef<HTMLDivElement | null>(null);

        const toggleAccordion = (e: React.MouseEvent) => {
            // e.stopPropagation();
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
            // Create a new ResizeObserver
            const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                const { height } = entry.contentRect;
                if(masterRef.current) {
                    masterRef.current.style.height = (Number(masterRef.current.style.height) -  height) + 'px';
                }
                console.log('test', height, masterRef.current)
                // console.log(`Width: ${width}, Height: ${height}`);
                
            });
        });
    
            // Start observing the element
            if(AccordionRef.current) resizeObserver.observe(AccordionRef.current);
        }, [])


        return (
            <div
            className="min-h-fit bg-[rgba(249,249,249,1)] rounded-xl px-6 py-4 cursor-pointer overflow-hidden">
                <div
                className="flex justify-between items-center gap-3 pb-4"
                onClick={toggleAccordion}>
                    <h3 className={`${ isExpanded ? 'text-[rgba(0,89,69,1)]' : 'text-[rgba(106,114,130,0.7)]' } transition-all pointer-events-none`}>
                        { title }
                    </h3>
                    <div className="shrink-0">
                        { isExpanded ? <ArrowUpSvg/> : <ArrowDownSvg/> }
                    </div>
                </div>
                <div
                ref={AccordionRef}
                className={`${ isExpanded ? 'min-h-fit h-auto max-h-auto' : 'h-0 min-h-0 max-h-fit' } grid lg:grid-cols-2 gap-3 ${ !toggleAccordion && 'pointer-events-none' } overflow-hidden`}
                // style={{ height: 0, minHeight: 'none', overflow: "hidden" }}
                >
                    { children }
                </div>
            </div>
        )
    };