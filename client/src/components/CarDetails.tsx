import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import carContext from "../context/CarContext";
import engineIcon from "../assets/icons/icons8-engine-50.png";
import kmIcon from "../assets/icons/icons8-meter-50.png";
import fuelIcon from "../assets/icons/icons8-fuel-50.png";
import doorIcon from "../assets/icons/icons8-car-door-50.png";
import { SpinnerCircular } from "spinners-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function CarDetails() {
  const { getCar } = useContext(carContext);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const car = getCar(params.id);
  const [value, onChange] = useState(new Date());
  const availableFromDate = new Date(car.availableFrom);
  const availableUntilDate = new Date(car.availableUntil);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" mx-auto w-full">
      {isLoading && (
        <SpinnerCircular
          className="mx-auto mt-52"
          color="#B22222"
          size={"70px"}
        />
      )}

      <Calendar
        onChange={onChange}
        value={value}
        minDate={availableFromDate}
        selectRange={true}
        tileClassName={"hover:bg-red-400 bg-green-300"}
        maxDate={availableUntilDate}
      />

      <article className="mx-auto mb-7 flex w-3/4 transform flex-col  justify-between rounded-3xl border  border-gray-200  bg-white p-5 font-sans  drop-shadow-md transition-transform duration-500 hover:-translate-y-2">
        <div className="flex flex-col ">
          {/* image*/}

          <img
            className="  rounded-md rounded-b-none object-fill"
            src={car.images}
            alt={`${car.make} ${car.model}`}
          />

          <div className="mx-auto w-full pl-2 pt-5 text-left ">
            {/* name*/}
            <span className="text-xl font-bold text-black">{`${car.model} ${car.make}  ${car.year}`}</span>
            {/* car features*/}
            <div className="mt-2 text-xs font-bold text-neutral-500">
              Features
            </div>
            <div className="my-1 ml-2 mt-3 flex w-full flex-wrap gap-y-2 text-xs">
              <div className="flex w-1/2 justify-start">
                <div className="font-bold">
                  <img src={kmIcon} width={"25px"} alt="km icon" />{" "}
                </div>
                <span className="my-auto ml-1">{car.kmTraveled + "km"}</span>
              </div>

              <div className="flex w-1/2 justify-start">
                <img src={engineIcon} width={"25px"} alt="km icon" />{" "}
                <span className="my-auto ml-2">{car.engine}</span>
              </div>

              <div className="flex w-1/2 justify-start">
                <img src={doorIcon} width={"25px"} alt="km icon" />
                <span className="my-auto ml-2">{`${car.doors}-doors`}</span>
              </div>
              <div className="flex  justify-start">
                <img src={fuelIcon} width={"25px"} alt="km icon" />{" "}
                <span className="my-auto ml-2 font-normal">{car.fuel}</span>
              </div>
            </div>
          </div>
          <div
            style={{ fontSize: "13px" }}
            className="mx-auto mb-1 flex justify-between px-5 py-2 font-bold text-white "
          >
            <span className=" rounded bg-red-400 p-2 text-center">{`${availableFromDate.getHours()}`}</span>
            <span className=" rounded bg-red-400 p-2 text-center">{`${car.availableUntil}`}</span>
          </div>
          {/* pricing and details section*/}
          <div className="mt-3 flex w-full justify-evenly border-t px-3">
            <div className="flex w-full flex-col rounded pt-3 text-left text-xl font-bold">
              <span>{`${car.price}0`}</span>
              <span className="-mt-1 text-xs text-gray-400">{" per day"}</span>
            </div>
            <button className="mt-4 h-9 w-28 rounded bg-red-400 text-center text-sm text-white hover:bg-red-500">
              Book
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
