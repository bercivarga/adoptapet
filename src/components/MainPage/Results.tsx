import React from "react";
import { Link } from "react-router-dom";
import { Pet } from "../../interfaces/ApiRequestInterfaces";
import Loader from "../misc/Loader";

export default function Results({ pets }: { pets: Pet[] }): JSX.Element {
  if (!pets.length)
    return (
      <div className="w-full p-8 flex flex-row justify-center items-center">
        <Loader></Loader>
      </div>
    );

  return (
    <div className="mt-8 h-full">
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {pets.map(function (pet) {
          return (
            <Link to={`/pet/${pet.id}`} key={pet.id}>
              <li className="h-full">
                <div className="relative overflow-hidden rounded-md h-full">
                  <img
                    src={pet.images[0]}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  ></img>
                  <div className="w-full px-3 py-2 absolute left-0 bottom-0 z-10 bg-green-600 text-white opacity-90">
                    <h2 className="font-bold text-xl">{pet.name}</h2>
                    <h3>{pet.breed}</h3>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
