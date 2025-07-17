import { News } from "@/app/components/news"
import { Awards } from "./subcomponents/awards"
import { ChangeMakers } from "./subcomponents/change"
import { Hero } from "./subcomponents/hero"
import { Story } from "./subcomponents/story"
import { Values } from "./subcomponents/values"
import Timeline from "./subcomponents/timeline"

const About = () => {

    return (
        <div className="overflow-hidden">
            <Hero/>
            <Story/>
            <Timeline/>
            <Values/>
            <ChangeMakers/>
            <Awards/>
            <News/>
        </div>
    )
}

export default About