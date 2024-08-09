"use client";

import React, { ReactNode, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { useAppProvider } from "../app-provider";
import HistorySlides from "./slides/history/history-slides";
import DescriptionSlide from "./slides/description-slide";
import TitleSlide from "./slides/title-slide";

export interface CarouselProps {
  title: any;
  description: string;
  SlideComponent: any;
  dynamicSlides: any;
  chapter: string;
}

const Carousel = ({
  title,
  chapter,
  description,
  SlideComponent,
  dynamicSlides,
}: CarouselProps) => {
  // const { courses } = useAppProvider();
  // const { history } = courses;
  // const { introduction } = history;
  const [emblaRef, emblaApi] = useEmblaCarousel();

  // const entries = Object.entries(content);
  // const dynamicSlides = entries.slice(1).map(([key, value]) => value);
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
          {title
            .replace("Introduction to the" || "The", "")
            .toLocaleLowerCase()}
        </p>
        <p className="vertical-rl font-mono transform origin-center  -rotate-180 text-beige text-lg tracking-widest">
          {chapter}
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
              <div className="w-3/4">
                <TitleSlide title={title} />
              </div>
            </div>
          </div>
          <div className="embla__slide flex-none w-full min-w-0">
            <DescriptionSlide
              description={description}
              image_url={"/images/course/alcohol_history_main.jpg" || ""}
            />
          </div>
          {/* // ! Dynamic slides */}
          {dynamicSlides.map((slide: any, index: number) => (
            <div key={index} className="embla__slide flex-none w-full min-w-0">
              <SlideComponent slide={slide} />
            </div>
          ))}
          <div className="embla__slide flex-none w-full min-w-0">
            <div className="mb-8 py-4 pr-10 pl-14">
              <div className="mt-16">
                <h1 className="text-5xl text-center text-font-dark tracking-wide">
                  Finished {chapter}
                </h1>
                <p className="text-center">Style further</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-4 pb-8 pr-12">
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
