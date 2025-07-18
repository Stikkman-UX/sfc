'use client'
import gsap from "gsap"
import { Resources } from "../technology/subcomponents/resource"
import { Hero } from "./subcomponents/hero"
import { Insights } from "./subcomponents/insights"
import { Knowledge } from "./subcomponents/knowledge"
import { Showcase } from "./subcomponents/showcase"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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