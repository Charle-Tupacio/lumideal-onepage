import React from "react";

function Section4() {
  return (
    <div>
      <section className="bg-blue-600">
        <div className="flex w-full md:justify-center h-[600px] max-md:h-[50vh] md:columns-3  max-md:overflow-x-scroll scroll-auto">
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
