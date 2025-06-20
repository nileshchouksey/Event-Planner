import React from "react";
import BG from "../assets/BG.png";
export const Hero = () => {
  return (
    <>
      <div className="-mt-30 relative h-200 flex justify-center items-center">
        <img src={BG} alt="" className="absolute -z-1" />\
        <div className="grid justify-center items-center top-10">
          <h1 className="text-red-500 text-8xl font-extrabold font-[family-name:var(--customfont)] ">
            Turn Your Dreams <br />
            Into Reality
          </h1>

          <div className="flex justify-center items-center gap-10 ">
            <button className="rounded px-5 py-3 bg-red-400 ">Log In</button>
            <button className="rounded px-5 py-3 bg-red-400 ">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
