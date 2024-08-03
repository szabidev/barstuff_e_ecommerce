"use client";

import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ slides }: { slides: any }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla w-full border border-red-500" ref={emblaRef}>
      <div className="embla__container">
        {slides!.map((slide: any, index: number) => (
          <div className="embla_slide">{index}</div>
        ))}
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};

export default Carousel;
