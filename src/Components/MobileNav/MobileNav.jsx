import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import DropdownMenu from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";

const MobileNav = ({ nav, closeNav }) => {
  const navAnimated = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimated}  transform transition-all duration-300 top-0 bottom-0 left-0 right-0 z-[1000000] bg-[#18252b]`}
    >
      <div className="flex z-[1000000] flex-col w-[100vw] h-[100vh] justify-center items-center">
        <Link to="/">
          <div className="nav-link-mobile" onClick={closeNav}>
            Home
          </div>
        </Link>
        <div className="nav-link-mobile">
          <DropdownMenu closeNav={closeNav} />
        </div>

        <Link to="/about">
          <div className="nav-link-mobile" onClick={closeNav}>
            About
          </div>
        </Link>
        <Link to="/portfolio">
        <div className="nav-link-mobile" onClick={closeNav}>
          Portfolio
        </div>
        </Link>
        <Link to="/contact">
          <div className="nav-link-mobile" onClick={closeNav}>
            Contact
          </div>
        </Link>
        <Link to="/GetConsultancy">
          <div className="nav-link-mobile" onClick={closeNav}>
            Toll Free
          </div>
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 "
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
