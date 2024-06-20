"use client";

import { useState, useEffect } from "react";
import { Drink, useAppProvider } from "@/app/app-provider";
import Image from "next/image";
import AccordionBasic from "@/components/accordion-basic";
import PaginationClassic from "@/components/pagination-classic";

export default function Home() {
  const { drinks } = useAppProvider();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDrinks, setFilteredDrinks] = useState<Drink[]>([]);
  const [currentDrinks, setCurrentDrinks] = useState<Drink[]>([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilteredDrinks(drinks);
  }, [drinks]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredDrinks]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentDrinks(filteredDrinks.slice(startIndex, endIndex));
  }, [currentPage, filteredDrinks]);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    if (search === "") {
      setFilteredDrinks(drinks);
    } else {
      const filteredResults = drinks.filter((drink) => {
        return drink.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredDrinks(filteredResults);
    }
    setCurrentPage(1); // Reset to first page when search term changes
  };

  return (
    <div className="relative bg-white dark:bg-slate-900 h-full">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
              Drinks List
            </h1>
          </div>
          <input
            type="text"
            className="form-input w-2/4"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          <PaginationClassic
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalItems={filteredDrinks.length}
            itemsPerPage={itemsPerPage}
          />
          {currentDrinks.length > 0 ? (
            currentDrinks.map((drink, index) => (
              <div
                key={drink.description.slice(0, 50) + index}
                className="py-2.5"
              >
                <AccordionBasic title={drink.name}>
                  <p>{drink.price}</p>
                  <p>{drink.abv}</p>
                  <p>{drink.country}</p>
                  <p>{drink.category}</p>
                  <p>{drink.description}</p>
                  <p>{drink.tasting_notes}</p>
                  <p>{drink.production_method}</p>
                  <p>{drink.raw_material}</p>
                  <p>{drink.food_pairing}</p>
                  <p>{drink.other_ingredients.join(", ")}</p>
                  <p>{drink.production_method}</p>
                  <Image
                    className="rounded-full"
                    src={drink.image}
                    width={28}
                    height={28}
                    alt={drink.name}
                  />
                </AccordionBasic>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}
