"use client";

import { useAppProvider } from "@/app/app-provider";
import Carousel from "@/app/components/carousel";

const ToolsAndTechniques = () => {
  const { courses } = useAppProvider();
  const { tools_and_techniques } = courses;
  console.log(courses, "courses");
  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-2 w-full max-w-[96rem] mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl text-center py-4 text-gray-700 dark:text-gray-200">
            {tools_and_techniques.title}
          </h1>
        </div>
        <div className="relative bg-beige dark:bg-slate-800 shadow-lg rounded-lg mb-8">
          {/*  TODO: Add some sort of logic that tracks progress.  */}
          {/* TODO: Add quiz section to the end of the chapters, with question from current chapter */}
          {/* <Carousel /> */}
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTechniques;
