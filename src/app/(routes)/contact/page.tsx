import Image from "next/image"
import { Hero } from "./subcomponents/hero"
import { Support } from "./subcomponents/support"

const Contact = () => {
    return (
        <div className="w-full mt-44 mb-20 sm:mt-48 sm:mb-40">
            <Hero/>
            <Support/>
            <Image
            className="w-11/12 sm:w-10/12 min-h-[260px] mx-auto object-cover rounded-xl"
            width={400}
            height={300}
            src="/contact/map.png"
            alt="location on map"/>
        </div>
    )
}

export default Contact