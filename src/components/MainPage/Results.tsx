import React from "react";
import { Pet } from "../../interfaces/ApiRequestInterfaces";

export default function Results({ pets }: { pets: Pet[] }) {
  return (
    <div>
      <ul>
        {pets.map(function (pet) {
          return <li key={pet.id}>{pet.name}</li>;
        })}
      </ul>
    </div>
  );
}
