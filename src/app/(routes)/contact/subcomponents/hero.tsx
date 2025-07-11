import { OrangeButton } from "@/app/common/orangebutton"
import { FormComp } from "./form"
import { ArrowRightGreenSvg } from "@/app/components/commonsvg"

export const Hero = () => {

    return (
        <div className="w-11/12 sm:w-10/12 max-w-[1240px] flex flex-col xl:flex-row justify-between items-center xl:items-start gap-16 mx-auto">
            <div className="w-full flex flex-col gap-6 pt-16">
                <h2 className="max-w-[500px] lg:max-w-[700px] font-medium text-[38px] lg:text-[50px] text-[rgba(0,89,69,1)] leading-[56px] text-start">
                    Let's build something transformative{" "}
                    <span className="text-[rgba(0,168,73,1)]">
                    Together.
                    </span>
                </h2>
                <div className="w-full xl:w-fit flex items-center gap-3">
                    <OrangeButton text="Call now" fullWidth/>
                    <button
                    className="flex-1 xl:w-fit flex justify-center items-center gap-2 text-[rgba(0,168,73,1)] whitespace-nowrap border border-[rgba(0,168,73,1)] rounded-full px-4 md:px-5 py-2.5">
                        Email
                        <ArrowRightGreenSvg/>
                    </button>
                </div>
            </div>
            <FormComp/>
        </div>
    )
}