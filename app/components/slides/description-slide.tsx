import React from "react";
import Image from "next/image";

const DescriptionSlide = ({
  description,
  image_url,
  width = 400,
  height = 400,
}: {
  description: string;
  image_url?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className="w-[90%] mx-auto flex justify-center items-center h-full">
      <p className="px-12 text-2xl leading-relaxed tracking-wide text-font-dark dark:text-gray-200">
        {description}
      </p>
      <Image
        src={image_url || ""}
        alt={description}
        width={width}
        height={height}
      />
    </div>
  );
};

export default DescriptionSlide;
