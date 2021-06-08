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
    <div>
      <img src={images[currentHero]} alt="pet-hero"></img>
      <div>
        {images.map(function (image, index) {
          return (
            <button
              type="button"
              onClick={(e) => handleClick(e, index)}
              key={image}
            >
              <img src={image} alt="pet"></img>
            </button>
          );
        })}
      </div>
    </div>
  );
}
