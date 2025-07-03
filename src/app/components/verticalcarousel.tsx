'use client'
import { useEffect } from "react"
import gsap from "gsap"

interface VerticalCarouselProps {
    cards: {
        cardNo: string;
        icon: React.JSX.Element;
        title: string;
        desc: string;
    }[];
    styling?: {
        background: string;
        titleColor: string;
        descColor: string;
    };
}

export const VerticalCarousel = ({ cards, styling }: VerticalCarouselProps) => {

    useEffect(() => {
        const isMobile = false;

        gsap.set('#card-0', { width: '100%', bottom: '-16px', opacity: 1, zIndex: '30' });
        gsap.set('#card-1', { width: '92%', bottom: '0px', opacity: 0.7, zIndex: '20' });
        gsap.set('#card-2', { width: '82%', bottom: '16px', opacity: 0.4, zIndex: '10' });
        gsap.set('#card-3', { width: '72%', bottom: '32px', opacity: 0.2, zIndex: '0' });

        gsap.to(
            '.vertical-carousel',
            {
                scrollTrigger: {
                    trigger: '.vertical-carousel',
                    start: isMobile ? 'top 50%' : '-5% 15%',
                    onEnter: () => {
                        startVerticalCarousel();
                    },
                    once: true,
                },
                // onComplete: isMobile ? startVerticalCarouselMobile : startVerticalCarousel,
            },
        )

        function startVerticalCarousel() {
            const tl = gsap.timeline({ repeat: -1 });

            tl
            .fromTo('#card-0', { width: '100%', bottom: '-16px', zIndex: '30' }, { width: '92%', bottom: '0px', opacity: 0.7, zIndex: '20' }, 2.5)
            .fromTo('#card-0', { width: '92%', bottom: '0px' }, { width: '82%', bottom: '16px', zIndex: '10', opacity: 0.4, immediateRender: false }, 5)
            .fromTo('#card-0', { width: '82%', bottom: '16px' }, { width: '72%', bottom: '32px', zIndex: '0', opacity: 0.2, immediateRender: false }, 7.5)
            .fromTo('#card-0', { width: '72%', bottom: '32px' }, { width: '72%', bottom: '32px', opacity: 0, ease: "power1.out", immediateRender: false }, 9.8)
            .fromTo('#card-0', { width: '90%', bottom: '-160px', opacity: 1, zIndex: 30 }, { width: '100%', bottom: '-16px', opacity: 1, zIndex: '30', immediateRender: false }, 10);
    
            tl
            .fromTo('#card-1', { width: '92%', bottom: '0px', zIndex: '20' }, { width: '82%', bottom: '16px', opacity: 0.4, zIndex: '10' }, 2.5)
            .fromTo('#card-1', { width: '82%', bottom: '16px' }, { width: '72%', bottom: '32px', opacity: 0.2, zIndex: '0', immediateRender: false }, 5)
            .fromTo('#card-1', { width: '72%', bottom: '32px', zIndex: '0' }, { width: '72%', bottom: '32px', opacity: 0, ease: "power1.out", immediateRender: false }, 7.3)
            .fromTo('#card-1', { width: '90%', bottom: '-160px', opacity: 1, zIndex: '30' }, { width: '100%', bottom: '-16px', opacity: 1, zIndex: '30', immediateRender: false }, 7.5)
            .fromTo('#card-1', { width: '100%', bottom: '-16px' }, { width: '92%', bottom: '0px', opacity: 0.7, zIndex: '20', immediateRender: false }, 10);
    
            tl
            .fromTo('#card-2', { width: '82%', bottom: '16px' }, { width: '72%', bottom: '32px', opacity: 0.2, zIndex: '0' }, 2.5)
            .fromTo('#card-2', { width: '72%', bottom: '32px', zIndex: '0' }, {  width: '72%', bottom: '36px', zIndex: '0', opacity: 0, ease: "power1.out", immediateRender: false }, 4.8)
            .fromTo('#card-2', { width: '90%', bottom: '-160px', opacity: 1, zIndex: '30' }, { width: '100%', bottom: '-16px', opacity: 1, zIndex: '30', immediateRender: false }, 5)
            .fromTo('#card-2', { width: '100%', bottom: '-16px' }, { width: '92%', bottom: '0px', opacity: 0.7, zIndex: '20', immediateRender: false }, 7.5)
            .fromTo('#card-2', { width: '92%', bottom: '0px' }, { width: '82%', bottom: '16px', opacity: 0.4, zIndex: '10', immediateRender: false}, 10);

            tl
            .fromTo('#card-3', { width: '72%', bottom: '32px', zIndex: '0' }, {  width: '72%', bottom: '32px', zIndex: '0', opacity: 0, ease: "power1.out" }, 2.3)
            .fromTo('#card-3', { width: '90%', bottom: '-160px', opacity: 1, zIndex: '30' }, { width: '100%', bottom: '-16px', opacity: 1, zIndex: '30', immediateRender: false }, 2.5)
            .fromTo('#card-3', { width: '100%', bottom: '-16px' }, { width: '92%', bottom: '0px', opacity: 0.7, zIndex: '20', immediateRender: false }, 5)
            .fromTo('#card-3', { width: '92%', bottom: '0px' }, { width: '82%', bottom: '16px', opacity: 0.4, zIndex: '10', immediateRender: false}, 7.5)
            .fromTo('#card-3', { width: '82%', bottom: '16px' }, { width: '72%', bottom: '32px', opacity: 0.2, zIndex: '0', immediateRender: false }, 10);
        }

    //     function startVerticalCarouselMobile() {
    //         const tl = gsap.timeline({ repeat: -1 });

    //         tl
    //         .fromTo('#card-0', { width: '94%', bottom: '-8px', zIndex: '30' }, { width: '88%', bottom: '0px', zIndex: '20' }, 2.5)
    //         .fromTo('#card-0', { width: '88%', bottom: '0px' }, { width: '80%', bottom: '8px', zIndex: '10' }, 5.5)
    //         .fromTo('#card-0', { width: '80%', bottom: '8px' }, { width: '80%', bottom: '8px', opacity: 0, ease: "power1.out" }, 7.5)
    //         .fromTo('#card-0', { width: '98%', bottom: '-200px', opacity: 1, zIndex: 30 }, { width: '94%', bottom: '-8px', opacity: 1, zIndex: '30' }, 8);
    
    //         tl
    //         .fromTo('#card-1', { width: '88%', bottom: '0px', zIndex: '20' }, { width: '80%', bottom: '8px', zIndex: '10' }, 2.5)
    //         .fromTo('#card-1', { width: '80%', bottom: '8px', zIndex: '10' }, { width: '80%', bottom: '8px', opacity: 0, ease: "power1.out" }, 5)
    //         .fromTo('#card-1', { width: '98%', bottom: '-200px', opacity: 1, zIndex: '30' }, { width: '94%', bottom: '-8px', opacity: 1, zIndex: '30' }, 5.5)
    //         .fromTo('#card-1', { width: '94%', bottom: '-8px' }, { width: '88%', bottom: '0px', zIndex: '20' }, 8);
    
    //         tl
    //         .fromTo('#card-2', { width: '80%', bottom: '8px', zIndex: '10' }, {  width: '80%', bottom: '8px', zIndex: '10', opacity: 0, ease: "power1.out" }, 2.5)
    //         .fromTo('#card-2', { width: '98%', bottom: '-200px', opacity: 1, zIndex: '30' }, { width: '94%', bottom: '-8px', opacity: 1, zIndex: '30' }, 2.7)
    //         .fromTo('#card-2', { width: '94%', bottom: '-8px' }, { width: '88%', bottom: '0px', zIndex: '20' }, 5.5)
    //         .fromTo('#card-2', { width: '88%', bottom: '0px' }, { width: '80%', bottom: '8px', zIndex: '10'}, 8);
    //     }

    }, []);

    return (
        <div className="vertical-carousel relative w-10/12 h-[400px] flex flex-col items-center gap-6 mx-auto my-20">
            {
                cards.map((card, i) => {
                    const { cardNo, icon, title, desc } = card;

                    // if(i === 3){
                        return (
                            <div
                            id={'card-' + i}
                            key={i}
                            className={`absolute flex flex-col items-center gap-8 ${ styling ? styling.background : 'bg-white' } rounded-2xl pt-10 pb-20 px-10`}>
                                <div className="relative bg-[rgba(25,169,72,1)] text-white font-inter font-bold text-sm rounded-tl-2xl rounded-br-2xl px-6 py-5">
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[rgba(245,126,37,1)] rounded-full"></div>
                                    { cardNo }
                                </div>
                                { icon }
                                <div className="flex flex-col gap-2 text-center">                              
                                    <span className={`${ styling ? styling.titleColor : 'text-[rgba(25,169,72,1)]' } font-semibold`}>
                                        { title }
                                    </span>
                                    <span className={`w-2/3 font-normal text-sm ${ styling ? styling.descColor : 'text-[rgba(74,85,101,1)]' } leading-6 mx-auto`}>
                                        { desc }
                                    </span>
                                </div>
                            </div>
                        )
                    // }
                })
            }
        </div>
    )
}