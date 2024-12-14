import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import DropdownMenu from "../Dropdown/Dropdown";

const Nav = ({ openNav }) => {
  return (
    <div className="w-[100%] z-[10000] top-0 h-[12vh] bg-[#18252b] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] font-bold text-[#097969] ">
          web
          <span className=" text-[25px] hover:text-[#FDDA0D]">deezien</span>
        </h1>
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        <div className="nav-link">
          <DropdownMenu />
        </div>
        <Link to="/about">
          <div className="nav-link">About</div>
        </Link>
        <Link to="/portfolio">
          <div className="nav-link">Portfolio</div>
        </Link>
        <Link to="/Contact">
          <div className="nav-link">Contact</div>
        </Link>
        <Link to="/GetConsultancy">
          <div className="nav-link">Toll Free</div>
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] text-yellow-300 cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Nav;
