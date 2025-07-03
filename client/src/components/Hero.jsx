import React from "react";
import homeBG from "../assets/homeBG.jpg";

export const Hero = () => {
  return (
    <>
      <div className="-mt-30 relative h-200 flex justify-center items-center">
        <img src={homeBG} alt="" className="absolute -z-1" />\
        <div className="grid justify-center items-center top-15">
          {/* <h1 className="fw-bold display-1 text-white aos-init aos-animate" data-aos="fade-up" data-aos-duration="500"  >Turning Dreams into Reality</h1> */
          <h1
  className="
    text-6xl md:text-7xl lg:text-8xl
    font-bold font-playfair-display
    text-fuchsia-400 text-center
    leading-tight
    aos-init aos-animate
  "
  data-aos="fade-up"
  data-aos-duration="700"
>
  Turning Dreams into Reality
</h1>

          }

          <div className="flex justify-center items-center gap-10 ">
            {/* <button className="rounded px-5 py-3 bg-red-400 ">Log In</button>
            <button className="rounded px-5 py-3 bg-red-400 ">Book Now</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
