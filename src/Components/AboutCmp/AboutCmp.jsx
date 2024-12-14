import React from "react";
import AboutImg from "../AboutImg/AboutImg";

const AboutCmp = () => {
  return (
    <>
      <div className="text-center w-[100%] lg:p-[5rem] p-[2rem] ">
        <div className="flex justify-evenly items-center lg:flex-row flex-col space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#097969]  font-bold md:text-4xl">
              <span className="text-[#fdda0d]">About</span> webdeezien
            </h2>
            <p className="text mt-6 text-black text-center">
              WEB DEEZIEN COMPANY IN NEW YORK CITY FOCUSED ON YOUR BUSINESS
              GROWTH
            </p>
            <p className="text mt-6 text-black text-center">
              Catering startups and enterprisesblack with the best UX, UI, and
              localization!
            </p>
            <p className="text mt-6 text-black text-center">
              We are an award-winning digital marketing agency in NYC,
              delivering excellent results and exceeding clients' expectations
              by creating top-notch online experiences. Our proficiency ensures
              to pull off the most aesthetically stunning and
              navigation-friendly websites. We are responsible for planning,
              researching, visualizing, and coding websites. The business goals
              can align with our creativity and innovation by combining text,
              images, videos, and graphics.
            </p>
            <p className="text mt-6 text-black text-center">
              Contact the best web design company in New York to channel our
              energy for increased leads and boosting sales. We use our
              expertise to push the boundaries of the modern-day and guarantee
              that your website ends up well-optimized and glitch-free.
            </p>
          </div>
          <div className="">
            <AboutImg />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCmp;
