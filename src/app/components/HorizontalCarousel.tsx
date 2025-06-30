'use client'
import { useEffect } from "react";
import { NewsSvg1 } from "./commonsvg";
import gsap from "gsap";

interface Card {
    id: string;
    icon: React.JSX.Element;
    value: string;
    title: string;
    subtitle: string;
}

export const HorizontalCarousel = () => {

    useEffect(() => {
        const tl1 = gsap.timeline({ repeat: -1 });
        const tl2 = gsap.timeline({ repeat: -1 });

        const container1 = document.querySelector('.slide-container-1') as HTMLDivElement;
        // const container2 = document.querySelector('.slide-container-2') as HTMLDivElement;
        const width1 = container1.clientWidth / 5;
        // const width2 = container2.clientWidth / 5;

        function changeclass() {
            const inactive2 = document.querySelectorAll('.inactive-slide-2') as NodeListOf<HTMLDivElement>;
            const inactive1 = document.querySelectorAll('.inactive-slide-1') as NodeListOf<HTMLDivElement>;
            const active = document.querySelectorAll('.active-slide') as NodeListOf<HTMLDivElement>;
            const inactive3 = document.querySelectorAll('.inactive-slide-3') as NodeListOf<HTMLDivElement>;
            const inactive4 = document.querySelectorAll('.inactive-slide-4') as NodeListOf<HTMLDivElement>;

            inactive2.forEach(el => {
                el.classList.remove('inactive-slide-2');
                el.classList.add('inactive-slide-4');
            });
            inactive1.forEach(el => {
                el.classList.remove('inactive-slide-1');
                el.classList.add('inactive-slide-2');
            });
            active.forEach(el => {
                el.classList.remove('active-slide');
                el.classList.add('inactive-slide-1');
            });
            inactive3.forEach(el => {
                el.classList.remove('inactive-slide-3');
                el.classList.add('active-slide');
            });
            inactive4.forEach(el => {
                el.classList.remove('inactive-slide-4');
                el.classList.add('inactive-slide-3');
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
    }, [])

    const Card = ({ id, icon, value, title, subtitle }: Card) => {
        return (
            <div className={`${ id } w-full flex flex-col items-center gap-3 text-center text-white px-2`}>
                <div className="w-fit bg-[rgba(243,244,246,0.17)] rounded-[17px] p-4">
                    { icon }
                </div>
                <span className="font-bold text-[39px]">
                    { value }
                </span>
                <div className="grid">
                    <span className="font-semibold text-[17.5]">
                        { title }
                    </span>
                    <span className="font-normal text-[15px]">
                        { subtitle }
                    </span>
                </div>
            </div>
        )
    }

    const SlideContainer = ({ id }: { id: string }) => {
        return (
            <div className={`${id} w-full shrink-0 flex justify-between`}>
                <Card
                id="inactive-slide-2"
                icon={<NewsSvg1/>}
                value="25+"
                title="EPC Partners"
                subtitle="Leading engineering companies"/>
                <Card
                id="inactive-slide-1"
                icon={<NewsSvg1/>}
                value="10M+"
                title="Lives Served"
                subtitle="Daily treatment capacity"/>
                <Card
                id="active-slide"
                icon={<NewsSvg1/>}
                value="25+"
                title="EPC Partners"
                subtitle="Leading engineering companies"/>
                <Card
                id="inactive-slide-3"
                icon={<NewsSvg1/>}
                value="10M+"
                title="Lives Served"
                subtitle="Daily treatment capacity"/>
                <Card
                id="inactive-slide-4"
                icon={<NewsSvg1/>}
                value="25+"
                title="EPC Partners"
                subtitle="Leading engineering companies"/>
            </div>
        )
    }

    return (
        <div className="flex mt-40 mb-10">
            <SlideContainer id="slide-container-1"/>
            <SlideContainer id="slide-container-2"/>
        </div>
    )
}