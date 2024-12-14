import React from "react";
import Button from "../Button/Button";
import LiquidText from "../LiquidText/LiquidText";
import LetsTalkBtn from "../LetsTalkBtn/LetsTalkBtn";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  return (
    <div className="flex w-[100%] h-[100%] justify-center items-center flex-col md:flex-row  sm:text-center">
      <div className=" mt-5 flex-1 sm:flex-col ">
        <div className="w-[100%]">
          <LiquidText />
        </div>
        <p className="sm:text-[15px] md:text-[15px] text-black text-center px-[50px] sm:w-[100] ">
          We believe in transformations and make all accelerations to simplify
          the process and complete each task an easy breeze for you. Our aim is
          simple, to innovate, create and curate perfection through our
          strategic plans for impactful branding and marketing. We believe in a
          whirlpool of creativity to transform your brand towards inclined
          growth.
        </p>
        <div className="flex flex-col items-center">
          <p className=" text-2xl text-[#097969] font-semibold text-start pt-[30px]">
            Start a Conversation
          </p>
          <div className="w-fit py-[10px]">
            <Link to='/contact'>
              <LetsTalkBtn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
