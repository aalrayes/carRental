import React, { useContext } from "react";
import engineIcon from "../assets/icons/icons8-engine-50.png";
import doorIcon from "../assets/icons/icons8-car-door-50.png";
import gasIcon from "../assets/icons/icons8-fuel-50.png";
import kmIcon from "../assets/icons/icons8-meter-50.png";
import { Link } from "react-router-dom";
import CarFeature from "./CarFeatures";
//import PropTypes from "prop-types";

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

export default function Car({
  id,
  make,
  model,
  year,
  kmTraveled,
  latitude,
  longitude,
  images,
  AvailableFrom,
  AvailableUntil,
  doors,
  engine,
  type,
  fuel,
  price,
}: any) {
  const features = {
    engine: engine,
    kmTraveled: kmTraveled,
    doors: doors,
    fuel: fuel,
  };
  return (
    <article className=" mx-auto flex w-96 transform flex-col rounded-3xl border border-gray-200 bg-white p-5 font-sans drop-shadow-md transition-transform duration-500 hover:-translate-y-2">
      <div className="flex flex-col">
        {/* image*/}
        <img
          className=" rounded-md rounded-b-none object-fill"
          src={images}
          alt={`${make} ${model}`}
        />
        <div className="mx-auto w-full pl-2 pt-5 text-left ">
          {/* name*/}
          <span className="text-xl font-bold text-black">{`${model} ${make}  ${year}`}</span>

          {/* car features*/}
          <div className="mt-2 text-xs font-bold text-neutral-500">
            Features
          </div>
          <CarFeature data={features} />
        </div>

        <div
          style={{ fontSize: "13px" }}
          className="mx-auto mb-1 flex justify-between px-5 py-2 font-bold text-white "
        ></div>
        {/* pricing and details section*/}
        <div className="mt-3 flex w-full justify-evenly border-t px-3">
          <div className="flex w-full flex-col rounded pt-3 text-left text-xl font-bold">
            <span>{`$${price}0`}</span>
            <span className="-mt-1 text-xs text-gray-400">{" per week"}</span>
          </div>
          <Link to={`/cars/${id}`}>
            <button className="mt-4 h-9 w-28 rounded bg-red-400 text-center text-sm text-white hover:bg-red-500">
              Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
