import Image from "next/image";

const TechniquesSlides = ({ slide }: { slide: any }) => {
  console.log(slide, "slide");

  // slide.map((item: any) => {});

  const renderTitleSlide = () => {
    return (
      <div className="mb-6 flex justify-between items-end h-full w-full pb-8 mt-10 mx-auto">
        <div className="pl-8">
          <h1 className="w-fit text-4xl tracking-wider  text-font-dark pt-0.25 pb-0.5 px-2">
            {slide.title}
          </h1>
        </div>
        <div className="w-1/3 h-full border border-font-dark py-2 px-4 bg-font-dark">
          <p className=" text-xl tracking-wide leading-loose text-beige  ">
            {slide.description}
          </p>
        </div>
      </div>
    );
  };

  const renderTools = () => {
    return (
      <div className="h-full pl-6">
        <div className="flex flex-col mb-10">
          <h1 className="text-2xl p-o m-0 text-beige tracking-wider w-fit border rounded-br-md border-font-dark bg-font-dark  py-0.25 px-2">
            {slide.name.toLowerCase()}
          </h1>
          <p className="px-2 py-4 text-font-dark text-lg tracking-normal">
            {slide.description}
          </p>
        </div>
        <div className="overflow-y-auto w-2/3 m-auto border border-font-dark h-[450px]">
          {slide.types.map((type: any, index: number) => {
            return (
              <div
                key={type.name}
                className="flex flex-col w-full border border-font-dark mb-8"
              >
                <div className="flex">
                  <div className="">
                    <Image
                      src={type.image_url}
                      alt="boston shaker"
                      width={400}
                      height={450}
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-2/3">
                    <h1 className="text-lg text-beige tracking-wider border border-font-dark bg-font-dark  py-0.25 px-2">
                      {type.name}
                    </h1>
                    <p className="px-2 py-4 ">{type.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-8 pb-4 pr-14 pl-14 h-full">
      {slide.title && slide.title.length > 0 && renderTitleSlide()}
      {slide.types && slide.types.length > 0 && renderTools()}
    </div>
  );
};

export default TechniquesSlides;
