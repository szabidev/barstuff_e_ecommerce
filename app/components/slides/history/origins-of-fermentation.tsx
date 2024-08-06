import { useAppProvider } from "@/app/app-provider";
import React from "react";

const OriginsOfFermentation = () => {
  const { courses } = useAppProvider();
  const { origins_of_fermentation } = courses.history;

  console.log(courses, "courses");
  return (
    <div className="mb-8">
      <h2>{origins_of_fermentation.title}</h2>
      <p className="px-12 italic text-gray-600 dark:text-gray-200">
        {origins_of_fermentation.description}
      </p>
      <div>
        {origins_of_fermentation.key_findings.map(
          (keyFinding: any, index: number) => (
            <div key={index}>
              <h3>{keyFinding.region}</h3>
              <p>{keyFinding.date}</p>
              <p>{keyFinding.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OriginsOfFermentation;
