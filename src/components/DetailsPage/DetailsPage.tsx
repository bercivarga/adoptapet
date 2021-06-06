import React from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage(): JSX.Element {
  interface ParamInterface {
    id: string;
  }

  const { id } = useParams<ParamInterface>();

  return (
    <div>
      <h1>DetailsPage</h1>
      <h2>Id: {id}</h2>
    </div>
  );
}
