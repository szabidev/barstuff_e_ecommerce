import React from "react";
import Image from "next/image";
import { Drink } from "../app-provider";

const ProductCard = ({ drink }: { drink: Drink }) => {
  const {
    image,
    name,
    description,
    price,
    abv,
    country,
    category,
    tasting_notes,
    production_method,
    raw_material,
    food_pairing,
    other_ingredients,
  } = drink;

  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          objectFit="contain"
          alt={name}
          priority
        />
        {/* Close button */}
      </div>
      <div className="p-5">
        {/* Modal header */}
        <div className="mb-2">
          <div className="mb-3">
            <div className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
              {country}
            </div>
          </div>
          <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            {`${name} - ${abv}`}
          </div>
        </div>
        {/* Modal content */}
        <div className="text-sm mb-5">
          <div className="space-y-2">
            <p>{description}</p>
            <p>{tasting_notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
