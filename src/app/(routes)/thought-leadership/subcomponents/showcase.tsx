import { AnimatedCarousel } from "./animatedcarousel"

export const Showcase = () => {

    const cards = [
        {
            id: 'showcase-inactive-1',
            image: "/thought/showcase-1.png",
            title: "Advanced Membrane Bioreactors",
            tag: 'Piloy Program',
            tagColor: "bg-[rgba(0,201,80,1)]",
            desc: "Next-generation MBR technology achieving 99.9% treatment efficiency",
            advantage: "40% reduction in energy consumption",
        },
        {
            id: 'showcase-active',
            image: "/thought/showcase-2.png",
            title: "AI-Powered Process Optimization",
            tag: 'Live Implementation',
            tagColor: "bg-[rgba(240,177,0,1)]",
            desc: "Machine learning algorithms for predictive maintenance and performance optimization",
            advantage: "25% reduction in operational costs",
        },
        {
            id: 'showcase-inactive-2',
            image: "/thought/showcase-3.png",
            title: "Biogas Recovery Systems",
            tag: 'Research Phase',
            tagColor: "bg-[rgba(43,127,255,1)]",
            desc: "Converting organic waste to renewable energy in treatment processes",
            advantage: "60% energy self-sufficiency"
        },
    ]

    return (
        <section className="gsap-fade-in sm:mb-20">
            <div className="w-11/12 md:w-10/12 flex flex-col items-center text-center mx-auto">
                <h2 className="w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)]">
                    Innovation {" "}
                    <span className="text-[rgba(0,89,67,1)]">showcase</span>
                </h2>
                <p className=" sm:w-[420px] lg:w-[500px] font-normal md:text-lg text-[rgba(74,85,101,1)] pb-10">
                    Cutting-edge technologies and breakthrough innovations that are transforming the water treatment industry.
                </p>
            </div>
            <AnimatedCarousel cards={cards}/>
        </section>
    )
}