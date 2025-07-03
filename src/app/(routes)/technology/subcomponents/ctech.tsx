import { DropSvg, TechSvg1, TechSvg2, TechSvg3 } from "@/app/components/commonsvg";
import { VerticalCarousel } from "@/app/components/verticalcarousel"

export const Ctech = () => {
    const cards = [
        {
            cardNo: '01',
            icon: <TechSvg1/>,
            title: 'Biological processing',
            desc: 'CTEK system uses optimized microbial communities for efficient organic matter breakdown.'
        },
        {
            cardNo: '02',
            icon: <TechSvg2/>,
            title: 'Biological processing',
            desc: 'CTEK system uses optimized microbial communities for efficient organic matter breakdown.'
        },
        {
            cardNo: '03',
            icon: <TechSvg3/>,
            title: 'Biological processing',
            desc: 'CTEK system uses optimized microbial communities for efficient organic matter breakdown.'
        },
        {
            cardNo: '04',
            icon: <DropSvg/>,
            title: 'Biological processing',
            desc: 'CTEK system uses optimized microbial communities for efficient organic matter breakdown.'
        },
    ];
    

    return (
        <section className="h-screen mt-40">
            <h2 className="w-fit text-[32px] text-[rgba(25,169,72,1)] mx-auto">
                How the <span className="text-[rgba(0,89,67,1)]">C-Tech works</span>
            </h2>
            <VerticalCarousel
            cards={cards}
            styling={{
                background: "bg-[rgba(42,135,87,1)]",
                titleColor: "text-white",
                descColor: "text-white"
            }}/>
        </section>
    )
}