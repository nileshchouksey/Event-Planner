import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./pages/userDashboard";
import UserDashboardEdit from "./pages/UserDashboardEdit";
import CustomerDashboard from "./pages/CustomerDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/userDashboardEdit" element={<UserDashboardEdit />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
