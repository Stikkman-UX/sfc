'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import { NewsSvg1 } from './commonsvg';
import { Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

interface Card {
    id?: string;
    icon: React.JSX.Element;
    value: string;
    title: string;
    subtitle: string;
}

export const SwiperCarousel = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' })

    const Card = ({ id, icon, value, title, subtitle }: Card) => {
        return (
            <div className={`${ id } min-w-[100px] sm:min-w-[200px] w-fit h-full flex flex-col items-center gap-3 text-center text-white px-2`}>
                <div className="w-fit bg-[rgba(243,244,246,0.17)] rounded-[17px] p-3 sm:p-4">
                    { icon }
                </div>
                <span className="font-bold text-2xl sm:text-[39px]">
                    { value }
                </span>
                <div className="grid">
                    <span className="font-semibold sm:text-[17.5]">
                        { title }
                    </span>
                    <span className="font-normal text-[15px]">
                        { subtitle }
                    </span>
                </div>
            </div>
        )
    }
    

    return (
            <Swiper
            className='mySwiper'
            spaceBetween={50}
            slidesPerView={isDesktop ? 5 : 3}
            autoplay={{
                delay: 3000,
            }}
            loop={true}
            modules={[ Autoplay ]}
            centeredSlides={true}
            >
                <SwiperSlide>
                    <Card
                    // id="inactive-slide-2"
                    icon={<NewsSvg1/>}
                    value="20+"
                    title="Years of Experience"
                    subtitle=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    // id="inactive-slide-1"
                    icon={<NewsSvg1/>}
                    value="1,200+"
                    title="reference plants"
                    subtitle=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    // id="active-slide"
                    icon={<NewsSvg1/>}
                    value="650"
                    title="commissioned plants"
                    subtitle=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    // id="inactive-slide-3"
                    icon={<NewsSvg1/>}
                    value="12,000+"
                    title="MLD Cumulative Capacity"
                    subtitle=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    // id="inactive-slide-4"
                    icon={<NewsSvg1/>}
                    value="20+"
                    title="Years of Experience"
                    subtitle=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    // id="inactive-slide-2"
                    icon={<NewsSvg1/>}
                    value="20+"
                    title="Years of Experience"
                    subtitle=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    // id="inactive-slide-1"
                    icon={<NewsSvg1/>}
                    value="1,200+"
                    title="reference plants"
                    subtitle=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    // id="active-slide"
                    icon={<NewsSvg1/>}
                    value="650"
                    title="commissioned plants"
                    subtitle=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    // id="inactive-slide-3"
                    icon={<NewsSvg1/>}
                    value="12,000+"
                    title="MLD Cumulative Capacity"
                    subtitle=""/>
                </SwiperSlide>
            </Swiper>
    )
}