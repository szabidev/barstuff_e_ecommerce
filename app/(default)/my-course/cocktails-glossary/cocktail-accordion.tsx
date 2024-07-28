"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";
import cocktailImage from "@/public/images/no-mage-placeholder.png";

import Image from "next/image";

export interface CocktailProps {
  base_spirit: string;
  cocktail_id: string;
  cocktail_name: string;
  description: string;
  difficulty: string;
  glassware: string;
  ingredients: string[];
  technique: string;
  instructions?: any;
}

const Cocktail = ({ cocktail }: { cocktail: CocktailProps }) => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(cocktail, "coktail");
  return (
    <tbody className="text-sm">
      <tr>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="flex items-center text-slate-800">
            <div className="overflow-hidden w-[50px] h-[50px] shrink-0 flex justify-center bg-slate-100 dark:bg-slate-700 rounded-full mr-2 sm:mr-3">
              <Image
                className="rounded-full ml-1"
                src={cocktailImage}
                width={50}
                height={50}
                alt={cocktail.cocktail_name}
              />
            </div>
            <div className="font-medium text-slate-800 dark:text-slate-100">
              {cocktail.cocktail_name}
            </div>
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">Base: {cocktail.base_spirit}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">Glass: {cocktail.glassware}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left text-emerald-500 font-medium">
            {cocktail?.instructions?.garnish || "N/A"}
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">Difficulty: {cocktail.difficulty}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
          <div className="flex items-center">
            <button
              className={`text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 ${
                open && "rotate-180"
              }`}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              aria-controls={`description-${cocktail.cocktail_id}`}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      {/*
      Example of content revealing when clicking the button on the right side:
      Note that you must set a "colSpan" attribute on the <td> element,
      and it should match the number of columns in your table
      */}
      <tr
        id={`description-${cocktail.cocktail_id}`}
        role="region"
        className={`${!open && "hidden"}`}
      >
        <td colSpan={10} className="px-2 first:pl-5 last:pr-5 py-3">
          <div className="bg-slate-50 dark:bg-slate-900/30 dark:text-slate-400 p-3 -mt-3">
            <div className="text-sm mb-3">
              <div className="font-medium text-slate-800 dark:text-slate-100 mb-1">
                {cocktail.description}
              </div>
              <div>
                <h2 className="font-medium text-slate-800 dark:text-white ">
                  Ingredients:
                </h2>
                <div className="pl-2">
                  {cocktail.ingredients.map((ingredient: string) => (
                    <p className="py-1">{ingredient}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* <button className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white">
              Approve
            </button> */}
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Cocktail;
