"use client";

import { useState, useEffect, useMemo } from "react";
import { Drink, useAppProvider } from "@/app/app-provider";
import ProductCard from "@/app/components/product-card";
import PaginationNumeric from "@/app/components/pagination";
import { fetchDrinks } from "@/api/drinks.api";

function Home() {
  // const { drinks, isLoading } = useAppProvider();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDrinks, setFilteredDrinks] = useState<Drink[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 40;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadDrinks = async () => {
      const data = await fetchDrinks(currentPage, searchTerm);
      console.log(data, "data");
      setFilteredDrinks(data.drinks);
      setTotalItems(data.totalItems); // Store total items count
    };
    loadDrinks();
  }, [currentPage, searchTerm]);

  // useEffect(() => {
  //   if (searchTerm === "") {
  //     setFilteredDrinks(drinks);
  //   } else {
  //     const filteredResults = drinks.filter((drink) =>
  //       drink.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredDrinks(filteredResults);
  //   }
  // }, [drinks, searchTerm]);

  // const paginatedDrinks = useMemo(() => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   return filteredDrinks.slice(startIndex, startIndex + itemsPerPage);
  // }, [filteredDrinks, currentPage, itemsPerPage]);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    setCurrentPage(1);
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
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700">
          <PaginationNumeric
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
          />
          {filteredDrinks.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {filteredDrinks.map((drink, index) => (
                <div
                  key={drink.description.slice(0, 50) + index}
                  className="py-2.5"
                >
                  <ProductCard drink={drink} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
