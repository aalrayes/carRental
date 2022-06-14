import React, { createContext } from "react";

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
  price: number;
};
type Context = {
  getCar<T>(id: T): any;
};
const CarContext = createContext<Context>({
  getCar: () => {
    return {};
  },
});

export default CarContext;
