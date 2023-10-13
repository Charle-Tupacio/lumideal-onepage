"use client";
import { Carousel } from "flowbite-react";

const customTheme = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    snap: "snap-x",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center",
  },
  // "base": "absolute top-1/2 left-0 block w-full -translate-y-1/2",
  // "wrapper": "w-3/4 flex-shrink-0 transform cursor-grab snap-center"
};

function Carouselmd() {
  return (
    <div>
      <div className="h-[500px] md:hidden w-full">
        <Carousel slide={true} theme={customTheme}>
          <img
            src="/pic-section-4/img-1.png"
            alt="imagen-1"
            className="w-full  h-full object-cover "
          />
          <img
            src="/pic-section-4/img-2.png"
            alt="imagen-2"
            className="w-full h-full object-cover"
          />
          <img
            src="/pic-section-4/img-3.png"
            alt="imagen-3"
            className="w-full h-full object-cover"
          />
          <img
            src="/pic-formu/img-formu.png"
            alt="imagen-3"
            className="w-full h-full object-cover"
          />
          <img
            src="/pic-section-1/bg-section1.png"
            alt="imagen-3"
            className="w-full h-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Carouselmd;
