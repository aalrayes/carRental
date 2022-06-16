import React, { ReactNode } from "react";
import Car from "./Car";
import { SpinnerCircular } from "spinners-react";
export default function CarList({ cars, isLoading }: any) {
  const renderCars = (): ReactNode => {
    return cars.map((car: any, index: number) => {
      return <Car key={car.id} {...car} />;
    });
  };

  return (
    <section className="flex w-full flex-col">
      <h1 className="ml-0 mb-6 font-sans font-bold text-zinc-400">
        Cars in a 50 km radius{" "}
      </h1>
      {isLoading && (
        <SpinnerCircular
          className="mx-auto mt-52"
          color="#B22222"
          size={"70px"}
        />
      )}
      <div className="mx-auto mb-20 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {renderCars()}
      </div>
    </section>
  );
}
