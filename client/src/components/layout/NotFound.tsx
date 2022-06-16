import React from "react";
import { Link } from "react-router-dom";
import NotFound404 from "../../assets/notFound404.svg";
export default function NotFound() {
  return (
    <section className="mx-auto flex h-screen w-full flex-col">
      <img className="mx-auto" src={NotFound404} width={"500px"} alt="" />
      <Link className="mx-auto" to="/">
        <button className="mx-auto rounded bg-red-400 p-4 text-white ">
          Back home
        </button>
      </Link>
    </section>
  );
}
