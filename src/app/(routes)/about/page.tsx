import { News } from "@/app/components/news"
import { Awards } from "./subcomponents/awards"
import { ChangeMakers } from "./subcomponents/change"
import { Hero } from "./subcomponents/hero"
import { Story } from "./subcomponents/story"
import { Values } from "./subcomponents/values"

const About = () => {

    return (
        <div className="overflow-hidden">
            <Hero/>
            <Story/>
            <Values/>
            <ChangeMakers/>
            <Awards/>
            <News/>
        </div>
    )
}

export default About