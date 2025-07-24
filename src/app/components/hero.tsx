import { OrangeButton } from "../common/orangebutton"
import Image from "next/image"

export const Hero = () => {

    return (
    // <div
    // className="relative text-black font-medium space-y-20 md:space-y-40 pb-20 md:py-40 
    //             bg-no-repeat bg-cover bg-top min-h-screen main-banner bg-[url('/landing/banner.jpg')] xl-py-10"
    // >         
    <div
    className="relative text-black font-medium space-y-20 md:space-y-40 pb-20 md:py-40 min-h-screen main-banner xl-py-10"
    >
        <div className="absolute h-screen top-0 left-0 w-full overflow-hidden -z-10">
            <Image
            className={`w-full h-screen object-cover`}
            src="/landing/final-banner.jpg"
            alt="SFC"
            width={1000}
            height={900}
            />
            <div className="w-[480px] absolute left-1/2 -translate-x-1/2 bottom-20">
                <Image
                className={`w-full object-cover`}
                src="/landing/pngbanner.png"
                alt="SFC"
                width={1000}
                height={900}
            />
            </div>
        </div>   
        <div className="relative w-11/12 md:w-auto flex flex-col items-start md:items-center space-y-6 md:space-y-8 pt-30 md:pt-0 z-20 mx-auto md:mx-0">
            <h1 className=" md:w-[600px] mx-auto text-start md:text-center text-[32px] md:text-[50px] leading-12 md:leading-14 text-[rgba(0,89,67,1)]">
                Your wastewater vision is our <span className="text-[rgba(25,169,72,1)]">responsibility</span>
            </h1>
            <OrangeButton text="Explore our technology"/>
        </div>
    </div>
    )
}