"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import OriginsOfFermentation from "./slides/history/origins-of-fermentation";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { useAppProvider } from "../app-provider";
import HistoryDescriptionSlide from "./slides/history/history-description-slide";
import HistorySlides from "./slides/history/history-slides";

const Carousel = () => {
  const { courses } = useAppProvider();
  const { history } = courses;
  const { introduction } = history;
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const entries = Object.entries(history);
  const dynamicSlides = entries.slice(2).map(([key, value]) => value);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-full">
      <div className="h-full w-20 bg-font-dark flex flex-col justify-between items-end py-8 absolute top-0 rounded-tl-lg rounded-bl-lg z-20">
        <p className="vertical-rl font-mono transform origin-center  -rotate-180 text-beige  text-lg tracking-widest">
          history of alcohol
        </p>
        <p className="vertical-rl font-mono transform origin-center  -rotate-180 text-beige text-lg tracking-widest">
          Chapter 1
        </p>
      </div>
      <div
        className="embla__viewport p-4 w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container h-[600px] flex ">
          {/* // ! Main chapter slide */}
          <div className="embla__slide flex-none w-full min-w-0">
            <div className="h-full flex w-full justify-center items-center">
              <div className="w-2/3">
                <h1 className="text-font-dark text-3xl tracking-wide leading-loose">
                  Let's learn about the history of alcohol.
                </h1>
                <h1 className="text-font-dark text-3xl tracking-wide leading-loose">
                  This chapter will take you through the origins of alcohol, its
                  development and its influence in the world
                </h1>
              </div>
            </div>
          </div>
          <div className="embla__slide flex-none w-full min-w-0">
            <HistoryDescriptionSlide
              description={introduction.description}
              image_url="/images/course/alcohol_history_main.jpg"
            />
          </div>
          {/* // ! Origins of fermentation */}
          <div className="embla__slide flex-none w-full min-w-0">
            <OriginsOfFermentation />
          </div>
          {/* // ! Dynamic slides */}
          {dynamicSlides.map((slide: any, index: number) => (
            <div key={index} className="embla__slide flex-none w-full min-w-0">
              <HistorySlides slide={slide} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end pb-8 pr-12">
        <button className="embla__prev" onClick={scrollPrev}>
          <FaChevronCircleLeft
            size={50}
            className="hover:scale-110 hover:duration-300 hover:ease-in-out"
            color="#1e1e1e"
          />
        </button>
        <button className="embla__next ml-6 " onClick={scrollNext}>
          <FaChevronCircleRight
            size={50}
            className="hover:scale-110 hover:duration-300 hover:ease-in-out"
            color="#1e1e1e"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
