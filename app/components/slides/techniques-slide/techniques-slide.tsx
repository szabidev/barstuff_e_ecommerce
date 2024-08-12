import Image from "next/image";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdLabelImportant } from "react-icons/md";

const TechniquesSlides = ({ slide }: { slide: any }) => {
  console.log(slide, "slide");
  const renderTitleSlide = () => {
    return (
      <div className="mb-6 flex justify-between items-end h-full w-full pb-8 mt-10 mx-auto">
        <div className="pl-8 pb-2">
          <h1 className="w-fit text-4xl tracking-wider  text-font-dark pt-0.25 pb-0.5 px-2">
            {slide.title}
          </h1>
        </div>
        <div className="w-1/3 h-full border border-font-dark pt-2 pb-4 px-4 bg-font-dark">
          <p className="text-xl tracking-wide leading-loose text-beige  ">
            {slide.description}
          </p>
        </div>
      </div>
    );
  };

  const renderTools = () => {
    return (
      <div className="pl-6">
        <div className="flex flex-col mb-10">
          <h1 className="text-2xl p-o m-0 text-beige tracking-wider w-fit border rounded-br-md border-font-dark bg-font-dark  py-0.25 px-2">
            {slide.name.toLowerCase()}
          </h1>
          <p className="px-2 py-4 text-font-dark text-lg tracking-normal text-right">
            {slide.description}
          </p>
        </div>
        <div className=" px-2 overflow-y-auto w-3/4 m-auto h-[440px]">
          {slide.types.map((type: any, index: number) => {
            return (
              <div
                key={type.name}
                className="flex md:flex-col w-full border border-font-dark mb-8"
              >
                <div className="flex">
                  <div className="w-[400px] h-[400px] flex-shrink-0">
                    <Image
                      src={type.image_url}
                      alt={type.name}
                      width={400}
                      height={400}
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-lg text-beige tracking-wider border border-font-dark bg-font-dark  py-0.25 px-2">
                      {type.name}
                    </h1>
                    <p className="p-4 text-font-dark tracking-wide">
                      {type.description}
                    </p>
                    <div className="px-4">
                      <div className="w-full mx-auto mb-4 px-2 rounded-lg text-sm bg-font-dark">
                        <p className="text-beige text-sm font-bold p-1">
                          USAGE
                        </p>
                        {type.uses.map((use: string, index: number) => (
                          <p
                            key={use + index}
                            className="text-beige tracking-wide leading-loose pt-1 pb-2 flex justify-start items-start "
                          >
                            <IoBookmarkOutline
                              size={16}
                              className="mr-1 translate-y-[6px]"
                            />
                            {use}
                          </p>
                        ))}
                      </div>
                      <div className="w-full mx-auto px-2 rounded-lg text-sm bg-font-dark">
                        <p className="text-beige text-sm font-bold p-1">
                          DON'T FORGET
                        </p>
                        {type.best_practices.map(
                          (practice: string, index: number) => (
                            <p
                              key={practice + index}
                              className="text-beige tracking-wide leading-loose pt-1 pb-2 flex justify-start items-start "
                            >
                              <MdLabelImportant
                                size={16}
                                className="mr-1 translate-y-[6px]"
                              />
                              {practice}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTechniques = () => {
    return (
      <div>
        {slide.techniques.map((technique: any, index: number) => (
          <div>
            <div>
              <h1>{technique.name}</h1>
              <p>{technique.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className=" pr-14 pl-14 h-full">
      {slide.title && slide.title.length > 0 && renderTitleSlide()}
      {slide.types && slide.types.length > 0 && renderTools()}
      {slide.steps && slide.steps.length > 0 && renderTechniques()}
    </div>
  );
};

export default TechniquesSlides;
