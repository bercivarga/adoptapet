import React, { useState, useEffect } from "react";
import { Pet, PetAPIResponse } from "../../interfaces/ApiRequestInterfaces";
import Results from "./Results";
import DetailPicker from "./DetailPicker";
import useBreedList from "./useBreedList";
import MainPageErrorBoundary from "./MainPageErrorBoundary";

function MainPage(): JSX.Element {
  const [location, setLocation] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [pets, setPets] = useState<Pet[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  const breedList = useBreedList(species);

  useEffect(function () {
    void getAllPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getAllPets() {
    setNoResults(false);
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${species}&location=${location}&breed=${breed}`
    );
    const data = (await response.json()) as PetAPIResponse;
    if (data.pets.length === 0) {
      setNoResults(true);
    }
    setPets(data.pets);
  }

  return (
    <div className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto">
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
      {noResults ? (
        <h2>There are no pets matching your criteria. Please try again.</h2>
      ) : null}
    </div>
  );
}

export default function MainPageWithErrorBoundary(): JSX.Element {
  return (
    <MainPageErrorBoundary>
      <MainPage></MainPage>
    </MainPageErrorBoundary>
  );
}
