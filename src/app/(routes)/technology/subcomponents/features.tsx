'use client'
import { ShieldSvg, DropSvg } from "@/app/components/commonsvg";
import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export const Features = () => {
    const [activeBtn, setActiveBtn] = useState('feature-1');

    const data = {
        'feature-1': {
            icon: <ShieldSvg/>,
            title: "Decanter",
            desc: "The C-Tech decanter removes treated wastewater supernatant with precision, ensuring no inflow, floating matter, or disturbed solids. VFD-controlled for accuracy, it prepares the basin for seamless recycling."
        },
        'feature-2': {
            icon: <DropSvg/>,
            title: "Diffusers",
            desc: " Fine bubble polyurethane membrane diffusers ensure efficient oxygen transfer, with adjustable air grids for uniform distribution. Manufactured in-house under EDI Inc. USA’s license, we provide complete systems and replacement parts."
        },
        'feature-3': {
            icon: <ShieldSvg/>,
            title: "Programmer login controller",
            desc: "Our in-house designed PLCs automate STP operations, optimizing processes like pumping, aeration, and filtration for efficiency, consistent quality, real-time monitoring, and reduced manpower, ensuring sustainable wastewater treatment compliance. "
        },
        'feature-4': {
            icon: <DropSvg/>,
            title: "Biological selector zone",
            desc: "C-Tech's multi-cell biological selector distinguishes it from others. It uses Return Activated Sludge (RAS) pumps to recycle Mixed Liquor Suspended Solids. This ensures excellent sludge settling under various conditions. A Sludge Volume Index (SVI) as low as 40 mL/g shows its effectiveness. The anaerobic conditions also aid in phosphorous removal, improving wastewater treatment."
        },
        'feature-5': {
            icon: <ShieldSvg/>,
            title: "Biological selector zone",
            desc: "C-Tech's multi-cell biological selector distinguishes it from others. It uses Return Activated Sludge (RAS) pumps to recycle Mixed Liquor Suspended Solids. This ensures excellent sludge settling under various conditions. A Sludge Volume Index (SVI) as low as 40 mL/g shows its effectiveness. The anaerobic conditions also aid in phosphorous removal, improving wastewater treatment."
        },
    };

    const handleFeature = (id: string) => {
        setActiveBtn(id);
    }

    const FeatureBtn = ({ id, text, icon }: { id: string; text: string; icon: React.JSX.Element }) => {
        return (
            <button
            className={`${ activeBtn === id ? 'bg-[rgba(0,168,73,0.1)] text-[rgba(0,168,73,1)] px-4 md:px-8' : 'text-[rgba(15,23,42,1)] px-4' } w-fit flex gap-2 items-center text-sm md:text-lg text-start whitespace-nowrap transition-all duration-300 rounded-tl-2xl rounded-br-2xl py-2 md:py-4`}
            onClick={ () => handleFeature(id) }
            >
                <div className={`${ activeBtn === id ? 'bg-[rgba(0,168,73,1)]' : 'bg-[rgba(243,244,246,1)]' } p-2 md:p-3 rounded-xl md:rounded-2xl`}>
                    { icon }
                </div>
                { text }
            </button>
        )
    }

    useEffect(() => {
        const scrollTrigger = {
            trigger: '.feature-border',
            start: "top 50%",
        };

        gsap.to(
            '.feature-border-1',
            {
                scale: 1.26,
                duration: 1,
                scrollTrigger
            }
        );
        gsap.to(
            '.feature-border-2',
            {
                scale: 1.18,
                duration: 1,
                scrollTrigger
            }
        );
        gsap.to(
            '.feature-border-3',
            {
                scale: 1.08,
                duration: 1,
                scrollTrigger
            }
        );

    }, [])

    return (
        <section className="mb-40">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <h2 className="w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)]">
                    <span className="text-[rgba(0,89,67,1)]">Key components </span> of C-Tech
                </h2>
                <p className="w-full md:w-[500px] font-normal md:text-lg text-[rgba(74,85,101,1)] pb-20">
                    Comprehensive equipment package designed for optimal performance and longevity.
                </p>
                <div className="flex-1 flex flex-col-reverse md:flex-row justify-between items-center gap-2 md:pe-10">
                    <div className="disable-scrollbar w-full flex md:flex-col gap-4 overflow-x-auto py-6 md:py-0">
                        <FeatureBtn id="feature-1" text="Decanter" icon={<ShieldSvg/>}/>
                        <FeatureBtn id="feature-2" text="Diffusers" icon={<ShieldSvg/>}/>
                        <FeatureBtn id="feature-3" text="Programmer login controller" icon={<ShieldSvg/>}/>
                        {/* <FeatureBtn id="feature-4" text="Quality Assurance" icon={<ShieldSvg/>}/> */}
                    </div>
                    <div className="feature-border relative shrink-0 w-full md:w-1/2 max-w-[500px] h-fit">
                        <div className="w-full relative rounded-tl-[115px] md:rounded-tl-[125px] rounded-br-[115px] md:rounded-br-[125px] overflow-hidden z-50">
                            <Image
                            className="w-full object-cover min-h-[370px] md:h-[450px] max-h-[450px] rounded-tl-[115px] md:rounded-tl-[125px] rounded-br-[115px] md:rounded-br-[125px] border-b-8 border-r-8 border-[rgba(245,126,37,1)]"
                            src="/landing/hero.jpg"
                            alt="SFC"
                            width={100}
                            height={60}
                            />
                            <div className="absolute bottom-2 right-2 w-full h-fit flex flex-col gap-2 bg-gradient-to-t from-black to-black/0 text-white rounded-br-[115px] md:rounded-br-[125px] font-normal ps-6 md:ps-8 pe-8 pb-8 md:pb-4">
                                <div className="w-fit bg-[rgba(0,168,73,1)] rounded-full p-4">{ data[activeBtn as keyof typeof data].icon }</div>
                                <span>{ data[activeBtn as keyof typeof data].title }</span>
                                <p className="text-xs">{ data[activeBtn as keyof typeof data].desc }</p>
                            </div>
                        </div>
                        <div className="feature-border-1 hidden md:block absolute inset-0 w-full h-full rounded-tl-[125px] rounded-br-[125px] bg-[rgba(0,168,73,0.1)] z-20"></div>
                        <div className="feature-border-2 hidden md:block absolute inset-0 w-full h-full rounded-tl-[125px] rounded-br-[125px] bg-[rgba(0,168,73,0.3)] z-30"></div>
                        <div className="feature-border-3 hidden md:block absolute inset-0 w-full h-full rounded-tl-[125px] rounded-br-[125px] bg-[rgba(0,168,73,0.5)] z-40"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}