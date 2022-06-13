import React from "react";
import { Fuel, Engine, Doors, Type } from "../enums/carEnums";
import engineLogo from "../assets/icons/icons8-engine-50.png";
import doorLogo from "../assets/icons/icons8-car-door-50.png";
import gasLogo from "../assets/icons/icons8-fuel-50.png";
import kmLogo from "../assets/icons/icons8-meter-50.png";
import { Link } from "react-router-dom";
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
  doors: Doors;
  engine: Engine;
  type: Type;
  fuel: Fuel;
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
  handelCarDetails,
}: any) {
  const sendCarData = () => {
    handelCarDetails(id);
  };

  return (
    <article className="mx-auto mb-7 flex w-80 transform  flex-col justify-between rounded-3xl border  border-gray-200  bg-white p-5 font-sans  drop-shadow-md transition-transform duration-500 hover:-translate-y-2">
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
          <div className="my-1 ml-2 mt-3 flex w-full flex-wrap gap-y-2 text-xs">
            <div className="flex w-1/2 justify-start">
              <div className="font-bold">
                <img src={kmLogo} width={"25px"} alt="km icon" />{" "}
              </div>
              <span className="my-auto ml-1">{kmTraveled + "km"}</span>
            </div>

            <div className="flex w-1/2 justify-start">
              <img src={engineLogo} width={"25px"} alt="km icon" />{" "}
              <span className="my-auto ml-2">{engine}</span>
            </div>

            <div className="flex w-1/2 justify-start">
              <img src={doorLogo} width={"25px"} alt="km icon" />
              <span className="my-auto ml-2">{`${doors}-doors`}</span>
            </div>
            <div className="flex  justify-start">
              <img src={gasLogo} width={"25px"} alt="km icon" />{" "}
              <span className="my-auto ml-2 font-normal">{fuel}</span>
            </div>
          </div>
        </div>
        <div
          style={{ fontSize: "13px" }}
          className="mx-auto mb-1 flex justify-between px-5 py-2 font-bold text-white text-black"
        >
          <span className=" rounded bg-red-400 p-2 text-center">{`${AvailableFrom}`}</span>
          <span className=" rounded bg-red-400 p-2 text-center">{`${AvailableFrom}`}</span>
        </div>
        {/* pricing and details section*/}
        <div className="mt-3 flex w-full justify-evenly border-t px-3">
          <div className="flex w-full flex-col rounded pt-3 text-left text-xl font-bold">
            <span>{`$${price}0`}</span>
            <span className="-mt-1 text-xs text-gray-400">{" per day"}</span>
          </div>

          <button
            onClick={sendCarData}
            className="mt-4 h-9 w-28 rounded bg-red-400 text-center text-sm text-white hover:bg-red-500"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
