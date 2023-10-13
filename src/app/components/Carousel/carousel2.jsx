"use client";
import React from "react";
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
};

function Carousel2() {
  return (
    <>
      <div className="h-[500px] max-md:hidden w-full bg-[#E6E0DC] bg-repeat bg-[url('img/bg-patron-sec5.png')] bg-[length:100px_100px] bg-fixed">
        <Carousel slide={true} theme={customTheme}>
          <div className="flex  w-full h-full">
            <img
              src="/pic-section-4/img-1.png"
              alt="imagen-1"
              className="w-1/3  h-full object-cover "
            />
            <img
              src="/pic-section-4/img-2.png"
              alt="imagen-2"
              className="w-1/3 h-full object-cover"
            />
            <img
              src="/pic-section-4/img-3.png"
              alt="imagen-3"
              className="w-1/3 h-full object-cover"
            />
          </div>
          <div className="flex  w-full h-full">
            <img
              src="/pic-formu/img-formu.png"
              alt="imagen-3"
              className="w-1/3 h-full object-cover"
            />
            <img
              src="/pic-section-4/img-4.jpeg"
              alt="imagen-3"
              className="w-1/3 h-full object-cover"
            />
            <img
              src="/pic-section-4/img-5.jpeg"
              alt="imagen-3"
              className="w-1/3 h-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Carousel2;
