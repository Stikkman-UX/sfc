import { ResSvg1, ResSvg2, ResSvg3, ResSvg4 } from "@/app/components/commonsvg";

interface ValueCardProps {
    data: {
        logo: React.JSX.Element;
        title: string;
        desc: string;
    }
}

export const Values = () => {

    const cards = [
        {
            logo: <ResSvg1/>,
            title: "Innovation",
            desc: "Continuously advancing wastewater treatment technology",
        },
        {
            logo: <ResSvg2/>,
            title: "Sustainability",
            desc: "Environmental responsibility in every solution we deliver",
        },
        {
            logo: <ResSvg3/>,
            title: "Excellence",
            desc: "Uncompromising quality standards and performance",
        },
        {
            logo: <ResSvg4/>,
            title: "Partnership",
            desc: "Collaborative approach with clients and stakeholders",
        },
    ]

    const ValueCard = ({ data }: ValueCardProps) => {
        const { logo, title, desc } = data;

            return (
                <div className="shrink-0 md:flex-1 md:w-full min-h-full h-full flex flex-col items-center gap-2 bg-[rgba(249,249,249,1)] rounded-2xl px-4 py-6">
                    <div className="bg-[rgba(0,168,73,0.1)] rounded-full p-3">
                        { logo }
                    </div>
                    <span className=" font-normal text-[rgba(0,89,69,1)] mt-2">
                        { title }
                    </span>
                    <span className=" font-normal text-[rgba(0,89,69,1)] mt-2">
                        { desc }
                    </span>
                </div>
            )
        }

    return (
        <div className="gsap-fade-in w-11/12 sm:w-10/12 flex flex-col items-center gap-8 text-start md:text-center mx-auto pb-20">
            <div className="lg:w-3/5 max-w-[1000px] md:space-y-2 mx-auto pt-20">
                <h4 className="w-full text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9">
                    Our{" "}
                    <span className="text-[rgba(25,169,72,1)]">
                        Values
                    </span>
                </h4>
                <p className="w-11/12 md:w-[550px] md:text-lg font-normal text-[rgba(74,85,101,1)] md:mx-auto">
                    The principles that guide our decisions and drive our commitment to excellence.
                </p>
            </div>
            <div className="disable-scrollbar w-full h-auto flex justify-between gap-4 md:gap-6 mx-auto overflow-x-auto">
                {
                    cards.map((card, i) => {
                        return <ValueCard key={i} data={card}/>
                    })
                }
            </div>
        </div>
    )
}