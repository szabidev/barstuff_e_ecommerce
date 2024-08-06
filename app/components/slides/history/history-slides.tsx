import React from "react";

export interface HistorySlideProps {
  title: string;
  description: string;
  subsections: any[];
  hasTerms: boolean;
}

const HistorySlides = ({ slide }: { slide: HistorySlideProps }) => {
  console.log(slide, "slide");
  return (
    <div className="mb-8 py-4 pr-4 pl-8">
      <p className="px-12 mb-8 text-font-dark text-md leading-relaxed dark:text-gray-200 w-[90%] m-auto">
        {slide.title}
      </p>
      <p>{slide.description}</p>
      <div>
        {slide.subsections.map((subsection: any, index: number) => (
          <div key={index} className="px-12 text-font-dark dark:text-gray-200">
            <div className="mb-6 text-xl tracking-widest mt-10">
              <h3 className="border border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md py-0.25 px-2">
                {subsection.title}
              </h3>
              <p className="border border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md py-0.25 px-2">
                {subsection.description}
              </p>
            </div>
            {!slide.hasTerms
              ? subsection.key_contributions.map(
                  (contribution: any, index: number) => {
                    <div key={index}>
                      <h1>{contribution.contribution}</h1>
                      <p>{contribution.description}</p>
                    </div>;
                  }
                )
              : subsection.terms.map((item: any, index: number) => {
                  <div key={index}>
                    <h1>{item.term}</h1>
                    <p>{item.description}</p>
                  </div>;
                })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySlides;
