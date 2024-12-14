import React from "react";
import SpecialCardData from "../SpecializeCard/SpecializeCardData";
import Specialize from "../SpecializeCard/SpecializeCard";
const WeSpecialize = () => {
  return (
    <div className=" bg-[#097969] pt-[2rem]">
      <div>
        <h1 className="text-center font-bold text-3xl text-white mb-[1rem] mt-[2rem]">
          Working On
        </h1>
        <h1 className="text-center font-bold text-6xl text-white">
          WE <span className="text-[#fdda0d]">SPECIALIZE</span> IN VARIOUS CMS
        </h1>
      </div>
      <div className="flex  justify-evenly flex-wrap gap-5 p-[50px]">
        {SpecialCardData.map((data) => (
          <Specialize data={data} />
        ))}
      </div>
    </div>
  );
};

export default WeSpecialize;
