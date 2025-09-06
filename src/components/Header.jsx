import React from "react";
import Logo from "../assets/IRIB_Mazandaran_White_Logo.png";

function Header() {
  return (
    <div className="w-full py-3 fixed top-0 left-0 bg-gradient-black-to-transparent z-50">
      <div className="flex justify-between px-20 sm:px-20 items-center max-w-7xl mx-auto">
        <div className="w-30">
          <a
            href=""
            className="px-7 py-3 text-white no-underline hover:border-b-2 hover:border-green-500"
          >
            Home
          </a>
          <a
            href=""
            className="px-7 py-3 text-white no-underline hover:border-b-2 hover:border-green-500"
          >
            About
          </a>
          <a
            href=""
            className="px-7 py-3 text-white no-underline hover:border-b-2 hover:border-green-500"
          >
            Storms 101
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={Logo} alt="" className="logo h-12" />
        </div>
        <div className="w-30">
          <button className="py-2 px-7 m-2 text-green-500 text-green border-green rounded bg-transparent cursor-pointer hover:bg-green-500 hover:text-white hover:border-w-2">
            Browse
          </button>
          <button className="py-2 px-6 rounded border-green bg-green-300 cursor-pointer text-black hover:text-white">
            Get the app
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
