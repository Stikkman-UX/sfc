'use client'
import { PerksCarousel } from "./perkscarousel";



export const Join = () => {

    return (
        <div className="py-20">
            <div className="w-11/12 sm:w-10/12 flex flex-col sm:items-center gap-1 sm:gap-0 text-start sm:text-center mx-auto">
                <h2 className="w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)]">
                    <span className="text-[rgba(0,89,67,1)]">Why</span>{" "}
                    Join SFC?
                </h2>
                <p className=" sm:w-[420px] lg:w-[500px] font-normal md:text-lg text-[rgba(74,85,101,1)] pb-10">
                    We believe in investing in our people. Discover the comprehensive benefits and growth opportunities that make SFC a great place to build your career.
                </p>
            </div>
            <PerksCarousel/>
        </div>
    )
}