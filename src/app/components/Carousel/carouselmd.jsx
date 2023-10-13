"use client";
import { Carousel } from "flowbite-react";
import { customTheme } from "./carouselmd";

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
