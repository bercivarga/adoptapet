import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PetDetails,
  DetailAPIResponse,
} from "../../interfaces/ApiRequestInterfaces";
import ImageCarousel from "./ImageCarousel";
import DetailsPageErrorBoundary from "./DetailsPageErrorBoundary";
import Loader from "../misc/Loader";
// import { IoPawSharp } from "react-icons/io5/index.js";
// import { RiMapPin2Fill } from "react-icons/ri/index.js";

interface ParamInterface {
  id: string;
}

function DetailsPage(): JSX.Element {
  const [details, setDetails] = useState({} as PetDetails);
  const { id } = useParams<ParamInterface>();
  let capitalizedSpecies;

  useEffect(function () {
    if (id) {
      void getDetails();
    }
    async function getDetails() {
      const response = await fetch(
        `https://pets-v2.dev-apis.com/pets?id=${id}`
      );
      const data = (await response.json()) as DetailAPIResponse;
      setDetails(data.pets[0]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (details.animal) {
    capitalizedSpecies =
      details.animal[0].toUpperCase() + details.animal.slice(1);
  }

  if (!details.images)
    return (
      <div className="w-full p-8 flex flex-row justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="px-8 py-6 flex flex-col-reverse sm:flex-row justify-between items-start bg-gray-100 rounded-md w-11/12 sm:w-10/12 lg:w-8/12 mx-auto">
      <ImageCarousel images={details.images}></ImageCarousel>
      <div className="flex-1">
        <h2 className="font-extrabold text-3xl">{details.name}</h2>
        <div className="flex flex-row items-center text-xl mt-2">
          {/* <IoPawSharp /> */}
          <h3 className="ml-2">
            {capitalizedSpecies} &mdash; {details.breed}
          </h3>
        </div>
        <div className="flex flex-row items-center text-lg mt-1">
          {/* <RiMapPin2Fill></RiMapPin2Fill> */}
          <h4 className="ml-2">
            {details.city}, {details.state}
          </h4>
        </div>
        <div className="w-full h-px bg-gray-400 mt-3"></div>
        <p className="mt-3">{details.description}</p>
        <a
          href="https://ikzoekbaas.dierenbescherming.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="px-4 py-2 mt-4 w-full sm:w-auto bg-gray-700 hover:bg-green-600 text-white text-xl rounded-sm"
          >
            Adopt {details.name}
          </button>
        </a>
      </div>
    </div>
  );
}

export default function DetailsPageWithErrorBoundary(): JSX.Element {
  return (
    <DetailsPageErrorBoundary>
      <DetailsPage></DetailsPage>
    </DetailsPageErrorBoundary>
  );
}
