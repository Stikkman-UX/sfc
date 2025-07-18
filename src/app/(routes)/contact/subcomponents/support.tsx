
import { ContactCallSvg, ContactMailSvg } from "@/app/common/commonsvg";
import { ArrowRightGreenSvg } from "@/app/components/commonsvg";

interface SupportCardProps {
    logo: React.JSX.Element;
    title: string;
    contact: string;
    timing?: string;
    cta: string;
}

export const Support = () => {

    const TechSvg = () => {
        return (
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect y="0.046875" width="33" height="33" fill="url(#pattern0_41_2525)"/>
            <defs>
            <pattern id="pattern0_41_2525" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_41_2525" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_41_2525" width="96" height="96" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFcUlEQVR4nO2da4gcRRDHy/fjRBHR+CYfJBjQDxpREPXE5G6q9nIi6CniC/yoRAXRD4qJhiiSD+Irmogg7HFTtYMEUTAfFKOeaCKCRo2IqNEISlQ0GMV4mlvpnnuF25ue3pvdnr2tHxQcy15PT/27e7qrumcBFEVRFEVRFEVRFEVRFKVsJL3HAdMNILQJmLYD088gNGbN/J1+thFqleuh2tcTuroLh2rfKSD4DDDtA6F6LjPfZXra/q/SJMnQkcC42svxs4TAP4DpIVuW4sHm5SeB0NamHT9biPcgHlykGuSBK0tBaFdhzp8elr61ZSvOlv914c6ftl2Q4MmqQSM2LTui0GFn7p4wqs+EhkMPrm6586cM12ovmEk8uMjOWNolANN+4GixijCJmee3rfVP2XNT1+9qqn0985rrN98L9tnVddfDNrxQD2IxXtf1/gcT2wklAOPzKgDT9nAC0PsqgOAvwQQQ2qMCMP4TsAfsVwFYBQiL6BAUFtaHcGgBNgZ8COtqGEwON5wA1wZufl0eiqhq8j7FJNDbL8CGiasrYHYvtDMcLfQ3JCvPVs/PxOxeaF/rf/igayugKclSsFmT8uHhylK7haTwoQe/gZH+c0PfXuf0BMa3ChzzR3WbYlPbVHCtjVjOZ7ZjHrimLKVJOFpsQwY+09R0T+gGnWoWSbWvx+ZwrRj0gU2mmFB2Gs7eYz8zTjfhhVdXHqsNXlEURVEURVEURVEURVHyMjJwIsSVS4Art4DQOmCs2VOUjB/Z5IrZ0mhC1cnAssxykv6LgfEzYBp3RFB/AqFbu1Ogl3qPBo4uB8YHQXCL135R1/sghD73yB+MQVI5FRY8ydBhIJUrgPExm62aT9Jla+/hmddK36jikT3D5bAgWbPmUHtzQi9OvGqmXogN4/GZ12X83au8OLoaFhTJwBlpahG/L8zpMsOS/nMyry/0g1+ZeBMsCGK8AARHvIcA8RUAL8ush+AXfkNQdB90NKZFCopz1lGY4VBmfYTe7I6Tk6/jUXa62OoWL7MEWJVZrzRP7CEA7YSOQ6ILvbt6cQI8mlk3prs9BRjvrKmoOWDB+FcY55MZMl7OrJ9EkXeZtehG6AhiurN9Yz3NZbsz65isOAEY//Ms8wkoPWa6JnggsPPr1lxDBtOHnmXeC6WGaYnd9hfa8TJpOJhZX6H1HuW9C8nQMVBqGN8J73TK/wasmK7KWc6W8u+q48ql4R1OB5sZYlxhEOeKGF+xQcHSw/hCCQUYd27EdQ5DUQQdgdCO4A6Xhi34nsx6J3S+Q8S3oSNg2hve2dTIgaPOurvCEh0Rig7taJmzBxywkdf5PYx3lP8wR3BHU5atc9bfvCUruyc9AKUmvJPrGc771TmNTJNCrmNNS6C0hHayuAzvyHEPiUPIT8q7Hii/AF/ZeX8W3H8WCP3pKKcKdTgESkdwB5PbTITWRRzdlaOs9VA6QjtXcpg56O361QzTus3q113eU84e1VZCO1dymmnh+V6NsDuHoMPlCdCFdqzk7gV7YTg6zXk/dvddjoQS48fOX+AwIpmkvuCTNqnTksxaaMeKjwhYy3VPcTQATP/mKM+cSX7E5r8b9ibc1qAh7LRnm4XuhxreDELX2AVhnsbRVdTw9tzZPaYv7aHxyWfDMJ454WifBjIGNbwt9G2XUQR3T5juEZ/aXRmC3zXZS38MfcvlI6a+tr4+TZnjwZxndqQCtBCzm8IVslABWky6WFvlDlvoENRa4hWn29hQK/ZAKR7YhE6Dub4K0GbMlnjB1wrpEco8kIHzQOjxpmdMRkClqONX0ZWpGLgt92LOLOQUKB5zbo2xf2KV/CwwvZGGKsyKGX+zm4WN82O66H9ufdE64FX0NAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        )
    }

    const GrievanceSvg = () => {
        return (
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect y="0.015625" width="33" height="33" fill="url(#pattern0_41_2536)"/>
            <defs>
            <pattern id="pattern0_41_2536" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_41_2536" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_41_2536" width="96" height="96" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
            </defs>
            </svg>
        )
    }

    const SupportCard = ({ logo, title, contact, timing, cta }: SupportCardProps) => {
        return (
            <div className="min-w-[240px] shrink-0 flex flex-col items-center bg-[rgba(249,249,249,1)] rounded-2xl px-4 pt-4 pb-8">
                <div className=" bg-[rgba(0,168,73,0.1)] rounded-full p-4">
                    { logo }
                </div>
                <span className="text-black text-lg pt-3">
                    { title }
                </span>
                <span className="text-[rgba(0,168,73,1)] pt-3">
                    { contact }
                </span>
                <span className="text-black/40 text-sm pb-10">
                    { timing }
                </span>
                <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 text-[rgba(0,168,73,1)] whitespace-nowrap border border-[rgba(0,168,73,1)] rounded-full px-4 md:px-5 py-1.5">
                    { cta }
                    <ArrowRightGreenSvg/>
                </button>
            </div>
        )
    }

    return (
        <section className="gsap-fade-in w-11/12 sm:w-10/12 grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mx-auto my-16">
            <SupportCard
            logo={ <ContactCallSvg/> }
            title="Sales Hotline"
            contact="+91 40 2321 1168"
            timing="24/7 Available"
            cta="Call Us"/>
            <SupportCard
            logo={ <ContactMailSvg/> }
            title="Email Support"
            contact="Info@Sfcenvironment.com"
            timing="Response Within 2 Hours"
            cta="Email"/>
            <SupportCard
            logo={ <TechSvg/> }
            title="Technical Support"
            contact="+91 40 2321 1199"
            timing="Mon-Sat: 9 AM - 7 PM"
            cta="Call Us"/>
            <SupportCard
            logo={ <GrievanceSvg/> }
            title="Grievances"
            contact="Compliance@Sfcenv.com"
            timing="+91-22-2783 2504"
            cta="Connect"/>
        </section>
    )
}