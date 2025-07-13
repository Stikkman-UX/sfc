import { Resources } from "../technology/subcomponents/resource"
import { Hero } from "./subcomponents/hero"
import { Insights } from "./subcomponents/insights"
import { Knowledge } from "./subcomponents/knowledge"
import { Showcase } from "./subcomponents/showcase"

const ThoughtLeadership = () => {
    return (
        <div>
            <Hero/>
            <Insights/>
            <Knowledge/>
            <Showcase/>
            <Resources/>
        </div>
    )
}

export default ThoughtLeadership