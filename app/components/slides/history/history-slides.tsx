export interface HistorySlideProps {
  slide: HistorySlideSubsection;
}

export interface HistorySlideSubsection {
  title: string;
  description: string;
  subsections?: any[];
  terms?: any[];
}

const HistorySlides = ({ slide }: HistorySlideProps) => {
  console.log(slide, "slide");
  return (
    <div className="mb-8 py-4 pr-10 pl-14">
      <div className="w-full pr-14">
        <p className="mb-8 text-right text-font-dark text-2xl leading-relaxed dark:text-gray-200">
          {slide.title}
        </p>
        <p className="text-xl text-right pl-10 pb-4 text-font-dark">
          {slide.description}
        </p>
      </div>
      <div className="h-[450px] overflow-y-scroll">
        {slide.subsections
          ? slide?.subsections?.map((subsection: any, index: number) => (
              <div
                key={index}
                className="px-12 text-font-dark dark:text-gray-200"
              >
                <div className="mb-6 tracking-widest mt-10">
                  <h3 className="w-fit border text-2xl border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md pt-0.25 pb-0.5 px-2">
                    {subsection.title}
                  </h3>
                  <p className="border border-font-dark text-xl text-beige bg-font-dark py-0.25 px-2">
                    {subsection.description}
                  </p>
                </div>
                {subsection.key_contributions.map(
                  (contribution: any, index: number) => (
                    <div key={index}>
                      <h1>{contribution.contribution}</h1>
                      <p>{contribution.description}</p>
                    </div>
                  )
                )}
              </div>
            ))
          : slide?.terms?.map((term: any, index: number) => (
              <div key={index}>
                <h1>{term.term}</h1>
                <p>{term.definition}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default HistorySlides;
