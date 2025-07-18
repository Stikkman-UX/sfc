import Image from "next/image"

export const Hero = () => {
    return (
        <div className="w-11/12 sm:w-10/12 max-w-[700px] lg:max-w-[800px] flex flex-col items-center gap-4 sm:gap-6 text-start sm:text-center mt-48 mb-6 sm:mt-52 sm:mb-10 mx-auto">
            <h2 className="font-medium text-[38px] lg:text-[50px] text-[rgba(0,89,69,1)] leading-[50px] lg:leading-[56px] lg:text-center mx-auto">
                Behind Every Clean Drop, There's {" "}
                <span className="text-[rgba(0,168,73,1)]">
                    a Smarter team.
                </span>
            </h2>
            <span className=" font-normal text-lg leading-7 text-[rgba(77,77,77,0.7)]">
                We are the invisible infrastructure behind India's water treatment revolution. Focused on biological treatment, we empower leaders to deliver future-ready utilities.
            </span>
            <div className="carousel-container-about w-full max-w-[1000px] flex items-center justify-between py-5 md:py-14 mx-auto text-white overflow-hidden">
                <div className="flex flex-col items-center ms:px-16 sm:px-4 whitespace-nowrap">
                    <span className="font-semibold text-[rgba(0,168,73,1)] text-2xl">
                        120+
                    </span>
                    <span className="font-normal text-[rgba(74,74,74,0.8)] text-sm">
                        Treatment Plants
                    </span>
                </div>
                <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-[rgba(0,89,69,1)] to-white/0"></div>
                <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
                    <span className="font-semibold text-[rgba(0,168,73,1)] text-2xl">
                        15+
                    </span>
                    <span className="font-normal text-[rgba(74,74,74,0.8)] text-sm">
                        States Covered
                    </span>
                </div>
                <div className="w-[1px] shrink-0 h-10 bg-gradient-to-b from-white/0 via-[rgba(0,89,69,1)] to-white/0"></div>
                <div className="flex flex-col items-center px-16 sm:px-4 whitespace-nowrap">
                    <span className="font-semibold text-[rgba(0,168,73,1)] text-2xl">
                        16+
                    </span>
                    <span className="font-normal text-[rgba(74,74,74,0.8)] text-sm">
                        Years of Experience
                    </span>
                </div>
            </div>
        </div>
    )
}