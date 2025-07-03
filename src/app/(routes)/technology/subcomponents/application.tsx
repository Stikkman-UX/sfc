import { PointSvg } from "@/app/components/commonsvg";
import Image from "next/image";

interface SuccessRateCardProps {
    image: string;
    tag: string;
    title: string;
    desc: string;
    points: string[];
}

export const Application = () => {

    const cards = [
        {
            image: "/landing/success.jpg",
            title: "Bangalore Tech Park Facility",
            tag: '1-100 MLD',
            desc: "Advanced treatment system for major IT corridor, enabling sustainable development in India's Silicon Valley.",
            points: [
                "Smart monitoring intergration",
                "Real-time quality reporting",
                "Award-winning sustainabolity metrics"
            ]
        },
        {
            image: "/landing/success.jpg",
            title: "Delhi Industrial Complex",
            tag: '1-100 MLD',
            desc: "Advanced treatment system for major IT corridor, enabling sustainable development in India's Silicon Valley.",
            points: [
                "Smart monitoring intergration",
                "Real-time quality reporting",
                "Award-winning sustainabolity metrics"
            ]
        },
        {
            image: "/landing/success.jpg",
            title: "Bangalore Tech Park Facility",
            tag: '1-100 MLD',
            desc: "Advanced treatment system for major IT corridor, enabling sustainable development in India's Silicon Valley.",
            points: [
                "Smart monitoring intergration",
                "Real-time quality reporting",
                "Award-winning sustainabolity metrics"
            ]
        },
    ]

    const SuccessRateCard = ({ data }: { data: SuccessRateCardProps }) => {
        const { image, tag, title, desc, points } = data;

        return (
            <div className="shrink-0 w-[340px] md:w-[450px] flex flex-col bg-[rgba(249,249,249,1)] rounded-tl-[14px] md:rounded-tl-2xl rounded-br-[14px] md:rounded-br-2xl overflow-hidden">
                <div className="relative w-full">
                    <Image
                    className="relative max-h-[140px] md:max-h-none w-full object-cover z-10"
                    src={image}
                    alt="SFC"
                    width={100}
                    height={60}
                    />
                    <span className="absolute bottom-4 left-4 bg-[rgba(245,126,37,1)] font-inter text-white text-xs rounded-full px-2 py-0.5 z-20">
                        { tag }
                    </span>
                </div>
                <div className="space-y-5 md:space-y-8 px-4 md:px-6 py-6">
                    <div className="">
                        <h4 className="font-normal text-lg md:text-[22px] text-[rgba(0,89,69,1)]">
                            { title }
                        </h4>
                        <p className="hidden md:block text-[rgba(74,85,101,1)] text-sm leading-[22px] font-normal">
                            { desc }
                        </p>
                    </div>
                    <ol className="space-y-1">
                        {
                            points.map((point, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <PointSvg/>
                                    <span className="font-normal text-xs md:text-sm text-[rgba(54,65,83,1)]">{ point }</span>
                                </div>
                            ))
                        }                      
                    </ol>
                </div>
            </div>
        )
    }

    return (
        <section className="mb-20">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <h2 className="w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)]">
                    <span className="text-[rgba(0,89,67,1)]">Application & </span> Use Cases
                </h2>
                <p className=" md:w-[500px] font-normal md:text-lg text-[rgba(74,85,101,1)] pb-20">
                    C-Tech technology adapts to diverse wastewater treatment needs across industries and communities.
                </p>
            </div>
            <div className="disable-scrollbar flex lg:justify-center gap-10 overflow-x-auto px-4 sm:px-7 md:px-16 lg:px-0">
                {
                    cards.map((cardData, i) => {
                        return <SuccessRateCard key={i} data={cardData} />
                    })
                }
            </div>
        </section>
    )
}