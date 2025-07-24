'use client'
import { useState } from "react";
import Image from "next/image";

const ShieldActiveSvg = () => {
    return (
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7618 12.3035C19.7618 17.0338 16.4507 19.3989 12.5151 20.7707C12.309 20.8405 12.0851 20.8372 11.8812 20.7612C7.93619 19.3989 4.625 17.0338 4.625 12.3035V5.68112C4.625 5.43021 4.72467 5.18958 4.90209 5.01216C5.07951 4.83474 5.32014 4.73507 5.57105 4.73507C7.46316 4.73507 9.82829 3.59981 11.4744 2.1618C11.6748 1.99057 11.9298 1.89648 12.1934 1.89648C12.457 1.89648 12.712 1.99057 12.9124 2.1618C14.568 3.60927 16.9237 4.73507 18.8158 4.73507C19.0667 4.73507 19.3073 4.83474 19.4848 5.01216C19.6622 5.18958 19.7618 5.43021 19.7618 5.68112V12.3035Z" stroke="white" strokeWidth="1.89211" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
const ShieldSvg = () => {
    return (
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7618 12.3035C19.7618 17.0338 16.4507 19.3989 12.5151 20.7707C12.309 20.8405 12.0851 20.8372 11.8812 20.7612C7.93619 19.3989 4.625 17.0338 4.625 12.3035V5.68112C4.625 5.43021 4.72467 5.18958 4.90209 5.01216C5.07951 4.83474 5.32014 4.73507 5.57105 4.73507C7.46316 4.73507 9.82829 3.59981 11.4744 2.1618C11.6748 1.99057 11.9298 1.89648 12.1934 1.89648C12.457 1.89648 12.712 1.99057 12.9124 2.1618C14.568 3.60927 16.9237 4.73507 18.8158 4.73507C19.0667 4.73507 19.3073 4.83474 19.4848 5.01216C19.6622 5.18958 19.7618 5.43021 19.7618 5.68112V12.3035Z" stroke="#6A7282" strokeWidth="1.89211" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const DropActiveSvg = () => {
    return (
        <svg className="" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.4639 15.4261C9.54522 15.4261 11.2481 13.6948 11.2481 11.5946C11.2481 10.4972 10.7089 9.45652 9.63036 8.57669C8.55186 7.69686 7.73825 6.39131 7.4639 5.01953C7.18954 6.39131 6.3854 7.70632 5.29744 8.57669C4.20948 9.44706 3.67969 10.5066 3.67969 11.5946C3.67969 13.6948 5.38258 15.4261 7.4639 15.4261Z" stroke="white" strokeWidth="1.89211" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.7223 6.2482C13.3729 5.2086 13.8342 4.06191 14.0846 2.86133C14.5576 5.22646 15.9767 7.49699 17.8688 9.01067C19.7609 10.5244 20.7069 12.3219 20.7069 14.214C20.7124 15.5217 20.3293 16.8016 19.6065 17.8914C18.8836 18.9811 17.8535 19.8318 16.6466 20.3354C15.4397 20.839 14.1105 20.973 12.8274 20.7202C11.5444 20.4675 10.3652 19.8395 9.43945 18.9158" stroke="white" strokeWidth="1.89211" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
const DropSvg = () => {
    return (
        <svg className="" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.4639 15.4261C9.54522 15.4261 11.2481 13.6948 11.2481 11.5946C11.2481 10.4972 10.7089 9.45652 9.63036 8.57669C8.55186 7.69686 7.73825 6.39131 7.4639 5.01953C7.18954 6.39131 6.3854 7.70632 5.29744 8.57669C4.20948 9.44706 3.67969 10.5066 3.67969 11.5946C3.67969 13.6948 5.38258 15.4261 7.4639 15.4261Z" stroke="#6A7282" strokeWidth="1.89211" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.7223 6.2482C13.3729 5.2086 13.8342 4.06191 14.0846 2.86133C14.5576 5.22646 15.9767 7.49699 17.8688 9.01067C19.7609 10.5244 20.7069 12.3219 20.7069 14.214C20.7124 15.5217 20.3293 16.8016 19.6065 17.8914C18.8836 18.9811 17.8535 19.8318 16.6466 20.3354C15.4397 20.839 14.1105 20.973 12.8274 20.7202C11.5444 20.4675 10.3652 19.8395 9.43945 18.9158" stroke="#6A7282" strokeWidth="1.89211" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const LightningActiveSvg = () => {
    return (
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.62506 13.2496C4.44603 13.2502 4.27051 13.2 4.11888 13.1049C3.96725 13.0097 3.84573 12.8734 3.76846 12.7119C3.69118 12.5505 3.66131 12.3704 3.68232 12.1926C3.70333 12.0148 3.77435 11.8466 3.88714 11.7076L13.2531 2.05782C13.3233 1.97673 13.4191 1.92193 13.5246 1.90242C13.6301 1.88291 13.7391 1.89985 13.8337 1.95045C13.9283 2.00106 14.0029 2.08232 14.0452 2.18091C14.0876 2.2795 14.0951 2.38956 14.0667 2.49301L12.2502 8.18825C12.1967 8.3316 12.1787 8.4858 12.1978 8.63763C12.217 8.78946 12.2726 8.93438 12.3601 9.05997C12.4475 9.18555 12.5641 9.28805 12.6999 9.35867C12.8356 9.42929 12.9865 9.46592 13.1395 9.46542H19.7619C19.9409 9.46481 20.1165 9.51501 20.2681 9.61019C20.4197 9.70536 20.5412 9.84161 20.6185 10.0031C20.6958 10.1646 20.7257 10.3447 20.7047 10.5225C20.6836 10.7003 20.6126 10.8685 20.4998 11.0075L11.1339 20.6572C11.0637 20.7383 10.9679 20.7931 10.8624 20.8126C10.7569 20.8321 10.6479 20.8152 10.5533 20.7646C10.4587 20.714 10.3841 20.6327 10.3417 20.5341C10.2994 20.4355 10.2918 20.3255 10.3203 20.222L12.1367 14.5268C12.1903 14.3835 12.2083 14.2293 12.1891 14.0774C12.17 13.9256 12.1143 13.7807 12.0269 13.6551C11.9395 13.5295 11.8228 13.427 11.6871 13.3564C11.5513 13.2858 11.4005 13.2491 11.2474 13.2496H4.62506Z" stroke="white" strokeWidth="1.89211" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
const LightningSvg = () => {
    return (
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.62506 13.2496C4.44603 13.2502 4.27051 13.2 4.11888 13.1049C3.96725 13.0097 3.84573 12.8734 3.76846 12.7119C3.69118 12.5505 3.66131 12.3704 3.68232 12.1926C3.70333 12.0148 3.77435 11.8466 3.88714 11.7076L13.2531 2.05782C13.3233 1.97673 13.4191 1.92193 13.5246 1.90242C13.6301 1.88291 13.7391 1.89985 13.8337 1.95045C13.9283 2.00106 14.0029 2.08232 14.0452 2.18091C14.0876 2.2795 14.0951 2.38956 14.0667 2.49301L12.2502 8.18825C12.1967 8.3316 12.1787 8.4858 12.1978 8.63763C12.217 8.78946 12.2726 8.93438 12.3601 9.05997C12.4475 9.18555 12.5641 9.28805 12.6999 9.35867C12.8356 9.42929 12.9865 9.46592 13.1395 9.46542H19.7619C19.9409 9.46481 20.1165 9.51501 20.2681 9.61019C20.4197 9.70536 20.5412 9.84161 20.6185 10.0031C20.6958 10.1646 20.7257 10.3447 20.7047 10.5225C20.6836 10.7003 20.6126 10.8685 20.4998 11.0075L11.1339 20.6572C11.0637 20.7383 10.9679 20.7931 10.8624 20.8126C10.7569 20.8321 10.6479 20.8152 10.5533 20.7646C10.4587 20.714 10.3841 20.6327 10.3417 20.5341C10.2994 20.4355 10.2918 20.3255 10.3203 20.222L12.1367 14.5268C12.1903 14.3835 12.2083 14.2293 12.1891 14.0774C12.17 13.9256 12.1143 13.7807 12.0269 13.6551C11.9395 13.5295 11.8228 13.427 11.6871 13.3564C11.5513 13.2858 11.4005 13.2491 11.2474 13.2496H4.62506Z" stroke="#6A7282" strokeWidth="1.89211" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Features = () => {
    const [activeBtn, setActiveBtn] = useState('feature-1');

    const data = {
        'feature-1': {
            src: "/technology/case-1.jpg",
            icon: <ShieldActiveSvg/>,
            title: "Decanter",
            desc: "The C-Tech decanter removes treated wastewater supernatant with precision, ensuring no inflow, floating matter, or disturbed solids. VFD-controlled for accuracy, it prepares the basin for seamless recycling."
        },
        'feature-2': {
            src: "/landing/hero.jpg",
            icon: <DropActiveSvg/>,
            title: "Diffusers",
            desc: " Fine bubble polyurethane membrane diffusers ensure efficient oxygen transfer, with adjustable air grids for uniform distribution. Manufactured in-house under EDI Inc. USA’s license, we provide complete systems and replacement parts."
        },
        'feature-3': {
            src: "/landing/impact.jpg",
            icon: <LightningActiveSvg/>,
            title: "Programmer login controller",
            desc: "Our in-house designed PLCs automate STP operations, optimizing processes like pumping, aeration, and filtration for efficiency, consistent quality, real-time monitoring, and reduced manpower, ensuring sustainable wastewater treatment compliance. "
        },
    };

    const handleFeature = (id: string) => {
        setActiveBtn(id);
    }

    const FeatureBtn = ({ id, text, icon }: { id: string; text: string; icon: React.JSX.Element }) => {
        return (
            <button
            className={`${ activeBtn === id ? 'bg-[rgba(0,168,73,0.1)] text-[rgba(0,168,73,1)] px-4 md:px-8' : 'text-[rgba(15,23,42,1)] px-4' } w-fit flex gap-2 items-center text-sm md:text-lg text-start whitespace-nowrap transition-all duration-300 rounded-tl-2xl rounded-br-2xl py-2 md:py-4`}
            onClick={ () => handleFeature(id) }
            >
                <div className={`${ activeBtn === id ? 'bg-[rgba(0,168,73,1)]' : 'bg-[rgba(243,244,246,1)]' } p-2 md:p-3 rounded-xl md:rounded-2xl`}>
                    { icon }
                </div>
                { text }
            </button>
        )
    }

    
    return (
        <section className="gsap-fade-in mb-10 md:mb-40">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <h2 className="w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)]">
                    <span className="text-[rgba(0,89,67,1)]">Key components </span> of C-Tech
                </h2>
                <p className="w-full md:w-[500px] font-normal md:text-lg text-[rgba(74,85,101,1)]">
                    Comprehensive equipment package designed for optimal performance and longevity.
                </p>
                <div className="flex-1 flex flex-col-reverse md:flex-row justify-between items-center gap-2 md:pe-10">
                    <div className="disable-scrollbar w-full flex md:flex-col gap-4 overflow-x-auto py-6 md:py-0">
                        <FeatureBtn id="feature-1" text="Decanter" icon={ activeBtn === 'feature-1' ? <ShieldActiveSvg/> : <ShieldSvg/>}/>
                        <FeatureBtn id="feature-2" text="Diffusers" icon={ activeBtn === 'feature-2' ? <DropActiveSvg/> : <DropSvg/>}/>
                        <FeatureBtn id="feature-3" text="Programmer login controller" icon={ activeBtn === 'feature-3' ? <LightningActiveSvg/> : <LightningSvg/>}/>
                    </div>
                    <div className="feature-border relative shrink-0 w-full md:w-1/2 max-w-[500px] h-fit">
                        <div className="w-full relative rounded-tl-[115px] md:rounded-tl-[125px] rounded-br-[115px] md:rounded-br-[125px] overflow-hidden z-50">
                            <Image
                            className="w-full object-cover min-h-[370px] md:h-[450px] max-h-[450px] rounded-tl-[115px] md:rounded-tl-[125px] rounded-br-[115px] md:rounded-br-[125px] border-b-8 border-r-8 border-[rgba(245,126,37,1)]"
                            src={data[activeBtn as keyof typeof data].src}
                            alt="SFC"
                            width={100}
                            height={60}
                            />
                            <div className="absolute bottom-2 right-2 w-full h-fit flex flex-col gap-2 bg-gradient-to-t from-black to-black/0 text-white rounded-br-[115px] md:rounded-br-[125px] font-normal ps-6 md:ps-8 pe-14 pb-8 md:pb-6">
                                <div className="w-fit bg-[rgba(0,168,73,1)] rounded-full p-4">{ data[activeBtn as keyof typeof data].icon }</div>
                                <span>{ data[activeBtn as keyof typeof data].title }</span>
                                <p className="text-xs">{ data[activeBtn as keyof typeof data].desc }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}