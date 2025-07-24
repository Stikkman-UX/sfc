"use client";
import { PerksCarousel } from "./perkscarousel";
import { PerksSlider } from "./perksslider";

export const Join = () => {
  return (
    <div className="gsap-fade-in py-20">
      <div className="w-11/12 sm:w-10/12 lg:w-[760px] flex flex-col sm:items-center gap-1 text-start sm:text-center mx-auto">
        <h2 className="w-fit text-[22px] md:text-[32px] text-[rgba(25,169,72,1)]">
          <span className="text-[rgba(0,89,67,1)]">Why</span> join SFC?
        </h2>
        <p className="font-normal md:text-lg text-[rgba(74,85,101,1)] pb-10">
          If you are passionate about environmental conservation, innovation,
          and making a positive impact on society, we invite you to explore
          career opportunities at SFC Environmental Technologies. Join us in
          shaping a sustainable future for generations to come.
        </p>
      </div>
      {/* <PerksCarousel /> */}
      <PerksSlider/>
    </div>
  );
};
