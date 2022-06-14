import React, { ReactNode } from "react";
import Car from "./Car";
import { SpinnerCircular } from "spinners-react";
export default function CarList({ cars, isLoading }: any) {
  const renderCars = (): ReactNode => {
    return cars.map((car: any, index: number) => {
      if (index > 19) {
        return <Car key={car.id} {...car} />;
      }
    });
  };

  return (
    <section className="flex flex-col">
      <h1 className="mb-6 ml-10 font-sans font-bold text-gray-700">
        Cars in a 50km radius from you
      </h1>
      {isLoading && (
        <SpinnerCircular
          className="mx-auto mt-52"
          color="#B22222"
          size={"70px"}
        />
      )}
      <div className="flex w-11/12 flex-wrap">{renderCars()}</div>
    </section>
  );
}
