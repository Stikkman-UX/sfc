import { OrangeButton } from "../common/orangebutton"
import Image from "next/image"
import { ArrowRightSvg, DropSvg, StatsSvg, TreeSvg } from "./commonsvg"

export const Impact = () => {

    return (
        <section className="bg-[rgba(0,89,67,1)] py-14">
            <div className="w-10/12 flex justify-between items-stretch gap-20 mx-auto">
                <div className="flex flex-col justify-between items-start pt-10">
                    <div className="space-y-6">
                        <h3 className="text-[32px] text-[rgba(0,168,73,1)] leading-8">
                            Environmental impact {" "}
                            <span className="text-white">commitment</span>
                        </h3>
                        <p className="font-normal text-white text-lg leading-6">
                            We measure success not just by treatment efficiency, but by our positive environmental impact. Every facility we power contributes to cleaner water, reduced carbon emissions, and sustainable community development.
                        </p>
                        <div className="flex items-center gap-3">
                            <OrangeButton text="Sustainability report"/>
                            <button
                            className="flex items-center gap-2 text-white border border-[rgba(0,168,73,1)] rounded-full px-6 py-3">
                                Sustainability report
                                <ArrowRightSvg/>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-8 font-inter">
                        <div className="flex flex-col items-start gap-2">
                            <StatsSvg/>
                            <span className="text-2xl font-bold text-[rgba(0,168,73,1)]">Zero</span>
                            <span className="text-white font-normal text-sm">Environment violations</span>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <DropSvg/>
                            <span className="text-2xl font-bold text-[rgba(0,168,73,1)]">3.6B</span>
                            <span className="text-white font-normal text-sm">Liters treated annually</span>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <TreeSvg/>
                            <span className="text-2xl font-bold text-[rgba(0,168,73,1)]">15</span>
                            <span className="text-white font-normal text-sm">Green certifications</span>
                        </div>
                    </div>
                </div>
                <Image
                className="w-full object-cover"
                src="/landing/impact.png"
                alt="SFC"
                width={100}
                height={60}
                />
            </div>
        </section>
    )
}