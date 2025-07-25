import { useState } from "react";
import { Accordion } from "./accordion";
import { MasterAccordion } from "./masteraccordion";
import { useMediaQuery } from "react-responsive";

interface ReportPanelProps {
    data: {
        [key: string]:  {
            title: string;
            accordions: {
                title: string;
                cards: {
                    title: string;
                    size: string;
                    desc?: string;
                    date: string;
                    src: string;
                    isVideo?: boolean;
                }[];
            }[]
        }[]
    }
}

export const ReportPanel = ({ data }: ReportPanelProps) => {
    const [activeCatergory, setActiveCategory] = useState(Object.keys(data)[0]);
    const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })

    const handleCategory = (category: string) => {
        setActiveCategory(category);
    }

    return (
        <div className="w-full min-h-[400px] flex items-start bg-[rgba(249,249,249,1)] py-12">
            {/* desktop */}
            <div className="w-11/12 sm:w-10/12 max-w-[1280px] min-h-[400px] hidden md:flex flex-row gap-4 lg:gap-10 mx-auto">
                <div className=" md:w-[30%] shrink-0 flex flex-col gap-4 lg:gap-6">
                    {
                        Object.keys(data).map(category => {
                            return (
                                <button
                                key={category}
                                className={`${ activeCatergory === category ? 'bg-[rgba(0,168,73,0.1)] text-[rgba(0,168,73,1)]' : 'bg-white text-[rgba(15,23,42,1)]' } text-start text-lg px-6 py-4 rounded-tl-2xl rounded-br-2xl`}
                                type="button"
                                onClick={() => handleCategory(category)}>
                                    { category }
                                </button>
                            )
                        })
                    }
                </div>
                <div className="w-full">
                    {
                        data[activeCatergory].map((sub, i) => {
                            return (
                                <div key={`sub-${i}`} className="pb-8">
                                    { sub.title !== '' && <h5 className="text-[#015341] text-lg font-semibold pb-6">{ sub.title }</h5> }
                                    {
                                        sub.accordions.map((accordionData, j) => {
                                            return (
                                                <Accordion key={`acc-${j}`} data={accordionData} expanded={i===0 && j===0}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* Mobile */}
            <div className="w-11/12 flex md:hidden flex-row gap-6 mx-auto">
                <div className="w-full flex flex-col gap-6">
                    {
                        Object.keys(data).map(category => {
                            return (
                                <MasterAccordion
                                key={category}
                                title={category}
                                children={
                                    <div>
                                    {
                                        data[category].map((sub, i) => {
                                            return (
                                                <div key={`sub-${i}`} className="pb-8">
                                                    { sub.title !== '' && <h5 className="text-[#015341] text-lg font-semibold pb-6">{ sub.title }</h5> }
                                                    {
                                                        sub.accordions.map((accordionData, j) => {
                                                            return (
                                                                <Accordion key={`acc-${j}`} data={accordionData} expanded={ isDesktop && (i===0 && j===0) }/>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                }
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}