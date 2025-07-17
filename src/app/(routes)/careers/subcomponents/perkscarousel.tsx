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
        isMobile: "(min-width: 360px) and (max-width: 640px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        const { isDesktop } = context.conditions || {};

        if (isDesktop) {
          const container1 = document.querySelector(".slide-container-1") as HTMLElement;
          const container2 = document.querySelector(".slide-container-2") as HTMLElement;

          const slideWidth = container1.scrollWidth;

          gsap.set(container2, { x: slideWidth });

          const loop = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

          loop.to([container1, container2], {
            x: `-=${slideWidth}`,
            duration: 10,
            modifiers: {
              x: gsap.utils.unitize((x) => parseFloat(x) % slideWidth),
            },
            onRepeat: () => {
              changeclass();
            },
          });
        }
      }
    );

    function changeclass() {
      const inactive2 = document.querySelectorAll('.perk-inactive-2');
      const inactive1 = document.querySelectorAll('.perk-inactive-1');
      const active = document.querySelectorAll('.perk-active');
      const inactive3 = document.querySelectorAll('.perk-inactive-3');
      const inactive4 = document.querySelectorAll('.perk-inactive-4');

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
  }, []);

  const PerkCard = ({ data }: PerkCardProps) => {
    const { id, logo, title, desc } = data;

    return (
      <div
        className={`${id} perk-shadow w-[300px] shrink-0 flex flex-col items-center gap-6 bg-[rgba(249,249,249,1)] text-[15px] text-center rounded-tl-[22px] rounded-br-[22px] px-8 py-6`}
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
          id === "slide-container-2" ? "hidden sm:flex" : ""
        } disable-scrollbar min-w-fit w-full shrink-0 flex justify-between gap-4`}
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
    <div className="flex pt-20 pb-10 overflow-x-auto sm:overflow-hidden">
      <SlideContainer id="slide-container-1" />
      <SlideContainer id="slide-container-2" />
    </div>
  );
};
