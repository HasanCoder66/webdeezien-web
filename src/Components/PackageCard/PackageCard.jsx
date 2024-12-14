import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PackageCard = ({ data }) => {
  // console.log(data.items, "====>>> data from prop")
  const dataItems = data?.items
  // console.log(dataItems, "====>>> dataItems from prop")
  return (
    <>
      <div className="bg-white rounded-lg min-h-[670px] transition-all ease-in-out duration-200 hover:shadow-md p-6 max-w-[500px] text-[#1e4649] text-left  ">
        <div className="w-[100%] flex items-center justify-center mb-[20px] ">
          <img
            src={data?.img || "https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534451/branding%20hopes/Marketing-bro_u710jw.svg"}
            alt=""
            className="w-[266px] h-[266px]"
          />
        </div>
        <h2 className="text-3xl mb-2 font-medium text-[#097969] text-center">
          {data?.title}
        </h2>
        <p className="mb-4 text-[16px] text-black  text-center">
          {data?.desc}
        </p>
        <ul className="list-none mb-4 text-[#097969]">
          {
            dataItems.map((item) => (
              <li className="text-[16px] flex gap-[10px] mb-[10px]">
                <ArrowForwardIcon className="text-[#FDDA0D]" />
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default PackageCard;
