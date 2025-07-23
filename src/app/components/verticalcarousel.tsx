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
        const mm = gsap.matchMedia();

        mm.add(
          {
            isMobile: "(min-width: 360px) and (max-width: 768px)",
            isDesktop: "(min-width: 769px)",
          },
          (context) => {
            const conditions = context.conditions || {};
            const isMobile = conditions.isMobile ?? false;
            const isDesktop = conditions.isDesktop ?? false;

            gsap.set('#card-0', { width: '100%', top: '32px', opacity: 1, zIndex: '40' });
            gsap.set('#card-1', { width: '92%', top: '16px', opacity: 0.7, zIndex: '30' });
            gsap.set('#card-2', { width: '82%', top: '0px', opacity: 0.4, zIndex: '20' });
            gsap.set('#card-3', { width: '72%', top: '-16px', opacity: 0.2, zIndex: '10' });
            gsap.set('#card-4', { width: '62%', top: '-32px', opacity: 0, zIndex: '0' }); 
    
            gsap.to(
                '.vertical-carousel',
                {
                    scrollTrigger: {
                        trigger: '.vertical-carousel',
                        start: isMobile ? 'top 70%' : 'top 60%',
                        onEnter: () => startVerticalCarousel(),
                        once: true,
                        // markers: true,
                    },
                },
            )
          }
        );


        function startVerticalCarousel() {
            const tl = gsap.timeline({ repeat: -1 });

            tl
            .fromTo('#card-0', { width: '100%', top: '16px', zIndex: '30' }, { width: '92%', top: '0px', opacity: 0.7, zIndex: '20' }, 2.5)
            .fromTo('#card-0', { width: '92%', top: '0px' }, { width: '82%', top: '-16px', zIndex: '10', opacity: 0.4, immediateRender: false }, 5)
            .fromTo('#card-0', { width: '82%', top: '-16px' }, { width: '72%', top: '-32px', zIndex: '0', opacity: 0.2, immediateRender: false }, 7.5)
            .fromTo('#card-0', { width: '72%', top: '-32px' }, { width: '72%', top: '-32px', opacity: 0, ease: "power1.out", immediateRender: false }, 9.8)
            .fromTo('#card-0', { width: '90%', top: '160px', opacity: 1, zIndex: 30 }, { width: '100%', top: '16px', opacity: 1, zIndex: '30', immediateRender: false }, 10);
    
            tl
            .fromTo('#card-1', { width: '92%', top: '0px', zIndex: '20' }, { width: '82%', top: '-16px', opacity: 0.4, zIndex: '10' }, 2.5)
            .fromTo('#card-1', { width: '82%', top: '-16px' }, { width: '72%', top: '-32px', opacity: 0.2, zIndex: '0', immediateRender: false }, 5)
            .fromTo('#card-1', { width: '72%', top: '-32px', zIndex: '0' }, { width: '72%', top: '-32px', opacity: 0, ease: "power1.out", immediateRender: false }, 7.3)
            .fromTo('#card-1', { width: '90%', top: '160px', opacity: 1, zIndex: '30' }, { width: '100%', top: '16px', opacity: 1, zIndex: '30', immediateRender: false }, 7.5)
            .fromTo('#card-1', { width: '100%', top: '16px' }, { width: '92%', top: '0px', opacity: 0.7, zIndex: '20', immediateRender: false }, 10);
    
            tl
            .fromTo('#card-2', { width: '82%', top: '-16px' }, { width: '72%', top: '-32px', opacity: 0.2, zIndex: '0' }, 2.5)
            .fromTo('#card-2', { width: '72%', top: '-32px', zIndex: '0' }, {  width: '72%', top: '-36px', zIndex: '0', opacity: 0, ease: "power1.out", immediateRender: false }, 4.8)
            .fromTo('#card-2', { width: '90%', top: '160px', opacity: 1, zIndex: '30' }, { width: '100%', top: '16px', opacity: 1, zIndex: '30', immediateRender: false }, 5)
            .fromTo('#card-2', { width: '100%', top: '16px' }, { width: '92%', top: '0px', opacity: 0.7, zIndex: '20', immediateRender: false }, 7.5)
            .fromTo('#card-2', { width: '92%', top: '0px' }, { width: '82%', top: '-16px', opacity: 0.4, zIndex: '10', immediateRender: false}, 10);

            tl
            .fromTo('#card-3', { width: '72%', top: '-32px', zIndex: '0' }, {  width: '72%', top: '-32px', zIndex: '0', opacity: 0, ease: "power1.out" }, 2.3)
            .fromTo('#card-3', { width: '90%', top: '160px', opacity: 1, zIndex: '30' }, { width: '100%', top: '16px', opacity: 1, zIndex: '30', immediateRender: false }, 2.5)
            .fromTo('#card-3', { width: '100%', top: '16px' }, { width: '92%', top: '0px', opacity: 0.7, zIndex: '20', immediateRender: false }, 5)
            .fromTo('#card-3', { width: '92%', top: '0px' }, { width: '82%', top: '-16px', opacity: 0.4, zIndex: '10', immediateRender: false}, 7.5)
            .fromTo('#card-3', { width: '82%', top: '-16px' }, { width: '72%', top: '-32px', opacity: 0.2, zIndex: '0', immediateRender: false }, 10);

            tl
            .fromTo('#card-4', { width: '62%', top: '-32px', zIndex: '0' }, {  width: '72%', top: '-32px', zIndex: '0', opacity: 0, ease: "power1.out" }, 2.3)
            .fromTo('#card-4', { width: '72%', top: '160px', opacity: 1, zIndex: '30' }, { width: '100%', top: '16px', opacity: 1, zIndex: '30', immediateRender: false }, 2.5)
            .fromTo('#card-4', { width: '90%', top: '16px' }, { width: '92%', top: '0px', opacity: 0.7, zIndex: '20', immediateRender: false }, 5)
            .fromTo('#card-4', { width: '100%', top: '0px' }, { width: '82%', top: '-16px', opacity: 0.4, zIndex: '10', immediateRender: false}, 7.5)
            .fromTo('#card-4', { width: '92%', top: '-16px' }, { width: '72%', top: '-32px', opacity: 0.2, zIndex: '0', immediateRender: false }, 10);
        }

    }, []);

    return (
        <div className="vertical-carousel relative w-11/12 lg:w-10/12 max-w-[1280px] h-[400px] flex flex-col items-center gap-6 mx-auto mt-20 md:my-20">
            {
                cards.map((card, i) => {
                    const { cardNo, icon, title, desc } = card;

                    // if(i === 0){
                        return (
                            <div
                            id={'card-' + i}
                            key={i}
                            className={`absolute max-h-[460px] sm:max-h-[360px] md:max-h-[400px] overflow-hidden flex flex-col items-center gap-6 ${ styling ? styling.background : 'bg-white' } rounded-2xl pt-6 md:pt-10 pb-10 px-6 md:px-10`}>
                                <div className="relative bg-[rgba(25,169,72,1)] text-white  font-bold text-sm rounded-tl-2xl rounded-br-2xl px-6 py-5">
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[rgba(245,126,37,1)] rounded-full"></div>
                                    { cardNo }
                                </div>
                                <div className="hidden md:block">
                                    { icon }
                                </div>
                                <div className="flex flex-col gap-2 text-center">                              
                                    <span className={`${ styling ? styling.titleColor : 'text-[rgba(25,169,72,1)]' } font-semibold`}>
                                        { title }
                                    </span>
                                    <span className={`w-full lg:w-[700px] shrink-0 font-normal text-sm ${ styling ? styling.descColor : 'text-[rgba(74,85,101,1)]' } leading-6 mx-auto`}>
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