"use client";

import { useAppProvider } from "@/app/app-provider";
import Carousel from "@/app/components/carousel";
import TechniquesSlides from "@/app/components/slides/techniques-slide/techniques-slide";

const ToolsAndTechniques = () => {
  const { courses } = useAppProvider();
  const { tools_and_techniques } = courses;
  console.log(tools_and_techniques, "tools_and_techniques");
  const tools = tools_and_techniques.subsections[0].tools;
  const toolsHeader = {
    title: tools_and_techniques.subsections[0]?.title,
    description: tools_and_techniques.subsections[0]?.description,
  };
  const techniques = tools_and_techniques.subsections[1]?.techniques;
  const techniquesHeader = {
    title: tools_and_techniques.subsections[1]?.title,
    description: tools_and_techniques.subsections[1]?.description,
  };

  const allSlides = [toolsHeader, ...tools, techniquesHeader, ...techniques];

  // // console.log(dynamicSlides, "dynamicSlides");
  // console.log(tools, "tools");
  // console.log(techniques, "techniques");
  // console.log(toolsHeader, "toolsHeader");
  // console.log(technuquesHeader, "technuquesHeader");
  console.log(allSlides, "allSlides");

  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-2 w-full max-w-[96rem] mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl text-center py-4 text-gray-700 dark:text-gray-200">
            {tools_and_techniques?.title}
          </h1>
        </div>
        <div className="relative bg-beige dark:bg-slate-800 shadow-lg rounded-lg mb-8">
          {/* {tools_and_techniques?.subsections?.length > 0 && (
            <Carousel
              title={tools_and_techniques.title}
              description={tools_and_techniques.description}
              dynamicSlides={allSlides}
              SlideComponent={TechniquesSlides}
              chapter={"chapter 2"}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTechniques;
