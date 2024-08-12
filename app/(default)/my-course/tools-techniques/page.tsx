"use client";

import { useAppProvider } from "@/app/app-provider";
import Carousel from "@/app/components/carousel";
import TechniquesSlides from "@/app/components/slides/techniques-slide/techniques-slide";

const tool_url: { [key: string]: string } = {
  "Boston Shaker": "/images/course/boston-shaker.jpg",
  "Cobbler Shaker": "/images/course/cobbler-shaker.jpg",
  "Standard Jigger": "/images/course/standard-jigger.jpeg",
  "Japanese Jigger": "/images/course/japanese-jigger.jpg",
  "Hawthorne Strainer": "/images/course/hawthorne-strainer.jpg",
  "Fine Mesh Strainer": "/images/course/fine-strainer.jpg",
  "Wooden Muddler": "/images/course/wooden-muddler.jpg",
  "Plastic Muddler": "/images/course/plastic-muddler.jpg",
  "Standard Bar Spoon": "/images/course/bar-spoon.jpg",
  "Standard Mixing Glass": "/images/course/mixing-glass.jpg",
  "Standard Peeler": "/images/course/peeler.jpg",
  "Ice Scoop": "/images/course/ice-scoop.jpg",
  "Ice Tongs": "/images/course/ice-tongs.jpg",
};

const ToolsAndTechniques = () => {
  const { courses } = useAppProvider();
  console.log(courses, "courses");

  const { tools_and_techniques } = courses;
  console.log(tools_and_techniques, "tools_and_techniques");
  const tools = tools_and_techniques?.subsections[0]?.tools;
  const toolsWithImage = tools?.map((tool) => ({
    ...tool,
    types: tool?.types?.map((type) => ({
      ...type,
      image_url: tool_url[type.name] || "",
    })),
  }));
  const toolsHeader = {
    title: tools_and_techniques?.subsections[0]?.title,
    description: tools_and_techniques?.subsections[0]?.description,
  };
  const techniques = tools_and_techniques?.subsections[1]?.techniques;
  const techniquesHeader = {
    title: tools_and_techniques?.subsections[1]?.title,
    description: tools_and_techniques?.subsections[1]?.description,
  };

  const allSlides = [
    toolsHeader,
    ...toolsWithImage,
    techniquesHeader,
    ...techniques,
  ];
  console.log(tools, "tools");
  console.log(toolsWithImage, "toolsWithImage");

  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-2 w-full max-w-[96rem] mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl text-center py-4 text-font-dark dark:text-gray-200">
            {tools_and_techniques?.title}
          </h1>
        </div>
        <div className="relative bg-beige dark:bg-slate-800 shadow-lg rounded-lg mb-8">
          <Carousel
            title={tools_and_techniques.title}
            description={tools_and_techniques.description}
            SlideComponent={TechniquesSlides}
            dynamicSlides={allSlides}
            chapter={"chapter 2"}
            mainImage={"/images/course/tools_main.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTechniques;
