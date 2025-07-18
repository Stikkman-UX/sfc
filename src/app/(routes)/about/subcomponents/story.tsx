import { OrangeButton } from "@/app/common/orangebutton"
import Image from "next/image"

export const Story = () => {

    return (
        <div className="w-11/12 sm:w-10/12 flex flex-col items-center gap-8 md:text-center mx-auto">
            <Image
            className="w-full md:min-h-[200px] object-cover"
            width={400}
            height={300}
            src="/about/about.png"
            alt="About the team"/>
            <div className="lg:w-3/5 max-w-[1000px] md:space-y-2 mx-auto md:pt-20">
                <h4 className="w-full text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9">
                    Our{" "}
                    <span className="text-[rgba(25,169,72,1)]">
                        Story
                    </span>
                </h4>
                <p className=" md:text-lg font-normal text-[rgba(74,85,101,1)]">
                    Founded in 2008 with a bold vision to transform India's water infrastructure, SFC Environment Technology has grown from a startup to the nation's leading provider of advanced biological wastewater treatment solutions.Our breakthrough C-Tech technology represents years of R&D investment and real-world optimization. Today, we're proud to power over 120 treatment facilities across 15+ states, treating more than 200 million liters of wastewater daily.
                </p>
            </div>
            <OrangeButton text="Our Mission & Vision"/>
        </div>
    )
}