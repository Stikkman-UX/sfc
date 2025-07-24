'use client'
import Image from "next/image"
import gsap from "gsap";

interface TeamCardProps {
    src: string;
    name: string;
}

export const ChangeMakers = () => {

    const cards = [
        {
            src: "/about/team-1.webp",
            name: "Chandrakant Vallabhaji Gogri"
        },
        {
            src: "/about/team-2.webp",
            name: "Dilip Damodar Karambelkar"
        },
        {
            src: "/about/team-3.webp",
            name: "Nandkishor Trivikram Joshi"
        },
        {
            src: "/about/team-4.webp",
            name: "Neha Rajen Gada"
        },
        {
            src: "/about/team-5.webp",
            name: "Saketchandrasingh Pratapsingh Dhandoriya"
        },
        {
            src: "/about/team-6.webp",
            name: "Sandeep Sudhakar Asolkar"
        },
        {
            src: "/about/team-7.webp",
            name: "Sarvesh Kumar Garg"
        },
        {
            src: "/about/team-8.webp",
            name: "Satish Chandrashekhar Deshpande"
        },
    ];

    const TeamCard = ({ src, name }: TeamCardProps) => {
        return (
            <div className="relative min-w-[280px] rounded-tl-xl rounded-br-xl overflow-hidden">
                <Image
                className="w-[500px] shrink-0 min-h-[200px] object-cover"
                width={400}
                height={300}
                src={src}
                alt={name}/>
                <div className="absolute bottom-0 w-full h-16 flex justify-center items-end gap-3 bg-gradient-to-t from-black to-black/0 text-white leading-5 px-2 pb-3 z-20">
                    <span className="">{name}</span>
                </div>
            </div>
        )
    }

    const TeamCarousel = () => {
        return (
            <div className="disable-scrollbar w-full flex gap-4 lg:gap-7 mt-8 overflow-x-auto px-4 sm:px-16 lg:px-28">
                {cards.map((card, index) => (
                    <TeamCard
                        key={index}
                        src={card.src}
                        name={card.name}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className="gsap-fade-in flex flex-col items-center gap-8 md:text-center md:pt-6 md:pb-20 pt-4 pb-8">
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
            <div className="w-11/12 sm:w-10/12 max-w-[1280px] flex flex-col md:flex-row items-center gap-8 lg:gap-14 bg-[linear-gradient(107.11deg,#00A849_0.83%,#005945_87.94%)] rounded-tl-[112px] rounded-br-[112px] md:rounded-tl-[150px] md:rounded-br-[150px] text-start px-6 py-5">
                <Image
                className="w-[500px] shrink-0 min-h-[200px] rounded-tl-[112px] rounded-br-[112px] md:rounded-tl-[140px] md:rounded-br-[140px] object-cover"
                width={400}
                height={300}
                src="/about/team-6.webp"
                alt="Amit Patel"/>
                <p className="font-normal text-[22px] md:text-[28px] text-white pe-8">
                    "When we founded SFC in 2008, India was facing an unprecedented water crisis. Traditional treatment technologies were failing to meet the scale and complexity of our nation's needs.
                    <br/>
                    <br/>
                    We knew that <span className="font-semibold">revolutionary change required revolutionary thinking.</span>"
                </p>
            </div>
            <div className="w-full">
                <h4 className="w-fit text-[rgba(61,61,61,1)] text-lg md:mx-auto px-4 md:px-0 mt-4">
                    Board of Directors
                </h4>
                <TeamCarousel/>
            </div>
        </div>
    )
}