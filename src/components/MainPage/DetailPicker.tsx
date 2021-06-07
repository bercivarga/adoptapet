import React, { Dispatch, FormEvent, SetStateAction } from "react";

interface PropsInterface {
  location: string;
  species: string;
  breed: string;
  breedList: string[];
  setLocation: Dispatch<SetStateAction<string>>;
  setSpecies: Dispatch<SetStateAction<string>>;
  setBreed: Dispatch<SetStateAction<string>>;
  getAllPets: () => void;
}

const SPECIES: string[] = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function DetailPicker({
  location,
  species,
  breed,
  breedList,
  setLocation,
  setSpecies,
  setBreed,
  getAllPets,
}: PropsInterface): JSX.Element {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void getAllPets();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Place
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          ></input>
        </label>
        <label htmlFor="species">
          Species
          <select
            value={species}
            onChange={(event) => {
              setSpecies(event.target.value);
            }}
            onBlur={(event) => {
              setSpecies(event.target.value);
            }}
          >
            <option />
            {SPECIES.map(function (animal) {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            value={breed}
            onChange={(event) => {
              setBreed(event.target.value);
            }}
            onBlur={(event) => {
              setBreed(event.target.value);
            }}
          >
            {breedList.map(function (breed) {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
}
