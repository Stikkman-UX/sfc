import Image from "next/image";

interface InsightCardProps {
    image: string;
    tag: string;
    time: number;
    date: string;
    views: string;
    title: string;
    desc: string;
}

export const Insights = () => {

    const cards = [
        {
            image: "/thought/insight.png",
            time: 8,
            date: 'Dec 15, 2024',
            views: '2.3k',
            title: "Zero Liquid Discharge: Implementation Strategies for Industry 4.0",
            tag: 'Whitepaper',
            desc: "Comprehensive analysis of regulatory frameworks and technological innovations shaping India's water treatment industry.",
        },
        {
            image: "/thought/insight.png",
            time: 8,
            date: 'Dec 15, 2024',
            views: '2.3k',
            title: "Sustainable Water Management: India's Path to 2030",
            tag: 'Research',
            desc: "Comprehensive analysis of regulatory frameworks and technological innovations shaping India's water treatment industry.",
        },
        {
            image: "/thought/insight.png",
            time: 8,
            date: 'Dec 15, 2024',
            views: '2.3k',
            title: "Zero Liquid Discharge: Implementation Strategies for Industry 4.0",
            tag: 'Whitepaper',
            desc: "Comprehensive analysis of regulatory frameworks and technological innovations shaping India's water treatment industry.",
        },
        {
            image: "/thought/insight.png",
            time: 8,
            date: 'Dec 15, 2024',
            views: '2.3k',
            title: "The Future of Water Treatment: AI-Driven C-Tech Solutions",
            tag: 'Article',
            desc: "Exploring how artificial intelligence is revolutionizing wastewater treatment efficiency and sustainability in India's industrial landscape.",
        },
        {
            image: "/thought/insight.png",
            time: 8,
            date: 'Dec 15, 2024',
            views: '2.3k',
            title: "Zero Liquid Discharge: Implementation Strategies for Industry 4.0",
            tag: 'Whitepaper',
            desc: "Comprehensive analysis of regulatory frameworks and technological innovations shaping India's water treatment industry.",
        },
    ]
    
    const EyeSvg = () => {
        return (
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.03386 8.23224C1.9783 8.08256 1.9783 7.91792 2.03386 7.76824C2.57499 6.45614 3.49353 5.33427 4.67304 4.54484C5.85254 3.75541 7.23989 3.33398 8.65919 3.33398C10.0785 3.33398 11.4658 3.75541 12.6453 4.54484C13.8248 5.33427 14.7434 6.45614 15.2845 7.76824C15.3401 7.91792 15.3401 8.08256 15.2845 8.23224C14.7434 9.54434 13.8248 10.6662 12.6453 11.4556C11.4658 12.2451 10.0785 12.6665 8.65919 12.6665C7.23989 12.6665 5.85254 12.2451 4.67304 11.4556C3.49353 10.6662 2.57499 9.54434 2.03386 8.23224Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.66016 10C9.76473 10 10.6602 9.10457 10.6602 8C10.6602 6.89543 9.76473 6 8.66016 6C7.55559 6 6.66016 6.89543 6.66016 8C6.66016 9.10457 7.55559 10 8.66016 10Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const DarkEyeSvg = () => {
        return (
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.44141 6.17369C1.39974 6.06143 1.39974 5.93795 1.44141 5.82569C1.84726 4.84162 2.53617 4.00021 3.42079 3.40814C4.30542 2.81607 5.34593 2.5 6.41041 2.5C7.47489 2.5 8.5154 2.81607 9.40002 3.40814C10.2847 4.00021 10.9736 4.84162 11.3794 5.82569C11.4211 5.93795 11.4211 6.06143 11.3794 6.17369C10.9736 7.15776 10.2847 7.99917 9.40002 8.59124C8.5154 9.18331 7.47489 9.49938 6.41041 9.49938C5.34593 9.49938 4.30542 9.18331 3.42079 8.59124C2.53617 7.99917 1.84726 7.15776 1.44141 6.17369Z" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.41016 7.5C7.23858 7.5 7.91016 6.82843 7.91016 6C7.91016 5.17157 7.23858 4.5 6.41016 4.5C5.58173 4.5 4.91016 5.17157 4.91016 6C4.91016 6.82843 5.58173 7.5 6.41016 7.5Z" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const ClockSvg = () => {
        return (
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33008 11C9.0915 11 11.3301 8.76142 11.3301 6C11.3301 3.23858 9.0915 1 6.33008 1C3.56865 1 1.33008 3.23858 1.33008 6C1.33008 8.76142 3.56865 11 6.33008 11Z" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.33008 3V6L8.33008 7" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const PersonSvg = () => {
        return (
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9974 14V12.6667C12.9974 11.9594 12.7164 11.2811 12.2163 10.781C11.7162 10.281 11.038 10 10.3307 10H6.33073C5.62349 10 4.94521 10.281 4.44511 10.781C3.94501 11.2811 3.66406 11.9594 3.66406 12.6667V14" stroke="#00A849" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33073 7.33333C9.80349 7.33333 10.9974 6.13943 10.9974 4.66667C10.9974 3.19391 9.80349 2 8.33073 2C6.85797 2 5.66406 3.19391 5.66406 4.66667C5.66406 6.13943 6.85797 7.33333 8.33073 7.33333Z" stroke="#00A849" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> 
        )
    }

    const InsightCard = ({ data }: { data: InsightCardProps }) => {
        const { image, tag, time, date, views, title, desc } = data;

        return (
            <div className="shrink-0 w-[340px] md:w-[400px] flex flex-col bg-[rgba(249,249,249,1)] rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="relative w-full">
                    <Image
                    className="relative max-h-[200px] w-full object-cover z-10"
                    src={image}
                    alt="SFC"
                    width={100}
                    height={60}
                    />
                    <div className="absolute top-4 w-full flex justify-between items-center px-4 z-20">
                        <span className="bg-[rgba(0,168,73,1)]  text-white text-xs px-2 py-0.5 rounded-full">
                            { tag }
                        </span>
                        <div className="bg-black/20 backdrop-blur-sm rounded-full p-2"><EyeSvg/></div>
                    </div>
                </div>
                <div className="space-y-5 md:space-y-8 px-4 md:px-6 py-6">
                    <div className="flex items-center justify-between text-[rgba(106,114,130,1)] font-normal text-sm">
                        <div className="flex items-center gap-1.5">
                            <span className="flex items-center gap-1">
                                <ClockSvg/>
                                { time } min read
                            </span>
                            <div className="w-1 h-1 rounded-full bg-[rgba(153,161,175,1)]"></div>
                            <span className="">
                                { date }
                            </span>
                        </div>
                        <span className="flex items-center gap-1">
                            <DarkEyeSvg/>
                            { views }
                        </span>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold md:text-base text-[rgba(0,89,69,1)]">
                            { title }
                        </h4>
                        <p className="text-[rgba(74,85,101,1)] text-sm leading-5 font-normal">
                            { desc }
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pt-8">
                        <div className="w-fit rounded-full p-2 bg-[rgba(0,168,73,0.1)]">
                            <PersonSvg/>
                        </div>
                        <div className="grid">
                            <span className="text-[rgba(16,24,40,1)] text-sm">
                                Dr.Rajesh Sharma
                            </span>
                            <span className="font-normal text-xs text-[rgba(106,114,130,1)]">
                                Chief Technology Officer
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className=" sm:mb-20">
            <div className="w-11/12 md:w-10/12 flex flex-col sm:items-center gap-1 sm:gap-0 text-start sm:text-center mx-auto">
                <h2 className="w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)]">
                    Featured {" "}
                    <span className="text-[rgba(0,89,67,1)]">Insights</span>
                </h2>
                <p className=" sm:w-[420px] lg:w-[500px] font-normal md:text-lg text-[rgba(74,85,101,1)] pb-10">
                    Our latest research and analysis on water treatment technologies, industry trends, and sustainable solutions.
                </p>
            </div>
            <div className="disable-scrollbar flex gap-6 overflow-x-auto px-4 md:px-20 xl:px-28">
                {
                    cards.map((cardData, i) => {
                        return <InsightCard key={i} data={cardData} />
                    })
                }
            </div>
        </section>
    )
}