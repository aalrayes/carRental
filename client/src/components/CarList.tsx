import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Car from "./Car";
import { getAllCars } from "../api/CarService";
import { SpinnerCircular } from "spinners-react";
export default function CarList() {
  const { data, isLoading } = useQuery("cars", getAllCars);
  const renderCars = (): ReactNode => {
    return data?.map((car: any, index: number) => {
      return <Car key={car.id} {...car} />;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <SpinnerCircular
        className="mx-auto mt-52 delay-100"
        color="#B22222"
        size="70px"
      />
    );
  }
  return (
    <section className="flex w-full flex-col">
      <h1 className="ml-0 mb-6 font-sans font-bold text-zinc-400">
        Cars in a 50 km radius
      </h1>
      <div className="mx-auto mb-20 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {renderCars()}
      </div>
    </section>
  );
}
