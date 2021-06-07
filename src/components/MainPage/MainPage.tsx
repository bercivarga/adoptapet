import React, { useState, useEffect } from "react";
import { Pet, PetAPIResponse } from "../../interfaces/ApiRequestInterfaces";
import Results from "./Results";
import DetailPicker from "./DetailPicker";
import useBreedList from "./useBreedList";

export default function MainPage(): JSX.Element {
  const [location, setLocation] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [pets, setPets] = useState<Pet[]>([]);
  const breedList = useBreedList(species);

  useEffect(function () {
    void getAllPets();
  }, []);

  async function getAllPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${species}&location=${location}&breed=${breed}`
    );
    const data = (await response.json()) as PetAPIResponse;
    setPets(data.pets);
  }

  return (
    <div>
      <h1>MainPage</h1>
      <DetailPicker
        location={location}
        species={species}
        breed={breed}
        breedList={breedList}
        setLocation={setLocation}
        setSpecies={setSpecies}
        setBreed={setBreed}
        getAllPets={getAllPets}
      ></DetailPicker>
      <Results pets={pets}></Results>
    </div>
  );
}
