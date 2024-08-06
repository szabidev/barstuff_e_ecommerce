import React from "react";

import Carousel from "@/app/components/carousel";
import history from "../../../../public/json/history.json";

// TODO: Make a caroussel element for the sections
// TODO: generate dynamic slides for carousel

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
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl text-center py-4 text-gray-700 dark:text-gray-200">
            {introduction.title}
          </h1>
        </div>
        <div className="relative bg-beige dark:bg-slate-800 shadow-lgrounded-lg mb-8">
          {/* <div className="h-full w-10 absolute">test</div> */}
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default History;
