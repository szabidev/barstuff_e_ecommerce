import React from "react";

const OriginsOfFermentation = () => {
  const { history_of_alcohol: historyOfAlcohol } = history;
  const { origins_of_fermentation: originsOfFermentation } = historyOfAlcohol;
  return (
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
  );
};

export default OriginsOfFermentation;
