'use client'
import { DownloadSvg, ResSvg1 } from "@/app/components/commonsvg";

interface ResCardProps {
    data: {
        icon: React.JSX.Element;
        title: string;
        type: string;
        mb: string;
    }
}

export const Resources = () => {

    const cards = [
        {
            icon: <ResSvg1/>,
            title: "Technical Brochure",
            type: "PDF",
            mb: "2.4",
        },
        {
            icon: <ResSvg1/>,
            title: "Installation Manual",
            type: "PDF",
            mb: "8.2",
        },
        {
            icon: <ResSvg1/>,
            title: "Case Studies",
            type: "PDF",
            mb: "5.1",
        },
        {
            icon: <ResSvg1/>,
            title: "Performance Data",
            type: "Excel",
            mb: "1.8",
        },
    ]

    const handleDownload = () => {

    }

    const ResCard = ({ data }: ResCardProps) => {
        const { icon, title, type, mb } = data;

        return (
            <div className="w-[200px] shrink-0 md:flex-1 md:w-full h-full flex flex-col items-center gap-2 bg-[rgba(249,249,249,1)] rounded-2xl px-4 py-6">
                <div className="bg-[rgba(0,168,73,0.1)] rounded-full p-3">
                    { icon }
                </div>
                <span className="font-inter font-normal text-[rgba(0,89,69,1)] mt-2">{ title }</span>
                <span className="font-inter font-normal text-sm text-[rgba(74,85,101,1)] mb-2">
                    { type }{" "}
                    &#9679;{" "}
                    { mb }{" "}
                    MB
                </span>
                <button
                className="flex items-center gap-2 text-[rgba(0,168,73,1)] text-sm md:text-base border border-[rgba(0,168,73,1)] rounded-xl px-2 md:px-3 py-1 md:py-1.5"
                type="button"
                onClick={handleDownload}>
                    <DownloadSvg/>
                    Download
                </button>
            </div>
        )
    }

    return (
        <section className="space-y-12 my-20 sm:py-10">
            <div className="w-11/12 md:w-[900px] md:space-y-2 md:text-center mx-auto">
                <h2 className="md:w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)] mx-auto">
                    <span className="text-[rgba(0,89,67,1)]">Resources &</span> Downloads
                </h2>
                <p className="font-normal md:text-lg text-[rgba(74,85,101,1)] mx-auto">
                    Access technical documentation, case studies, and implementation guides.
                </p>
            </div>
            <div className="disable-scrollbar w-11/12 md:w-10/12 flex justify-between gap-4 md:gap-6 mx-auto overflow-x-auto">
                {
                    cards.map((card, i) => {
                        return <ResCard key={i} data={card}/>
                    })
                }
            </div>
        </section>
    )
}