import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
      </BrowserRouter>
    </>
  );
};

export default App;
