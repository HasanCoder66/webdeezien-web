import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapLocation from "../MapLocation/MapLocation";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-[#18252b] z-[10]">
      <div className="footerWrapper py-[95px] px-[46px] text-white flex flex-col gap-[40px] ">
        <div className="flex p-[10px] lg:flex-row md:flex-col sm:flex-col topBox">
          <div className="left flex-1 px-[16px]">
            <h1 className="text-[46px] font-normal digitalText">
              Let’s Build Your Next
              <span className="text-[#fdda0d]"> Digital Product</span>{" "}
            </h1>
            <p className="text-[23px] font-light text-white digitalText2">
              Turn your ideas into reality in just a span of 4-12 weeks!
              Kickstart your project with us now and revamp your results.
            </p>
          </div>
          <div className="right flex-1 flex justify-end items-center px-[16px]">
            <Link to='/contact'>
            <button className="py-[17px] px-[39px] bg-[#fdda0d] text-black  hover:bg-[#097969] hover:text-white font-bold">
              Talk to an Expert
            </button>
            </Link>
          </div>
        </div>

        <div className="p-[10px] flex lg:flex-row md:flex-col sm:flex-col midBox">
          <div className="left flex flex-col flex-1 gap-[15px] px-[16px]">
            <h1 className="text-[46px] nav-link">Webdeezien</h1>
            <p className="text-[16px] text-white">
              The ultimate all-service agency ready to simplify your project
              needs and curate results fit for your digital needs and niche.
            </p>
            <div className="flex items-center gap-[10px]">
              <FacebookIcon className="cursor-pointer" />
              <InstagramIcon className="cursor-pointer" />
              <LinkedInIcon className="cursor-pointer" />
              <PinterestIcon className="cursor-pointer" />
            </div>
          </div>

          <div className="center flex flex-col flex-1 px-[16px] justify-between ">
            <p className="text-[18px] text-[#097969] mb-[10px] nav-link-1">
              Services
            </p>
            <Link to='/services/logo'>
            <p className="text-[16px] cursor-pointer">Logo Packages</p>
            </Link>
            <Link to='/services/web'>
            <p className="text-[16px] cursor-pointer">Website Packages</p>
            </Link>
            <Link to='/services/seo'>
            <p className="text-[16px] cursor-pointer">Seo</p>
            </Link>
            <Link to='/services/ecommerce'>
            <p className="text-[16px] cursor-pointer">E-Commerce Packages</p>
            </Link>
            <Link to='/services/smm'>
            <p className="text-[16px] cursor-pointer">SMM Packages</p>
            </Link>
            <Link to='/services/branding'>
            <p className="text-[16px] cursor-pointer">Branding Packages</p>
            </Link>
            <Link to='/services/video'>
            <p className="text-[16px] cursor-pointer">Video Packages</p>
            </Link>
            <Link to='/services/hosting'>
            <p className="text-[16px] cursor-pointer">Hosting Packages</p>
            </Link>

          </div>
          <div className="right px-[16px] flex-1">
            <p className="text-[18px] text-[#097969] mb-[10px] nav-link-1">
              Find Us
            </p>
            <MapLocation />
          </div>
        </div>

        <div className="p-[10px] flex lg:flex-row md:flex-col sm:flex-col bottomBox">
          <div className="left flex-1 px-[16px]">
            <div className="flex text-[#097969] gap-[5px] items-center mb-[15px]">
              <PhoneIcon className="text-[#097969]" />
              <span className="nav-link-1 text-[#097969]">Contact Us</span>
            </div>
            <p>(507) 623-2311</p>
          </div>
          <div className="center flex-1 px-[16px]">
            <div className="flex  gap-[5px] items-center mb-[15px]">
              <AlternateEmailIcon className="text-[#097969]" />
              <span className="nav-link-1 text-[#097969]">Email Us</span>
            </div>
            <a>Info@webdeezien.com</a>
          </div>
          <div className="right flex-1 px-[16px]">
            <div className="flex  gap-[5px] items-center mb-[15px]">
              <LocationOnIcon className="text-[#097969]" />
              <span className="nav-link-1 text-[#097969]">Address</span>
            </div>
            <p>6605 NW 121st Street Oklahoma City, Ok. 73162</p>
          </div>
        </div>
      </div>

      <div className="py-[20px] flex copyright">
        <div className="mx-auto text-white">
          webdeezien © 2024 All Rights Reserved
        </div>
        <div className="mx-auto text-[grey]">Terms & Conditions</div>
      </div>
    </div>
  );
};

export default Footer;
