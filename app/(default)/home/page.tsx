"use client";

import { useAppProvider } from "@/app/app-provider";
import AccordionBasic from "@/components/accordion-basic";
import PaginationClassic from "@/components/pagination-classic";

export default function Home() {
  // const {projects} = useAppProvider();
  const { drinks } = useAppProvider();
  console.log(drinks);

  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
              My projects 🚧
            </h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Add board button */}
            {/*<button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">*/}
            {/*    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">*/}
            {/*        <path*/}
            {/*            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"/>*/}
            {/*    </svg>*/}
            {/*    <span className="ml-2">Add Event</span>*/}
            {/*</button>*/}
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          <PaginationClassic />
          {drinks.map((drink) => (
            <div key={drink.title} className="py-2.5">
              <AccordionBasic title={drink.title}>
                <p>{drink.title}</p>
                <p>{drink.properties.abv}</p>
                <p>{drink.properties.country}</p>
                <p>{drink.properties.category}</p>
                <p>{drink.description}</p>
              </AccordionBasic>
            </div>
          ))}
          <PaginationClassic />
        </div>
      </div>
    </div>
  );
}
