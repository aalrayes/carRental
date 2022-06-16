import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import carContext from "../context/CarContext";
import engineIcon from "../assets/icons/icons8-engine-50.png";
import kmIcon from "../assets/icons/icons8-meter-50.png";
import fuelIcon from "../assets/icons/icons8-fuel-50.png";
import doorIcon from "../assets/icons/icons8-car-door-50.png";
import { SpinnerCircular } from "spinners-react";
import Calendar from "react-calendar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-calendar/dist/Calendar.css";
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

export default function CarDetails() {
  const { getCar } = useContext(carContext);
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const [car, setCar] = useState<Car>();
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    async function getCarFromServer() {
      window.scrollTo(0, 0);
      setIsLoading(true);
      const res = await fetch(`http://localhost:8080/api/v1/cars/${params.id}`);
      if (res.status == 404) {
        navigate("/NotFound");
      }
      const data = await res.json();

      setCar(data);
      setIsLoading(false);
    }
    let carFrom = getCar(params.id);
    console.log("Car state", car);
    if (typeof carFrom == "undefined" && typeof car == "undefined") {
      getCarFromServer();
    }
    if (typeof carFrom != "undefined") setCar(carFrom);
  }, []);

  const renderCarDetails = () => {
    return (
      <article className="mx-auto mb-7 flex w-fit transform flex-col justify-between rounded-3xl border  border-gray-200  bg-white p-5 font-sans  drop-shadow-md  ">
        {/* image*/}

        <Carousel className="mx-auto bg-gray-100" width="800px">
          <div>
            <img
              className=" mx-auto w-72 rounded-md rounded-b-none object-fill"
              src={car?.images}
              alt={`${car?.make} ${car?.model}`}
            />
          </div>
          <div>
            <img
              className=" mx-auto w-72 rounded-md rounded-b-none object-fill"
              src={car?.images}
              alt={`${car?.make} ${car?.model}`}
            />
          </div>
        </Carousel>

        <div className="flex">
          <div className="mx-auto w-full pl-2 pt-5 text-left ">
            {/* name*/}
            <span className="text-xl font-bold text-black">{`${car?.model} ${car?.make}  ${car?.year}`}</span>
            {/* car features*/}
            <div className="mt-2 text-xs font-bold text-neutral-500">
              Features
            </div>
            <div className="my-1 ml-2 mt-3 flex w-full flex-wrap gap-y-2 text-xs">
              <div className="flex w-1/2 justify-start">
                <div className="font-bold">
                  <img src={kmIcon} width={"25px"} alt="km icon" />{" "}
                </div>
                <span className="my-auto ml-1">{car?.kmTraveled + "km"}</span>
              </div>

              <div className="flex w-1/2 justify-start">
                <img src={engineIcon} width={"25px"} alt="km icon" />{" "}
                <span className="my-auto ml-2">{car?.engine}</span>
              </div>

              <div className="flex w-1/2 justify-start">
                <img src={doorIcon} width={"25px"} alt="km icon" />
                <span className="my-auto ml-2">{`${car?.doors}-doors`}</span>
              </div>
              <div className="flex  justify-start">
                <img src={fuelIcon} width={"25px"} alt="km icon" />{" "}
                <span className="my-auto ml-2 font-normal">{car?.fuel}</span>
              </div>
            </div>
          </div>

          {/* pricing and details section*/}
          <div className="mx-auto mt-3 flex w-full flex-col justify-evenly border-l  px-3">
            <div className="mx-auto font-bold">Availability Range</div>
            <div
              style={{ fontSize: "13px" }}
              className="mx-auto mb-1 flex justify-between px-5 py-2 font-bold"
            >
              {/* <div className=" mx-1 w-40 rounded border p-5 text-center text-black">{`${?.toDateString()}`}</div>
              <div className=" mx-1 w-40 rounded border p-5 text-center text-black">{` ${car?.toDateString()}`}</div> */}
            </div>
            <div className="mx-auto flex w-fit flex-col rounded bg-slate-200 px-20 py-4 pt-3 text-xl font-bold">
              <span className="mx-auto ">{`${car?.price}0`}</span>
              <span className="mx-auto text-xs text-gray-500">
                {" per week"}
              </span>
            </div>
            <button className="mx-auto mt-4 h-9 w-28 rounded bg-red-400 text-center text-sm text-white hover:bg-red-500">
              Book
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className=" mx-auto w-full">
      {isLoading && (
        <SpinnerCircular
          className="mx-auto mt-52"
          color="#B22222"
          size={"70px"}
        />
      )}

      {!isLoading && renderCarDetails()}
    </section>
  );
}
