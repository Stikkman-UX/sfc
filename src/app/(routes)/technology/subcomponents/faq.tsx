'use client'
import { useRef, useState } from "react";
import gsap from "gsap";
import { ArrowDownSvg } from "@/app/components/commonsvg";

interface AccordionProps {
    data: {
        ques: string;
        ans: string;
    }
}

export const Faq = () => {

    const faq = [
        {
            ques: "What makes C-Tech different from conventional STP systems?",
            ans: "What makes C-Tech different from conventional STP systems"
        },
        {
            ques: "What makes C-Tech different from conventional STP systems?",
            ans: "What makes C-Tech different from conventional STP systems"
        },
        {
            ques: "What makes C-Tech different from conventional STP systems?",
            ans: "What makes C-Tech different from conventional STP systems"
        },
        {
            ques: "What makes C-Tech different from conventional STP systems?",
            ans: "What makes C-Tech different from conventional STP systems"
        },
        {
            ques: "What makes C-Tech different from conventional STP systems?",
            ans: "What makes C-Tech different from conventional STP systems"
        },
    ];

    const Accordion = ({ data }: AccordionProps) => {
        const [isExpanded, setIsExpanded] = useState(false);
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

        return (
            <div className="bg-[rgba(249,249,249,1)] rounded-xl px-6 py-4 cursor-pointer">
                <div
                className="flex justify-between items-center gap-2"
                onClick={toggleAccordion}>
                    <h3 className="text-[rgba(16,24,40,0.7)]">{ data.ques }</h3>
                    <ArrowDownSvg/>
                </div>
                <div
                ref={AccordionRef}
                className=""
                style={{ height: 0, overflow: "hidden" }}
                >
                    <p className="py-6">{ data.ans }</p>
                </div>
            </div>
        )
    };

    return (
        <section className="gsap-fade-in w-11/12 md:w-[900px] space-y-12 mx-auto ms:my-20 py-10">
            <div className="md:space-y-2 text-start md:text-center">
                <h2 className="w-full md:w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)] md:mx-auto">
                    <span className="text-[rgba(0,89,67,1)]">Frequently Asked</span> Questions
                </h2>
                <p className="font-normal md:text-lg text-[rgba(74,85,101,1)] mx-auto">
                    Get answers to common questions about C-Tech technology and implementation.
                </p>
            </div>
            <div className="space-y-4">
                {
                    faq.map((data, i) => {
                        return <Accordion key={i} data={data}/>
                    })
                }
            </div>
        </section>
    )
}