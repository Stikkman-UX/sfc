import Image from "next/image";
import { DateSvg, DropSvg, LocationSvg, MedalSvg, PointSvg, ViewsSvg } from "./commonsvg";

interface SuccessRateCardProps {
    image: string;
    title: string;
    location: string;
    populationServed: string;
    efficiencyRate: string;
    commissioned: string;
    desc: string;
    points: string[];
}

export const Success = () => {

    const cards = [
        {
            image: "/landing/success.jpg",
            title: "Bangalore Tech Park Facility",
            location: "Bangalore, karnataka",
            populationServed: "100k",
            efficiencyRate: "99.5%",
            commissioned: "2022",
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
            location: "Gurgaon, Haryana",
            populationServed: "100k",
            efficiencyRate: "99.5%",
            commissioned: "2022",
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
            location: "Bangalore, karnataka",
            populationServed: "100k",
            efficiencyRate: "99.5%",
            commissioned: "2022",
            desc: "Advanced treatment system for major IT corridor, enabling sustainable development in India's Silicon Valley.",
            points: [
                "Smart monitoring intergration",
                "Real-time quality reporting",
                "Award-winning sustainabolity metrics"
            ]
        },
    ]

    const SuccessRateCard = ({ data }: { data: SuccessRateCardProps }) => {
        const { image, title, location, populationServed, efficiencyRate, commissioned, desc, points } = data;

        return (
            <div className="w-full sm:w-[340px] md:w-[420px] shrink-0 flex flex-col bg-[rgba(249,249,249,1)] rounded-tl-[14px] md:rounded-tl-2xl rounded-br-[14px] md:rounded-br-2xl overflow-hidden">
                <div className="relative w-full">
                    <Image
                    className="relative max-h-[140px] md:max-h-none w-full object-cover z-10"
                    src={image}
                    alt="SFC"
                    width={100}
                    height={60}
                    />
                    <div className="absolute bottom-0  text-white w-full h-1/2 md:h-1/3 flex flex-col justify-end items-end bg-gradient-to-t from-black to-black/0 px-6 md:px-10 pb-3 z-20">
                        <span className="font-bold text-[21px] md:text-2xl">25 MLD</span>
                        <span className="font-normal text-[10.5px] md:text-xs">Daily capacity</span>
                    </div>
                </div>
                <div className="space-y-8 px-4 md:px-6 py-4">
                    <div className="flex gap-1.5">
                        <div className="h-fit bg-[rgba(0,89,69,0.1)] rounded-lg p-2">
                            <DropSvg/>
                        </div>
                        <div className="">
                            <h6 className="font-bold text-[rgba(16,24,40,1)]">
                                { title }
                            </h6>
                            <span className="flex items-center gap-2 font-normal text-xs md:text-sm text-[rgba(74,85,101,1)]">
                                <LocationSvg/>
                                { location }
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex flex-col items-start gap-2">
                            <ViewsSvg/>
                            <span className="font-semibold text-sm md:text-base text-[rgba(16,24,40,0.73)]">{ populationServed }</span>
                            <span className="text-[rgba(74,85,101,1)] font-normal text-[10.5px] md:text-xs">Population serced</span>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <MedalSvg/>
                            <span className="font-semibold text-sm md:text-base text-[rgba(16,24,40,0.73)]">{ efficiencyRate }</span>
                            <span className="text-[rgba(74,85,101,1)] font-normal text-[10.5px] md:text-xs">Efficiency rate</span>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <DateSvg/>
                            <span className="font-semibold text-sm md:text-base text-[rgba(16,24,40,0.73)]">{ commissioned }</span>
                            <span className="text-[rgba(74,85,101,1)] font-normal text-[10.5px] md:text-xs">commissioned</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="hidden md:block text-[rgba(74,85,101,1)] text-sm leading-[22px] font-normal">
                            { desc }
                        </p>
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
            </div>
        )
    }

    return (
        <section className="gsap-fade-in space-y-6 md:space-y-16 pt-20 pb-6">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="md:w-2/3 lg:w-1/2 space-y-4">
                    <h4 className="w-11/12 md:w-2/3 text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-6 md:leading-9">
                        <span className="text-[rgba(25,169,72,1)]">Proven success</span> across India's major cities
                    </h4>
                    <p className="md:text-lg font-normal text-[rgba(74,85,101,1)]">
                        Our C-Tech technology has transformed water treatment across India's most demanding environments, delivering consistent results and measurable impact.
                    </p>
                </div>
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