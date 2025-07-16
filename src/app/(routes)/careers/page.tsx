import { Hero } from "./subcomponents/hero"
import { Join } from "./subcomponents/join"
import { Life } from "./subcomponents/life"
import { Positions } from "./subcomponents/positions"

const Careers = () => {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <Join/>
            <Life/>
            <Positions/>
        </div>
    )
}

export default Careers