import React from "react";
import Logo from "../../ejaroLogo.png";
export default function Nav() {
  return (
    <nav className="mx-auto w-fit px-0">
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
