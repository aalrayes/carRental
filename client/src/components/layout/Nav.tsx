import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
export default function Nav() {
  let activeStyle = {
    display: "hidden",
  };
  return (
    <nav className="flex w-full px-0">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className=" my-auto ml-10 mr-10"
        to="/"
      >
        <IoChevronBackOutline className=" my-auto ml-10  cursor-pointer text-4xl text-red-600" />{" "}
      </NavLink>
      <div className=" my-10 h-20 w-20 rounded-full bg-red-600 text-center">
        <a href="/">
          <img
            className="mx-auto py-7"
            height={"50px"}
            width={"50px"}
            src={Logo}
            alt="ejaro logo"
          />
        </a>
      </div>
    </nav>
  );
}
