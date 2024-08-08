import { useAppProvider } from "@/app/app-provider";
import React from "react";

const OriginsOfFermentation = () => {
  const { courses } = useAppProvider();
  const { origins_of_fermentation } = courses.history;

  console.log(courses, "courses");
  return (
    <div className="mb-8 py-4 pr-10 pl-14">
      <p className="mb-8 text-right text-font-dark text-2xl leading-relaxed dark:text-gray-200">
        {origins_of_fermentation.title}
      </p>
      <p className="px-12 mb-8 text-font-dark text-md leading-relaxed dark:text-gray-200 w-[90%] m-auto">
        {origins_of_fermentation.description}
      </p>
      <div>
        {origins_of_fermentation.key_findings.map(
          (keyFinding: any, index: number) => (
            <div
              key={index}
              className="pl-12 text-font-dark dark:text-gray-200"
            >
              <div className="mb-6 text-xl tracking-widest mt-10 flex justify-between items-center ">
                <h3 className="border border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md py-0.25 px-2">
                  {keyFinding.region}
                </h3>
                <p className="border border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md py-0.25 px-2">
                  {keyFinding.date}
                </p>
              </div>
              <p className="tracking-wide text-md">{keyFinding.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OriginsOfFermentation;
