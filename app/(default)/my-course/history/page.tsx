"use client";

import { useAppProvider } from "@/app/app-provider";
import Carousel from "@/app/components/carousel";
import HistorySlides from "@/app/components/slides/history/history-slides";

const History = () => {
  const { courses } = useAppProvider();
  const { history } = courses;
  console.log(courses, "courses");

  const entries = Object.entries(history);
  const dynamicSlides = entries.slice(1).map(([key, value]) => value);
  console.log(dynamicSlides, "dynamicSlides");
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-2 w-full max-w-[96rem] mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl text-center py-4 text-font-dark dark:text-gray-200">
            {history.introduction.title}
          </h1>
        </div>
        <div className="relative bg-beige dark:bg-slate-800 shadow-lg rounded-lg mb-8">
          {/*  TODO: Add some sort of logic that tracks progress.  */}
          {/* TODO: Add quiz section to the end of the chapters, with question from current chapter */}
          <Carousel
            title={history.introduction.title}
            description={history.introduction.description}
            SlideComponent={HistorySlides}
            dynamicSlides={dynamicSlides}
            chapter={"chapter 1"}
          />
        </div>
      </div>
    </div>
  );
};

export default History;
