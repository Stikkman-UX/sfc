'use client'
import { useEffect } from "react";
import gsap from "gsap";

import { ContactCallSvg } from "@/app/common/commonsvg";

interface PerkCardProps {
  data: {
    id: string;
    logo: React.JSX.Element;
    title: string;
    desc: string;
  };
}

export const PerksCarousel = () => {

  useEffect(() => {
        const mm = gsap.matchMedia();
    
        mm.add(
          {
            isMobile: "(min-width: 360px) and (max-width: 1023px)",
            isDesktop: "(min-width: 1024px)",
          },
          (context) => {
            const conditions = context.conditions || {};
            const isMobile = conditions.isMobile ?? false;
            const isDesktop = conditions.isDesktop ?? false;
    
            if (isDesktop) {
              const inactive2 = document.querySelectorAll('.perk-inactive-2') as NodeListOf<HTMLDivElement>;
              const inactive1 = document.querySelectorAll('.perk-inactive-1') as NodeListOf<HTMLDivElement>;
              const active = document.querySelectorAll('.perk-active') as NodeListOf<HTMLDivElement>;
              const inactive3 = document.querySelectorAll('.perk-inactive-3') as NodeListOf<HTMLDivElement>;
              const inactive4 = document.querySelectorAll('.perk-inactive-4') as NodeListOf<HTMLDivElement>;

              const tl1 = gsap.timeline({ repeat: -1 });
              const tl2 = gsap.timeline({ repeat: -1 });

              const container1 = document.querySelector('.slide-container-1') as HTMLDivElement;
              // const container2 = document.querySelector('.slide-container-2') as HTMLDivElement;
              const width1 = container1.clientWidth / 5;
              // const width2 = container2.clientWidth / 5;

              function changeclass() {
                  inactive2.forEach(el => {
                    console.log('wtf1', el)
                      el.classList.remove('perk-inactive-2');
                      el.classList.add('perk-inactive-4');
                  });
                  inactive1.forEach(el => {
                    console.log('wtf2', el)
                      el.classList.remove('perk-inactive-1');
                      el.classList.add('perk-inactive-2');
                  });
                  active.forEach(el => {
                    console.log('wtf3', el)
                      el.classList.remove('perk-active');
                      el.classList.add('perk-inactive-1');
                  });
                  inactive3.forEach(el => {
                    console.log('wtf4', el)
                      el.classList.remove('perk-inactive-3');
                      el.classList.add('perk-active');
                  });
                  inactive4.forEach(el => {
                    console.log('wtf5', el)
                      el.classList.remove('perk-inactive-4');
                      el.classList.add('perk-inactive-3');
                  });
              }

              tl1
              .to('.slide-container-1', {
                  x: `-=${width1}`,
                  onStart: () => { changeclass() },
                  duration: 1
              }, '+=1.5')
              .to('.slide-container-1', {
                  x: `-=${width1}`,
                  onStart: () => { changeclass() },
                  duration: 1
              }, '+=1.5')
              .to('.slide-container-1', {
                  x: `-=${width1}`,
                  onStart: () => { changeclass() },
                  duration: 1
              }, '+=1.5')
              .to('.slide-container-1', {
                  x: `-=${width1}`,
                  onStart: () => { changeclass() },
                  duration: 1
              }, '+=1.5')
              .to('.slide-container-1', {
                  x: `-=${width1}`,
                  onStart: () => {
                      changeclass()
                  },
                  duration: 1
              }, '+=1.5')
              .to('.slide-container-1', { x: 0, duration: 0 });

              tl2
              .to('.slide-container-2', { x: `-=${width1}`, duration: 1 }, '+=1.5')
              .to('.slide-container-2', { x: `-=${width1}`, duration: 1 }, '+=1.5')
              .to('.slide-container-2', { x: `-=${width1}`, duration: 1 }, '+=1.5')
              .to('.slide-container-2', { x: `-=${width1}`, duration: 1 }, '+=1.5')
              .to('.slide-container-2', { x: `-=${width1}`, duration: 1 }, '+=1.5')
              .to('.slide-container-2', { x: 0, duration: 0 })
              }
            }
          );
  }, []);

  const PerkCard = ({ data }: PerkCardProps) => {
    const { id, logo, title, desc } = data;

    return (
      <div
        className={`${id} perk-shadow w-[250px] lg:w-[300px] shrink-0 flex flex-col items-center gap-6 bg-[rgba(249,249,249,1)] text-[15px] text-center rounded-tl-[22px] rounded-br-[22px] px-6 lg:px-8 py-4 lg:py-6`}
      >
        <div className="bg-[rgba(0,168,73,0.1)] rounded-[21px] p-3">
          {logo}
        </div>
        <span className="text-[rgba(0,89,69,1)]">{title}</span>
        <span className="text-[rgba(74,85,101,1)]">{desc}</span>
      </div>
    );
  };

  const SlideContainer = ({ id }: { id: string }) => {
    return (
      <div
        className={`${id} ${
          id === "slide-container-2" ? "hidden lg:flex" : ""
        } disable-scrollbar perks-carousel-container min-w-fit w-full shrink-0 flex justify-between gap-4 lg:gap-0`}
      >
        <PerkCard
          data={{
            id: "perk-inactive-2",
            logo: <ContactCallSvg />,
            title: "Perk A",
            desc: "Flexible working arrangements and generous leave policies",
          }}
        />
        <PerkCard
          data={{
            id: "perk-inactive-1",
            logo: <ContactCallSvg />,
            title: "Perk B",
            desc: "Collaborative and inclusive work culture",
          }}
        />
        <PerkCard
          data={{
            id: "perk-active",
            logo: <ContactCallSvg />,
            title: "Perk C",
            desc: "Health and wellness benefits to support you",
          }}
        />
        <PerkCard
          data={{
            id: "perk-inactive-3",
            logo: <ContactCallSvg />,
            title: "Perk D",
            desc: "Continuous learning and upskilling programs",
          }}
        />
        <PerkCard
          data={{
            id: "perk-inactive-4",
            logo: <ContactCallSvg />,
            title: "Perk E",
            desc: "Recognition and reward programs",
          }}
        />
      </div>
    );
  };

  return (
    <>
      <div className="disable-scrollbar flex py-10 sm:py-16 lg:py-24 overflow-x-auto px-4 sm:px-10 lg:px-0 lg:overflow-hidden">
        <SlideContainer id="slide-container-1" />
        <SlideContainer id="slide-container-2" />
      </div>
    </>
  );
};