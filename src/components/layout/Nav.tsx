import React from "react";
import Logo from "../../assets/logo.png";
import { useLocation, Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
export default function Nav() {
  return (
    <nav className="mx-auto my-10 flex w-1/2 rounded-full bg-neutral-50">
      <div className=" relative mx-auto my-2 h-20 w-20 rounded-full bg-red-600 text-center">
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
