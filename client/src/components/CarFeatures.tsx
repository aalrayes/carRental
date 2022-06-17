import React from "react";
import engineIcon from "../assets/icons/icons8-engine-50.png";
import kmIcon from "../assets/icons/icons8-meter-50.png";
import fuelIcon from "../assets/icons/icons8-fuel-50.png";
import doorIcon from "../assets/icons/icons8-car-door-50.png";
export default function CarFeatures({ data }) {
  return (
    <div className="my-1 ml-2 mt-3 flex w-full flex-wrap gap-y-2 text-xs">
      <div className="flex w-1/2 justify-start">
        <img src={kmIcon} width={"25px"} alt="km icon" />{" "}
        <span className="my-auto ml-2">{data.kmTraveled}km</span>
      </div>

      <div className="flex w-1/2 justify-start">
        <img src={engineIcon} width={"25px"} alt="engine icon" />{" "}
        <span className="my-auto ml-2">{data.engine}</span>
      </div>

      <div className="flex w-1/2 justify-start">
        <img src={doorIcon} width={"25px"} alt="door icon" />
        <span className="my-auto ml-2">{`${data.doors}-doors`}</span>
      </div>
      <div className="flex  justify-start">
        <img src={fuelIcon} width={"25px"} alt="fuel icon" />{" "}
        <span className="my-auto ml-2 font-normal">{data.fuel}</span>
      </div>
    </div>
  );
}
