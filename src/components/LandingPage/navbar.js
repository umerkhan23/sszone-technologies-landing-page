import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [home, setHome] = useState(false);
  const [features, setFeatures] = useState(false);
  const [form, setForm] = useState(false);

  // useEffect(() => {
  //   if (prop.page === 'Home') {
  //     setHome(true);
  //     setFeatures(false);
  //     setForm(false);
  //   }
  //   if (prop.page === 'Features') {
  //     setHome(false);
  //     setFeatures(true);
  //     setForm(false);
  //   }
  //   if (prop.page === 'Form') {
  //     setHome(false);
  //     setFeatures(false);
  //     setForm(true);
  //   }
  // },[prop.page])

  return (
    <div
      id="home"
      className="flex justify-between items-center  bg-[#000000] h-[50px] shadow-lg pl-5 pr-5"
    >
      <img className="w-10 h-10" src={logo} alt="merathon-logo" />
      <div className="flex gap-12">
        <a href="#home">
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <h4 className="text-[18px] text-[#54B435] font-bold hover:text-[#FFFFFF]">
              Home
            </h4>
          </div>
        </a>
        <a href="#about">
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <h4 className="text-[18px] text-[#54B435] font-bold hover:text-[#FFFFFF]">
              About
            </h4>
          </div>
        </a>
        <a href="#features">
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <h4 className="text-[18px] text-[#54B435] font-bold hover:text-[#FFFFFF]">
              Features
            </h4>
          </div>
        </a>
        <a href="#project">
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <h4 className="text-[18px] text-[#54B435] font-bold hover:text-[#FFFFFF]">
              Projects
            </h4>
          </div>
        </a>
        <a href="#form">
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <h4 className="text-[18px] text-[#54B435] font-bold hover:text-[#FFFFFF]">
              Form
            </h4>
          </div>
        </a>
        {/* <Link to="/login"> */}
        <div className="flex flex-col justify-center items-center hover:cursor-pointer">
          <h4 className="text-[18px] text-[#54B435] font-bold hover:text-[#FFFFFF]">
            Login
          </h4>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
