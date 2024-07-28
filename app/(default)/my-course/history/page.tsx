import React from "react";

import history from "../../../../public/json/history.json";

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
    <div>
      <div>
        <h1>{history.history_of_alcohol.introduction.title}</h1>
        <p>{history.history_of_alcohol.introduction.description}</p>
      </div>
      <div>
        <h2></h2>
      </div>
    </div>
  );
};

export default History;
