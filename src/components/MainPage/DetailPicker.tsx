import React, { Dispatch, SetStateAction } from "react";

interface PropsInterface {
  location: string;
  animal: string;
  breed: string;
  setLocation: Dispatch<SetStateAction<string>>;
  setAnimal: Dispatch<SetStateAction<string>>;
  setBreed: Dispatch<SetStateAction<string>>;
}

const ANIMALS: string[] = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function DetailPicker({
  location,
  animal,
  breed,
  setLocation,
  setAnimal,
  setBreed,
}: PropsInterface) {
  return (
    <div>
      <form>
        <label htmlFor="location">
          Place
          <input value={location}></input>
        </label>
        <label htmlFor="animal">
          Species
          <select
            value={animal}
            onChange={(event) => {
              setAnimal(event.target.value);
            }}
            onBlur={(event) => {
              setAnimal(event.target.value);
            }}
          >
            <option />
            {ANIMALS.map(function (animal) {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
}
