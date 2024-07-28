import React from "react";
import Cocktail from "./cocktail-accordion";

// Data
import cocktails from "../../../../public/json/cocktails_distilled.json";

const CocktailsGlossary = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <h1 className="text-2xl mb-6 md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
        Cocktails ✨
      </h1>
      <div className="border border-slate-200 dark:border-slate-700 rounded-sm">
        {/* // TODO: Add pagination logic */}
        {/* <PaginationNumeric setCurrentPage={} currentPage={} totalItems={} itemsPerPage={}/> */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:bg-slate-800 dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700">
            {cocktails.map((cocktail) => (
              <Cocktail cocktail={cocktail} key={cocktail.cocktail_id} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default CocktailsGlossary;
