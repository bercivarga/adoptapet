import React, { useState, useEffect } from "react";
import { Pet, PetAPIResponse } from "../../interfaces/ApiRequestInterfaces";

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
      {pets.map((p) => (
        <h1 key={p.id}>{p.name}</h1>
      ))}
    </div>
  );
}
