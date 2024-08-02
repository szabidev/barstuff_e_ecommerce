import React from "react";

import history from "../../../../public/json/history.json";

// TODO: Make a caroussel element for the sections
const History = () => {
  const { history_of_alcohol: historyOfAlcohol } = history;
  const {
    introduction,
    origins_of_fermentation: originsOfFermentation,
    ancient_civilizations: ancientCivilizations,
    medieval_period: medievalPeriod,
    renaissance_and_enlightenment: renaissanceAndEnlightment,
    xixth_century_developments: XIXCenturyDevelopments,
    modern_age: modernAge,
    global_perspectives: globalPerspectives,
    future_trends: futureTrends,
    glossary,
  } = historyOfAlcohol;
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <div className="p-4 bg-gray-200 dark:bg-slate-800 shadow-lg rounded-sm mb-8">
        <div className="mb-8">
          <h1 className="text-4xl text-center py-4 text-gray-700 dark:text-gray-200">
            {introduction.title}
          </h1>
          <p className="px-12 italic text-gray-600 dark:text-gray-200">
            {introduction.description}
          </p>
        </div>

        <div className="mb-8">
          <h2>{originsOfFermentation.title} - Chapter title</h2>
          <p className="px-12 italic text-gray-600 dark:text-gray-200">
            {originsOfFermentation.description}
          </p>
          <div>
            {originsOfFermentation.key_findings.map((keyFinding, index) => (
              <div key={index}>
                <h3>{keyFinding.region}</h3>
                <p>{keyFinding.date}</p>
                <p>{keyFinding.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO:
// All spirits can be dynamically generated from the JSON file
// Fermentation + Distillation dynamic generation
// Wine + Beer can be generated dynamically
export default History;
