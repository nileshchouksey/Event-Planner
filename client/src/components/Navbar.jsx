import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-transparent flex justify-center gap-10 text-xxl items-center sticky top-0 z-99 text-white ">
        <Link to={"/About"}>About</Link>
        <Link to={"/Stories"}>Stories</Link>

        <Link to={"/Services"}>Services</Link>
        <Link to={"/"}>
          <img src={logo2} alt="" className="h-20 w-20" />
        </Link>
        <Link to={"/Gallery"}>Gallery</Link>
        <Link to={"/Elements"}>Elements</Link>
        <Link to={"/Contact"}>Contact</Link>
      </div>

      
    </>
  );
};

export default Navbar;
