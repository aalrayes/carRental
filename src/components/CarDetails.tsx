import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { useQuery } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarFeature from "./CarFeatures";
import { getCar } from "../api/CarService";
import { addDays, subDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CarDetails() {
  const params = useParams();
  let { data, status, isLoading } = useQuery(["car", params.id], () => {
    return getCar(params.id);
  });
  let navigate = useNavigate();
  const fromDate = new Date(data?.availableFrom).toDateString();
  const toDate = new Date(data?.availableUntil).toDateString();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(null);
  const imgArray = data?.images;

  const genSlides = () => {
    return imgArray.map((img) => {
      return (
        <div>
          <img
            className=" mx-auto w-72 rounded-md rounded-b-none object-fill"
            src={img}
            alt={`${data?.make} ${data?.model}`}
          />
          ;
        </div>
      );
    });
  };

  console.log(imgArray);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log(endDate);
  };

  const cal = () => {
    return (
      <DatePicker
        selectsRange={true}
        isClearable={true}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        includeDateIntervals={[
          {
            start: subDays(new Date(data.availableFrom), 1),
            end: addDays(new Date(data.availableUntil), 1),
          },
        ]}
        selectsDisabledDaysInRange
        inline
      />
    );
  };

  if (status === "error") {
    navigate("/NotFound");
  }
  const features = {
    engine: data?.engine,
    kmTraveled: data?.kmTraveled,
    doors: data?.doors,
    fuel: data?.fuel,
  };

  if (isLoading) {
    return (
      <SpinnerCircular
        className="mx-auto mt-52"
        color="#B22222"
        size={"70px"}
      />
    );
  }

  return (
    <section className=" mx-auto w-full">
      <article className="mx-auto mb-20 flex w-fit transform flex-col justify-between rounded-3xl border  border-gray-200  bg-white p-5 font-sans  drop-shadow-md  ">
        {/* image*/}

        <Carousel className="mx-auto bg-gray-100" width="800px">
          {genSlides()}
        </Carousel>

        <div className="flex">
          <div className="mx-auto w-full pl-2 pt-5 text-left ">
            {/* name*/}
            <span className="text-xl font-bold text-black">{`${data?.model} ${data?.make}  ${data?.year}`}</span>
            {/* data features*/}
            <div className="mt-2 text-xs font-bold text-neutral-500">
              Features
            </div>
            <CarFeature data={features} />
            <div className="mx-auto mt-7  flex w-full flex-col rounded bg-slate-200 px-20 py-4 pt-3 text-xl font-bold">
              <span className="mx-auto ">{`$${data?.price}`}</span>
              <span className="mx-auto text-xs text-gray-500">
                {" per week"}
              </span>
            </div>
          </div>

          {/* pricing and details section*/}
          <div className="mx-auto mt-3 ml-5 flex w-full flex-col justify-evenly border-l px-3 ">
            <div className="mx-auto font-bold">Availability Range</div>

            <div
              style={{ fontSize: "13px" }}
              className="mx-auto mb-1 flex justify-between px-5 py-2 font-bold"
            >
              <div className=" mx-1 w-40 rounded border p-5 text-center text-black">
                {fromDate}
              </div>
              <div className=" mx-1 w-40 rounded border p-5 text-center text-black">
                {toDate}
              </div>
            </div>
            <div className="mx-auto">{cal()}</div>
          </div>
        </div>
        <button
          onClick={() => {
            alert("Booking successful");
            navigate("/");
          }}
          disabled={endDate === null}
          className="mx-auto mt-10 h-12 w-1/2 rounded bg-red-400 text-center text-lg text-white hover:bg-red-500 disabled:bg-gray-500"
        >
          Book
        </button>
      </article>
    </section>
  );
}
