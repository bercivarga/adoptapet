import React, { useState, useEffect } from "react";
import { Pet, PetAPIResponse } from "../../interfaces/ApiRequestInterfaces";
import Results from "./Results";
import DetailPicker from "./DetailPicker";

export default function MainPage(): JSX.Element {
  const [location, setLocation] = useState<string>("");
  const [animal, setAnimal] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(function () {
    void getAllPets();
  }, []);

  async function getAllPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const data = (await response.json()) as PetAPIResponse;
    setPets(data.pets);
  }

  return (
    <div>
      <h1>MainPage</h1>
      <DetailPicker
        location={location}
        animal={animal}
        breed={breed}
        setLocation={setLocation}
        setAnimal={setAnimal}
        setBreed={setBreed}
      ></DetailPicker>
      <Results pets={pets}></Results>
    </div>
  );
}
