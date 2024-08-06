import React from "react";

const HistoryTitleSlide = ({ title }: { title: string }) => {
  return (
    <h1 className="text-8xl text-center py-4 text-font-dark dark:text-gray-200">
      {title}
    </h1>
  );
};

export default HistoryTitleSlide;
