import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { FaTv } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="nav-wrapper text-white font-mont font-semibold flex flex-col w-24 h-screen bg-dark-550 text-center ">
      <div className="mb-5">
        <h1 className="text-xl">TMDb</h1>
      </div>
      <div>
        <ul>
          <li className="my-8">
            <a>
              <div className="flex flex-col items-center">
                <BiCameraMovie size={36} />
              </div>
            </a>
          </li>
          <li className="my-8">
            <a className="text-xl">
              <div className="flex flex-col items-center">
                <FaTv size={32} />
              </div>
            </a>
          </li>
          <li className="my-8">
            <a className="text-xl">
              <div className="flex flex-col items-center">
                <IoGameController size={32} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
