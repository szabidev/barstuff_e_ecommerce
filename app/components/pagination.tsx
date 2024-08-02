import React from "react";

interface PaginationNumericProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

const PaginationNumeric: React.FC<PaginationNumericProps> = ({
  setCurrentPage,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbersToShow = 10;
  let startPage: number, endPage: number;

  if (totalPages <= pageNumbersToShow) {
    // Total pages less than page numbers to show
    startPage = 1;
    endPage = totalPages;
  } else {
    // Calculate start and end pages
    const maxPagesBeforeCurrentPage = Math.floor(pageNumbersToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(pageNumbersToShow / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // Near the start
      startPage = 1;
      endPage = pageNumbersToShow;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // Near the end
      startPage = totalPages - pageNumbersToShow + 1;
      endPage = totalPages;
    } else {
      // Somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      console.log(`Changing to page: ${page}`);
      setCurrentPage(page);
    }
  };

  // Generate page numbers within the range
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, idx) => startPage + idx
  );
  console.log(pages, startPage, endPage);

  return (
    <div className="flex justify-center m-4 items-center">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2" onClick={() => changePage(currentPage - 1)}>
          <span className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600 cursor-pointer">
            <span className="sr-only">Previous</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </span>
        </div>
        <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
          {pages.map((page) => (
            <li key={page} onClick={() => changePage(page)}>
              <span
                className={`inline-flex items-center justify-center leading-5 px-3.5 py-2 ${
                  currentPage === page
                    ? "bg-indigo-500 text-white"
                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                } cursor-pointer`}
              >
                {page}
              </span>
            </li>
          ))}
        </ul>
        <div className="ml-2" onClick={() => changePage(currentPage + 1)}>
          <span className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer">
            <span className="sr-only">Next</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </span>
        </div>
      </nav>
      <div className="ml-10 text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
        <p className="text-emerald-500">
          Total Items:{" "}
          <span className="font-medium text-slate-600 dark:text-slate-300">
            {totalItems}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaginationNumeric;
