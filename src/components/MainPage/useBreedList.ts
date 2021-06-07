import { useState, useEffect } from "react";
import { BreedListAPIResponse } from "../../interfaces/ApiRequestInterfaces";

export default function useBreedList(species: string): string[] {
  const [breedList, setBreedList] = useState<string[]>([]);

  useEffect(
    function () {
      if (!species) {
        setBreedList([]);
      } else {
        void getBreeds();
      }

      async function getBreeds() {
        setBreedList([]);
        const response = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${species}`
        );
        const data = (await response.json()) as BreedListAPIResponse;
        setBreedList(data.breeds);
      }
    },
    [species]
  );

  return breedList;
}
