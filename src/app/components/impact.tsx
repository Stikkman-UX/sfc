import { OrangeButton } from "../common/orangebutton"
import Image from "next/image"
import { ArrowRightSvg, DropSvg, StatsSvg, TreeSvg } from "./commonsvg"

export const Impact = () => {

    return (
        <section className="bg-[rgba(0,89,67,1)] py-8 md:py-14">
            <div className="w-11/12 md:w-10/12 flex flex-col-reverse lg:flex-row justify-between items-stretch gap-4 md:gap-12 lg:gap-20 mx-auto">
                <div className="flex flex-col justify-between items-start gap-10 pt-10">
                    <div className="space-y-3 md:space-y-6">
                        <h3 className="text-[22px] md:text-[32px] text-[rgba(0,168,73,1)] leading-8">
                            Environmental impact {" "}
                            <span className="text-white">commitment</span>
                        </h3>
                        <p className="font-normal text-white md:text-lg leading-6">
                        At SFC, we’re committed to pioneering sustainable solutions in environmental technology. From minimizing waste to optimizing energy use, sustainability is integrated into every aspect of our operations. We actively engage in environmental education and community outreach, inspiring positive change for a greener future.
                        </p>
                        <p className="font-normal text-white md:text-lg leading-6">
                        Sustainability is not just a goal; it’s a guiding principle that shapes our vision for a brighter, greener future. Together, we’re not only advancing technology; we’re building a world where innovation and environmental stewardship go hand in hand, ensuring a sustainable legacy for generations to come.
                        </p>
                        <div className="flex items-center gap-3">
                            <OrangeButton text="Learn more"/>
                            <button
                            className="flex items-center gap-2 text-white whitespace-nowrap border border-[rgba(0,168,73,1)] rounded-full px-4 md:px-5 py-2.5">
                                Sustainability report
                                <ArrowRightSvg/>
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex justify-between gap-8 font-inter text-center md:text-start mx-auto lg:mx-0">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <StatsSvg/>
                            <span className="text-lg md:text-2xl font-bold text-[rgba(0,168,73,1)]">Zero</span>
                            <span className="text-white font-normal text-sm">Environment violations</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <DropSvg/>
                            <span className="text-lg md:text-2xl font-bold text-[rgba(0,168,73,1)]">3.6B</span>
                            <span className="text-white font-normal text-sm">Liters treated annually</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <TreeSvg/>
                            <span className="text-lg md:text-2xl font-bold text-[rgba(0,168,73,1)]">15</span>
                            <span className="text-white font-normal text-sm">Green certifications</span>
                        </div>
                    </div>
                </div>
                <Image
                className="w-full md:max-w-[500px] lg:max-w-none object-cover mx-auto"
                src="/landing/impact.png"
                alt="SFC"
                width={100}
                height={60}
                />
            </div>
        </section>
    )
}