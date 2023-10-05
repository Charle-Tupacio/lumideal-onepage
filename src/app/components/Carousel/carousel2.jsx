"use client";
import React from "react";
import { Carousel } from "flowbite-react";

const customTheme = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    snap: "snap-x",
  },
};

function Carousel2() {
  return (
    <>
      <div className="h-[600px] w-full">
        <Carousel slide={true} pauseOnHove theme={customTheme}>
          <img
            src="/pic-section-4/img-1.png"
            alt="imagen-1"
            className="w-full h-full object-cover "
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
        </Carousel>
      </div>
    </>
  );
}

export default Carousel2;
