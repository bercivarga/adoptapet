import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PetDetails,
  DetailAPIResponse,
} from "../../interfaces/ApiRequestInterfaces";
import ImageCarousel from "./ImageCarousel";

interface ParamInterface {
  id: string;
}

export default function DetailsPage(): JSX.Element {
  const [details, setDetails] = useState({} as PetDetails);
  const { id } = useParams<ParamInterface>();
  let capitalizedSpecies;

  useEffect(function () {
    if (id) {
      void getDetails();
    }
    async function getDetails() {
      const response = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
      const data = (await response.json()) as DetailAPIResponse;
      setDetails(data.pets[0]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (details.animal) {
    capitalizedSpecies =
      details.animal[0].toUpperCase() + details.animal.slice(1);
  }

  if (!details.images) return <h2>Loading details...</h2>;

  return (
    <div>
      <h1>DetailsPage</h1>
      <h2>{details.name}</h2>
      <h3>{capitalizedSpecies}</h3>
      <h3>{details.breed}</h3>
      <h4>
        {details.city}, {details.state}
      </h4>
      <p>{details.description}</p>
      <ImageCarousel images={details.images}></ImageCarousel>
      <a
        href="https://ikzoekbaas.dierenbescherming.nl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button">Adopt {details.name}</button>
      </a>
    </div>
  );
}
