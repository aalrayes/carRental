import React, { useState, useEffect } from "react";
import Car from "./Car";
import Spinner from "./layout/Spinner";
type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  kmTraveled: number;
  latitude: number;
  longitude: number;
  images: string;
  AvailableFrom: string;
  AvailableUntil: string;
  doors: string;
  engine: string;
  type: string;
  fuel: string;
  price: string;
};
export default function CarList({ cars, handleCarDetails }: any) {
  return (
    <section className="flex flex-col">
      <h1 className="my-6 ml-10 font-sans font-bold text-gray-700">
        Cars in a 50km radius from you
      </h1>
      <div className="flex w-11/12 flex-wrap">
        {cars.map((car: any, index: number) => {
          if (index > 19) {
            return (
              <Car key={car.id} handelCarDetails={handleCarDetails} {...car} />
            );
          }
        })}
      </div>
    </section>
  );
}
