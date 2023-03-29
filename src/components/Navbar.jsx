import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import { FaFacebook, FaGithub, FaaedinIn } from 'react-icons/fa';
import { BiSearchAlt } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
//import NavLogo from '../public/assets/navLogo3.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#FFFFFF");
  // const [position, setPosition] = useState('fixed')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg("#FEFEFE");
        setLinkColor("#FFFFFF");
      } else {
        setShadow(false);
        setNavBg("transparent");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-gray-700 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <NavLink to="/">
          <div className="">
            {/* <img
              //src={NavLogo}
              alt="/"
              width="125"
              height="50"
              className="cursor-pointer"
            /> */}
            <h1 className="text-3xl">E-mart</h1>
          </div>
        </NavLink>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden lg:flex">
            <li className="ml-7 text-purple-600 font-bold navHover">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="ml-7 text-purple-600 font-bold navHover">
              <NavLink to={"/about"}>About</NavLink>
            </li>

            <li className="ml-7 text-purple-600 font-bold navHover">
              <NavLink to={"/products"}>Products</NavLink>
            </li>

            <li className="ml-7 text-purple-600 font-bold navHover">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div className="flex lg:hidden">
          <AiOutlineShoppingCart className="text-3xl text-purple-600 m-auto" />
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="lg:hidden mx-2 rounded-full bg-gray-100 p-2">
            <AiOutlineMenu size={25} className="text-purple-600 font-bold" />
          </div>
          </div>
        </div>
        <div className="hidden md:flex space-x-4 text-purple-600 font-bold">
          <div className="m-auto">
            <BiSearchAlt className="text-2xl" />
          </div>
          <div >
            <NavLink to="/login" className="flex space-x-2 border px-3 py-2 hover:bg-black hover:text-white rounded-md">
              <FiLogIn className="text-2xl" />
              <span>Login</span>
            </NavLink>{" "}
          </div>
          <div >
            <NavLink to="/register " className="flex space-x-2 border px-3 py-2 hover:bg-black hover:text-white rounded-md ">
              <BsPersonCircle className="text-2xl" />
              <span>Register</span>
            </NavLink>
          </div>
          <div >
            <NavLink to="/cart" className="flex space-x-2 border px-3 py-2 hover:bg-black hover:text-white rounded-md ">
              <AiOutlineShoppingCart className="text-2xl" />
              <span>Cart</span>
            </NavLink>{" "}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <NavLink to="/">
                <>
                  {/* <img src={NavLogo} width="87" height="35" alt="/" /> */}
                  <h1 className="text-3xl">E-mart</h1>
                </>
              </NavLink>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                <AiOutlineClose className="text-black" />
              </div>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <NavLink to="/">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Home
                </li>
              </NavLink>
              <NavLink to="/#about">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  About
                </li>
              </NavLink>
              
              <NavLink to="/#projects">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Projects
                </li>
              </NavLink>
              
              <NavLink to="/#contact">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
