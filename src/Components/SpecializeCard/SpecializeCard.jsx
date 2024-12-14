import React from "react";
import "./SpecializeCard.css";
import { Fade } from "react-awesome-reveal";
const Specialize = ({ data }) => {
  return (
    <>
      <Fade cascade damping={0.4} direction="up" triggerOnce>
        <div className="card border-2	border-[#fdda0d] flex items-center justify-center">
          <h2 className="text-center font-medium text-white text-[20px]">
            {data?.title}
          </h2>
        </div>
      </Fade>
    </>
  );
};

export default Specialize;
