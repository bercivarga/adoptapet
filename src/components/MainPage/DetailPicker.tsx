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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row flex-wrap md:items-end justify-center p-8 bg-gray-100 rounded-md w-full"
      >
        <div className="w-full sm:w-auto">
          <label htmlFor="location" className="block">
            Place
            <input
              className="block w-full md:w-44 h-10 border-gray-200 border-2 px-4"
              value={location}
              placeholder="Los Angeles, CA"
              onChange={(event) => setLocation(event.target.value)}
            ></input>
          </label>
        </div>
        <div className="sm:ml-2 w-full sm:w-auto">
          <label htmlFor="species" className="block">
            Species
            <select
              className="block w-full md:w-44 h-10 border-gray-200 border-2"
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
        </div>
        <div className="sm:ml-2 w-full sm:w-auto">
          <label htmlFor="breed" className="block">
            Breed
            <select
              className="block w-full md:w-44 h-10 border-gray-200 border-2"
              disabled={!breedList.length}
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
        </div>
        <button
          type="submit"
          className="sm:ml-2 mt-4 h-10 bg-gray-700 hover:bg-green-600 px-4 py-2 rounded-sm text-white"
        >
          Search pets
        </button>
      </form>
    </div>
  );
}
