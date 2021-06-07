import React from "react";
import { Link } from "react-router-dom";
import { Pet } from "../../interfaces/ApiRequestInterfaces";

export default function Results({ pets }: { pets: Pet[] }): JSX.Element {
  return (
    <div>
      <ul>
        {pets.map(function (pet) {
          return (
            <Link to={`/details/${pet.id}`} key={pet.id}>
              <li>{pet.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
