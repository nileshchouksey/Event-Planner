import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-transparent flex justify-center gap-10  items-center sticky top-0 z-99 text-2xl text-decoration-none">
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Our Services</Link>
        <Link to={"/stories"}>Client Stories</Link>
        <Link to={"/"}>
          <img src={logo2} alt="" className="h-[5em]" />
        </Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact Us</Link>
        {/* <button
          className="border p-3 rounded-md"
          onClick={() => navigate("login")}
        >
          {" "}
          Login to Plan your event{" "}
        </button> */
        <button
  className="
    inline-flex items-center space-x-2
    bg-blue-600 text-white font-medium
    px-5 py-3 rounded-lg
    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    transition-colors duration-200 ease-in-out
  "
  onClick={() => navigate('login')}
>
  {/* Optional icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
  </svg>
  <span>Login to Plan Your Event</span>
</button>

        }
      </div>
    </>
  );
};

export default Navbar;