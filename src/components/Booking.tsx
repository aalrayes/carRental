import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "react-calendar/dist/Calendar.css";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCar } from "../api/CarService";

export default function Booking() {
  useEffect(() => {
    document.title = "Ejaro - Booking";
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  let { data, status, error, isLoading } = useQuery(["car", params.id], () => {
    return getCar(params.id);
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
        placeholderText="This only includes dates from 5 days ago to 5 days in the future"
        includeDateIntervals={[
          {
            start: subDays(new Date(data.availableFrom), 0),
            end: addDays(new Date(data.availableUntil), 0),
          },
        ]}
        selectsDisabledDaysInRange
        inline
      />
    );
  };

  return (
    <section className="mx-auto w-full rounded-2xl ">
      <div className="ml-auto  text-center"> {cal()}</div>

      {/* <Calendar /> */}
    </section>
  );
}
