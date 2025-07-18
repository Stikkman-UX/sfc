import { OrangeButton } from "../common/orangebutton"
import MainBG from "../../../public/landing/web-banner.jpg"

export const Hero = () => {

    return (
    <div
    className="relative text-black font-medium space-y-20 md:space-y-40 pb-20 md:py-40 
                bg-no-repeat bg-cover bg-top min-h-screen main-banner xl-py-10"
    style={{ backgroundImage: `url(${MainBG.src})` }}
    >         
            <div className="relative w-11/12 md:w-auto flex flex-col items-start md:items-center space-y-6 md:space-y-8 pt-30 md:pt-0 z-20 mx-auto md:mx-0">
                <h1 className=" md:w-[600px] mx-auto text-start md:text-center text-[32px] md:text-[50px] leading-12 md:leading-14 text-[rgba(0,89,67,1)]">
                    Your wastewater vision is our <span className="text-[rgba(25,169,72,1)]">responsibility</span>
                </h1>
                <OrangeButton text="Explore our technology"/>
            </div>
        </div>
    )
}