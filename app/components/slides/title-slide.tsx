import React from "react";

const TitleSlide = ({ title }: { title: string }) => {
  return (
    <h1 className="text-7xl leading-relaxed tracking-wide text-center py-4 text-font-dark dark:text-gray-200">
      {title}
    </h1>
  );
};

export default TitleSlide;
