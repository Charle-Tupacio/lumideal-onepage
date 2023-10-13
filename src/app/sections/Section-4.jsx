import React from "react";

function Section4() {
  return (
    <div className=" max-md:hidden">
      <section className="">
        <div className="flex w-full justify-center h-[600px] columns-3  overflow-x-scroll scroll-auto">
          <img
            src="/pic-section-4/img-1.png"
            alt="imagen-1"
            className="md:w-1/3 w-[300px]"
          />
          <img
            src="/pic-section-4/img-2.png"
            alt="imagen-2"
            className="md:w-1/3 w-[300px]"
          />
          <img
            src="/pic-section-4/img-3.png"
            alt="imagen-3"
            className="md:w-1/3 w-[300px] "
          />
        </div>
      </section>
    </div>
  );
}

export default Section4;
