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
    }
}

export const PerksCarousel = () => {

    useEffect(() => {

        const mm = gsap.matchMedia();

        mm.add(
            {
              isMobile: "(min-width: 360px) and (max-width: 640px)",
              isDesktop: "(min-width: 640px)",
            },
            (context) => {
              const conditions = context.conditions || {};
              const isMobile = conditions.isMobile ?? false;
              const isDesktop = conditions.isDesktop ?? false;

                if(isDesktop){
                                  const tl1 = gsap.timeline({ repeat: -1 });
              const tl2 = gsap.timeline({ repeat: -1 });
      
              const container1 = document.querySelector('.slide-container-1') as HTMLDivElement;
              // const container2 = document.querySelector('.slide-container-2') as HTMLDivElement;
              const width1 = container1.scrollWidth / 5;
              // const width2 = container2.clientWidth / 5;
      
              function changeclass() {
                  const inactive2 = document.querySelectorAll('.perk-inactive-2') as NodeListOf<HTMLDivElement>;
                  const inactive1 = document.querySelectorAll('.perk-inactive-1') as NodeListOf<HTMLDivElement>;
                  const active = document.querySelectorAll('.perk-active') as NodeListOf<HTMLDivElement>;
                  const inactive3 = document.querySelectorAll('.perk-inactive-3') as NodeListOf<HTMLDivElement>;
                  const inactive4 = document.querySelectorAll('.perk-inactive-4') as NodeListOf<HTMLDivElement>;
      
                  inactive2.forEach(el => {
                      el.classList.remove('perk-inactive-2');
                      el.classList.add('perk-inactive-4');
                  });
                  inactive1.forEach(el => {
                      el.classList.remove('perk-inactive-1');
                      el.classList.add('perk-inactive-2');
                  });
                  active.forEach(el => {
                      el.classList.remove('perk-active');
                      el.classList.add('perk-inactive-1');
                  });
                  inactive3.forEach(el => {
                      el.classList.remove('perk-inactive-3');
                      el.classList.add('perk-active');
                  });
                  inactive4.forEach(el => {
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

    }, [])

    const PerkCard = ({ data }: PerkCardProps) => {
        const { id,logo, title, desc } = data;

        return (
            <div className={`${ id } perk-shadow w-[300px] shrink-0 flex flex-col items-center gap-6 bg-[rgba(249,249,249,1)] text-[15px] text-center rounded-tl-[22px] rounded-br-[22px] px-8 py-6`}>
                <div className="bg-[rgba(0,168,73,0.1)] rounded-[21px] p-3">
                    { logo }
                </div>
                <span className="text-[rgba(0,89,69,1)]">
                    { title }
                </span>
                <span className="text-[rgba(74,85,101,1)]">
                    { desc }
                </span>
            </div>
        )
    }

    const SlideContainer = ({ id }: { id: string }) => {
        return (
            <div className={`${id} ${ id === 'slide-container-2' && 'hidden' } disable-scrollbar min-w-fit w-full shrink-0 flex justify-between`}>
                <PerkCard
                data={{
                    id: "perk-inactive-2",
                    logo: <ContactCallSvg/>,
                    title: "Work-Life Balance",
                    desc: "Flexible working arrangements and generous leave policies"
                }}/>
                <PerkCard
                data={{
                    id: "perk-inactive-1",
                    logo: <ContactCallSvg/>,
                    title: "Work-Life Balance",
                    desc: "Flexible working arrangements and generous leave policies"
                }}/>
                <PerkCard
                data={{
                    id: "perk-active",
                    logo: <ContactCallSvg/>,
                    title: "Work-Life Balance",
                    desc: "Flexible working arrangements and generous leave policies"
                }}/>
                <PerkCard
                data={{
                    id: "perk-inactive-3",
                    logo: <ContactCallSvg/>,
                    title: "Work-Life Balance",
                    desc: "Flexible working arrangements and generous leave policies"
                }}/>
                <PerkCard
                data={{
                    id: "perk-inactive-4",
                    logo: <ContactCallSvg/>,
                    title: "Work-Life Balance",
                    desc: "Flexible working arrangements and generous leave policies"
                }}/>
            </div>
        )
    }

    return (
        <div className="flex pt-20 pb-10 overflow-x-auto sm:overflow-hidden">
            <SlideContainer id="slide-container-1"/>
            <SlideContainer id="slide-container-2"/>
        </div>
    )
}