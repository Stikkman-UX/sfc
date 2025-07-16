import Image from "next/image"

interface TeamCardProps {
    src: string;
    name: string;
    desg: string;
}

export const ChangeMakers = () => {

    const TeamCard = ({ src, name, desg }: TeamCardProps) => {
        return (
            <div className="min-w-[180px] rounded-tl-xl rounded-br-xl overflow-hidden">
                <Image
                className="w-[500px] shrink-0 min-h-[200px] object-cover"
                width={400}
                height={300}
                src={src}
                alt={name}/>
                {/* <div className="absolute border border-red-500 bottom-0 w-full flex justify-center items-center gap-3 h-10 text-white z-20">
                    <span className="">{name}</span>
                    <span className="">{desg}</span>
                </div> */}
            </div>
        )
    }

    return (
        <div className="w-11/12 sm:w-10/12 flex flex-col items-center gap-8 md:text-center mx-auto pt-6 pb-20">
            <div className="lg:w-3/5 max-w-[1000px] md:space-y-2 mx-auto">
                <h4 className="w-full text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9">
                    Meet the{" "}
                    <span className="text-[rgba(25,169,72,1)]">
                        changemakers
                    </span>
                </h4>
                <p className=" md:text-lg font-normal text-[rgba(74,85,101,1)]">
                    Experienced leaders driving innovation and excellence in India's water infrastructure sector.
                </p>
            </div>
            <div className="w-full flex items-center gap-8 lg:gap-14 bg-[linear-gradient(107.11deg,#00A849_0.83%,#005945_87.94%)] rounded-tl-[150px] rounded-br-[150px] text-start px-6 py-5">
                <Image
                className="w-[500px] shrink-0 min-h-[200px] object-cover"
                width={400}
                height={300}
                src="/about/change.png"
                alt="Amit Patel"/>
                <p className="font-normal text-[28px] text-white">
                    "When we founded SFC in 2008, India was facing an unprecedented water crisis. Traditional treatment technologies were failing to meet the scale and complexity of our nation's needs.
                    <br/>
                    <br/>
                    We knew that <span className="font-semibold">revolutionary change required revolutionary thinking.</span>"
                </p>
            </div>
            <div>
                <h4 className="w-fit text-[rgba(61,61,61,1)] text-lg md:mx-auto mt-4">
                    Leadership Team
                </h4>
                <div className="w-full flex gap-4 lg:gap-7 mt-8">
                    <TeamCard
                    src="/about/team.png"
                    name="Rajesh Kumar"
                    desg="Chief Executive officer"/>
                    <TeamCard
                    src="/about/team.png"
                    name="Rajesh Kumar"
                    desg="Chief Executive officer"/>
                    <TeamCard
                    src="/about/team.png"
                    name="Rajesh Kumar"
                    desg="Chief Executive officer"/>
                    <TeamCard
                    src="/about/team.png"
                    name="Rajesh Kumar"
                    desg="Chief Executive officer"/>
                </div>
            </div>
        </div>
    )
}