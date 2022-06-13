import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import carContext from "../context/CarContext";
import { Navigate } from "react-router-dom";
export default function CarDetails() {
  const { getCar } = useContext(carContext);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const car = getCar(params.id);
  console.log(car);

  return (
    <section className="h- mx-auto w-full">
      {isLoading && <h1>Loading ......</h1>}
    </section>
  );
}
