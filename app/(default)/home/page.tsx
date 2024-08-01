"use client";

import { useState, useEffect } from "react";
import { Drink, useAppProvider } from "@/app/app-provider";
import ProductCard from "@/app/components/product-card";
import PaginationNumeric from "@/app/components/pagination";
import { fetchDrinks } from "@/api/drinks";

function Home() {
  const { drinks, setDrinks } = useAppProvider();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDrinks, setFilteredDrinks] = useState<Drink[]>([]);
  const [currentDrinks, setCurrentDrinks] = useState<Drink[]>([]);
  const itemsPerPage = 40;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // New state for total items

  const handleDrinks = async () => {
    const data = await fetchDrinks(currentPage, itemsPerPage);
    setDrinks(data.drinks);
    setTotalItems(data.total); // Set the total items
    console.log(data.total);
  };

  useEffect(() => {
    handleDrinks();
  }, [currentPage]);

  useEffect(() => {
    setFilteredDrinks(drinks);
  }, [drinks]);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [filteredDrinks]);

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
    setCurrentPage(1);
  };
  // TODO - fix pagination, page change list elements correctly
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
          <PaginationNumeric
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalItems={totalItems} // Pass the total items state
            itemsPerPage={itemsPerPage}
          />
          {currentDrinks.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {currentDrinks.map((drink, index) => (
                <div
                  key={drink.description.slice(0, 50) + index}
                  className="py-2.5"
                >
                  <ProductCard drink={drink} />
                </div>
              ))}
            </div>
          ) : (
            <p>No drinks available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
