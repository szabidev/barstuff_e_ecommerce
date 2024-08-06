"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import OriginsOfFermentation from "./slides/history/origins-of-fermentation";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const Carousel = ({ slides }: { slides: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla  w-full border border-red-500">
      <div className="embla__viewport w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container h-full flex ">
          <div className="embla__slide flex-none w-full min-w-0">
            <OriginsOfFermentation />1
          </div>
          <div className="embla__slide flex-none w-full min-w-0">
            <OriginsOfFermentation />2
          </div>
          <div className="embla__slide flex-none w-full min-w-0">
            <OriginsOfFermentation />3
          </div>
          <div className="embla__slide flex-none w-full min-w-0">
            <OriginsOfFermentation />4
          </div>
          <div className="embla__slide flex-none w-full min-w-0">
            <OriginsOfFermentation />5
          </div>
          <div className="embla__slide flex-none w-full min-w-0">
            <OriginsOfFermentation />6
          </div>
        </div>
      </div>
      <div className=" flex justify-end pb-4 pr-4">
        <button className="embla__prev" onClick={scrollPrev}>
          <FaChevronCircleLeft
            size={50}
            className="hover:scale-110 hover:duration-300 hover:ease-in-out"
          />
        </button>
        <button className="embla__next ml-6 " onClick={scrollNext}>
          <FaChevronCircleRight
            size={50}
            className="hover:scale-110 hover:duration-300 hover:ease-in-out"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
