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
    <section className="flex flex-col">
      <h1 className="ml-14 mb-6 font-sans font-bold text-slate-500">results</h1>
      {isLoading && (
        <SpinnerCircular
          className="mx-auto mt-52"
          color="#B22222"
          size={"70px"}
        />
      )}
      <div className="mx-auto flex w-full flex-wrap gap-5">{renderCars()}</div>
    </section>
  );
}
