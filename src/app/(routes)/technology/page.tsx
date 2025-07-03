import { Application } from "./subcomponents/application"
import { Certification } from "./subcomponents/certification"
import { Ctech } from "./subcomponents/ctech"
import { Difference } from "./subcomponents/difference"
import { Faq } from "./subcomponents/faq"
import { Features } from "./subcomponents/features"
import { Hero } from "./subcomponents/hero"
import { Resources } from "./subcomponents/resource"

const Technology = () => {

    return (
        <div className=" overflow-hidden">
            <Hero/>
            <Ctech/>
            <Features/>
            <Application/>
            <Certification/>
            <Difference/>
            <Faq/>
            <Resources/>
        </div>
    )
}

export default Technology