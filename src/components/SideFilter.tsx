import React from "react";
import { Type } from "../enums/carEnums";
export default function SideFilter() {
  const getTypeArray = () => {
    return Object.keys(Type).filter((v) => isNaN(Number(v)));
  };
  return (
    <aside className="ml-20 flex h-fit w-1/6 flex-col divide-y rounded bg-white p-4 text-center">
      <span className="my-2 text-left">Filter</span>

      <div className="my-3 grid grid-cols-3 gap-x-1 gap-y-1 pt-2">
        {getTypeArray().map((car, index) => {
          return (
            <div
              style={{ fontSize: "9px" }}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-slate-200"
            >
              {car}
            </div>
          );
        })}
      </div>

      <div>
        <span>Price</span>
        <input
          type="range"
          name="price"
          id="price"
          min={20}
          max={100}
          step={5}
        />
      </div>
    </aside>
  );
}
