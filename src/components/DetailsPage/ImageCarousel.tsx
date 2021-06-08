import React, { useState, MouseEvent } from "react";

export default function ImageCarousel({
  images,
}: {
  images: string[];
}): JSX.Element {
  const [currentHero, setCurrentHero] = useState<number>(0);

  function handleClick(event: MouseEvent<HTMLButtonElement>, index: number) {
    if (!(event.target instanceof HTMLImageElement)) return;
    setCurrentHero(index);
  }

  return (
    <div className="flex-1 mx-auto sm:mx-0 sm:mr-6 sm:w-80 sm:min-w-80 mt-4 sm:mt-0 h-full rounded-md overflow-hidden bg-gray-300 border-gray-500 border-4">
      <img
        src={images[currentHero]}
        alt="pet-hero"
        className="w-full h-full"
      ></img>
      <div className="grid grid-cols-3">
        {images.map(function (image, index) {
          return (
            <button
              type="button"
              onClick={(e) => handleClick(e, index)}
              key={image}
              className="h-full w-full relative"
            >
              <img
                src={image}
                alt="pet"
                className={`${
                  currentHero === index ? "opacity-90" : "opacity-50"
                } h-full w-full object-cover`}
              ></img>
            </button>
          );
        })}
      </div>
    </div>
  );
}
