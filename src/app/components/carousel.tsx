'use client'
import { useEffect } from "react"
import gsap from "gsap"

export const Carousel = () => {

    const cards = ['', '', ''];

    useEffect(() => {
        const isMobile = false;
        gsap.fromTo(
            '.vertical-carousel',
            {
                transform: 'translateY(100%)',
            },
            {
                transform: 'translateY(0)',
                scrollTrigger: {
                    trigger: '.innovation-labs',
                    // start: isMobile ? 'top 50%' : '-5% 15%',
                    onEnter: () => {
                        const tl = gsap.timeline();
                        tl
                        .fromTo('#card-0', { transform: 'translateY(100%)' }, { transform: 'translateY(0)', width: isMobile ? '94%' : '80%', bottom: isMobile ? '-8px' : '-16px', zIndex: '30', duration: 1 }, 0)
                        .fromTo('#card-1', { transform: 'translateY(100%)' }, { transform: 'translateY(0)', width: isMobile ? '88%' : '72%', bottom: '0px', zIndex: '20', duration: 1 }, 0.2)
                        .fromTo('#card-2', { transform: 'translateY(100%)' }, { transform: 'translateY(0)', width: isMobile ? '80%' : '62%', bottom: isMobile ? '8px' : '16px', zIndex: '10', duration: 1 }, 0.4)
                    },
                    once: true,
                },
                duration: 1,
                // onComplete: isMobile ? startVerticalCarouselMobile : startVerticalCarousel,
                onComplete: startVerticalCarousel,
            },
        )

        function startVerticalCarousel() {
            const tl = gsap.timeline({ repeat: -1 });

            tl
            .fromTo('#card-0', { width: '80%', bottom: '-16px', zIndex: '30' }, { width: '72%', bottom: '0px', zIndex: '20' }, 2.5)
            .fromTo('#card-0', { width: '72%', bottom: '0px' }, { width: '62%', bottom: '16px', zIndex: '10' }, 5.5)
            .fromTo('#card-0', { width: '62%', bottom: '16px' }, { width: '62%', bottom: '16px', opacity: 0, ease: "power1.out" }, 7.5)
            .fromTo('#card-0', { width: '90%', bottom: '-200px', opacity: 1, zIndex: 30 }, { width: '80%', bottom: '-16px', opacity: 1, zIndex: '30' }, 8);
    
            tl
            .fromTo('#card-1', { width: '72%', bottom: '0px', zIndex: '20' }, { width: '62%', bottom: '16px', zIndex: '10' }, 2.5)
            .fromTo('#card-1', { width: '62%', bottom: '16px', zIndex: '10' }, { width: '62%', bottom: '16px', opacity: 0, ease: "power1.out" }, 5)
            .fromTo('#card-1', { width: '90%', bottom: '-200px', opacity: 1, zIndex: '30' }, { width: '80%', bottom: '-16px', opacity: 1, zIndex: '30' }, 5.5)
            .fromTo('#card-1', { width: '80%', bottom: '-16px' }, { width: '72%', bottom: '0px', zIndex: '20' }, 8);
    
            tl
            .fromTo('#card-2', { width: '62%', bottom: '16px', zIndex: '10' }, {  width: '62%', bottom: '16px', zIndex: '10', opacity: 0, ease: "power1.out" }, 2.5)
            .fromTo('#card-2', { width: '90%', bottom: '-200px', opacity: 1, zIndex: '30' }, { width: '80%', bottom: '-16px', opacity: 1, zIndex: '30' }, 2.7)
            .fromTo('#card-2', { width: '80%', bottom: '-16px' }, { width: '72%', bottom: '0px', zIndex: '20' }, 5.5)
            .fromTo('#card-2', { width: '72%', bottom: '0px' }, { width: '62%', bottom: '16px', zIndex: '10'}, 8);
        }

        function startVerticalCarouselMobile() {
            const tl = gsap.timeline({ repeat: -1 });

            tl
            .fromTo('#card-0', { width: '94%', bottom: '-8px', zIndex: '30' }, { width: '88%', bottom: '0px', zIndex: '20' }, 2.5)
            .fromTo('#card-0', { width: '88%', bottom: '0px' }, { width: '80%', bottom: '8px', zIndex: '10' }, 5.5)
            .fromTo('#card-0', { width: '80%', bottom: '8px' }, { width: '80%', bottom: '8px', opacity: 0, ease: "power1.out" }, 7.5)
            .fromTo('#card-0', { width: '98%', bottom: '-200px', opacity: 1, zIndex: 30 }, { width: '94%', bottom: '-8px', opacity: 1, zIndex: '30' }, 8);
    
            tl
            .fromTo('#card-1', { width: '88%', bottom: '0px', zIndex: '20' }, { width: '80%', bottom: '8px', zIndex: '10' }, 2.5)
            .fromTo('#card-1', { width: '80%', bottom: '8px', zIndex: '10' }, { width: '80%', bottom: '8px', opacity: 0, ease: "power1.out" }, 5)
            .fromTo('#card-1', { width: '98%', bottom: '-200px', opacity: 1, zIndex: '30' }, { width: '94%', bottom: '-8px', opacity: 1, zIndex: '30' }, 5.5)
            .fromTo('#card-1', { width: '94%', bottom: '-8px' }, { width: '88%', bottom: '0px', zIndex: '20' }, 8);
    
            tl
            .fromTo('#card-2', { width: '80%', bottom: '8px', zIndex: '10' }, {  width: '80%', bottom: '8px', zIndex: '10', opacity: 0, ease: "power1.out" }, 2.5)
            .fromTo('#card-2', { width: '98%', bottom: '-200px', opacity: 1, zIndex: '30' }, { width: '94%', bottom: '-8px', opacity: 1, zIndex: '30' }, 2.7)
            .fromTo('#card-2', { width: '94%', bottom: '-8px' }, { width: '88%', bottom: '0px', zIndex: '20' }, 5.5)
            .fromTo('#card-2', { width: '88%', bottom: '0px' }, { width: '80%', bottom: '8px', zIndex: '10'}, 8);
        }

    }, []);

    return (
        <div className="vertical-carousel relative flex flex-col items-center">
            {
                cards.map((card, i) => {
                    return (
                        <div
                        id={'card-' + i}
                        key={i}
                        className=" border border-white">
                            <span>
                                Advanced screening
                            </span>
                            <span>
                                Multi-stage filtration removes contaminants and prepares wastewater for biological treatment.
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}