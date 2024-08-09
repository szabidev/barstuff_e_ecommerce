import { LiaEqualsSolid } from "react-icons/lia";

export interface HistorySlideProps {
  slide: HistorySlideSubsection;
}

export interface HistorySlideSubsection {
  title: string;
  description: string;
  subsections?: any[];
  terms?: any[];
  key_findings?: any[];
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
      <div className="h-[450px] overflow-y-scroll px-2">
        {slide?.subsections?.length !== 0
          ? slide?.subsections?.map((subsection: any, index: number) => (
              <div
                key={index}
                className="px-12 text-font-dark dark:text-gray-200"
              >
                <div className="mb-6 mt-10">
                  <h3 className="w-fit border text-2xl tracking-wider border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md pt-0.25 pb-0.5 px-2">
                    {subsection.title}
                  </h3>
                  <p className="border border-font-dark text-xl tracking-wide text-beige bg-font-dark py-0.25 px-2">
                    {subsection.description}
                  </p>
                </div>
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {subsection.key_contributions.map(
                    (contribution: any, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col w-full border border-font-dark mb-8"
                      >
                        <h1 className="text-lg text-beige tracking-wider border border-font-dark bg-font-dark  py-0.25 px-2">
                          {contribution.contribution}
                        </h1>
                        <p className="px-2 py-4 ">{contribution.description}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))
          : null}
        {slide?.terms?.length !== 0
          ? slide?.terms?.map((term: any, index: number) => (
              <div key={index} className="px-14 mt-3 mb-5 flex items-start">
                <div className="mr-4 min-w-[140px]">
                  <h1 className="text-lg text-beige tracking-wider w-fit border border-font-dark bg-font-dark  py-0.25 px-2">
                    {term.term}
                  </h1>
                </div>
                <div className="">
                  {/* <p className="mr-2 text-font-dark">=</p> */}
                  <p className="text-font-dark text-lg tracking-wide">
                    {` = ${term.definition}`}
                  </p>
                </div>
              </div>
            ))
          : null}
        {slide.key_findings?.length !== 0
          ? slide?.key_findings?.map((keyFinding: any, index: number) => (
              <div
                key={index}
                className="px-12 mb-10 text-font-dark dark:text-gray-200"
              >
                <div className="mb-6 text-xl tracking-widest mt-10 flex justify-between items-center ">
                  <h3 className="border border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md py-0.25 px-2">
                    {keyFinding.region}
                  </h3>
                  <p>{slide?.subsections?.length}</p>
                  <p className="border border-font-dark text-beige bg-font-dark rounded-tl-md rounded-tr-md py-0.25 px-2">
                    {keyFinding.date}
                  </p>
                </div>
                <p className="tracking-wide text-md text-font-dark">
                  {keyFinding.description}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default HistorySlides;
