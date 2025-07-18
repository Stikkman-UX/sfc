import { OrangeButton } from "@/app/common/orangebutton"
import { ArrowRightGreenSvg } from "@/app/components/commonsvg"

export const Hero = () => {
    return (
        <div className="w-11/12 sm:w-10/12 max-w-[600px] lg:max-w-[700px] flex flex-col items-center gap-4 sm:gap-6 text-start sm:text-center mt-30 md:mt-48 mb-20 sm:mt-52 sm:mb-40 mx-auto">
            <h2 className="font-medium text-[30px] lg:text-[50px] text-[rgba(0,89,69,1)] leading-[50px] lg:leading-[56px] lg:text-center mx-auto">
                <span className="text-[rgba(0,168,73,1)]">
                    Perspectives{" "}
                </span>
                that move the industry forward
            </h2>
            <span className=" font-normal text-lg leading-7 text-[rgba(77,77,77,0.7)]">
               <b>Insights that shape the future of Wastewater Technology</b><br></br>
Where innovation, research, perspectives and thought leadership drive change. 

            </span>
            <div className="w-full xl:w-fit flex flex-col sm:flex-row items-center gap-3 pt-6">
                <OrangeButton text="Explore Insights" fullWidth/>
                <button
                className="flex-1 w-full g-bordered-btn sm:w-fit flex justify-center items-center gap-2 text-[rgba(0,168,73,1)] whitespace-nowrap border border-[rgba(0,168,73,1)] rounded-full px-4 md:px-5 py-2.5">
                    Download Resources
                    <ArrowRightGreenSvg/>
                </button>
            </div>
        </div>
    )
}