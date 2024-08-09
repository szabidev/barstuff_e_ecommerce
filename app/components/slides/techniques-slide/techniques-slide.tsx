import React from "react";

const TechniquesSlides = ({ slide }: { slide: any }) => {
  console.log(slide, "slide");
  return (
    <div className="mb-8 py-4 pr-10 pl-14">
      {slide.title.length !== 0 ? (
        <div className="mb-6 mt-10">
          <h3 className="w-fit border text-2xl tracking-wider border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md pt-0.25 pb-0.5 px-2">
            {""}
          </h3>
          <p className="border border-font-dark text-xl tracking-wide text-beige bg-font-dark py-0.25 px-2">
            {""}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default TechniquesSlides;
