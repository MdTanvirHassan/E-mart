import React, { useState, useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";

const Navbar = ({cartItems}) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#FFFFFF");

  const { carts } = useSelector((state) => state.products);

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

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-gray-700 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }>
      <div className="flex container m-auto justify-between items-center w-full h-full px-2 2xl:px-16">
        <NavLink to="/">
          <div className=""> 
            <h1 className="text-3xl text-red-500">E-<span className="text-purple-500">mart</span></h1>
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
          {/* //***** humburger */}
          <div className="flex lg:hidden">
          <div className="relative">
            <NavLink to="/cart">
            <AiOutlineShoppingCart
              className="text-3xl cursor-pointer"
              // onClick={() => handleNav()}
            />
            <div className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center">
             {carts.length}
            </div>
            </NavLink>
          </div>
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
          <div>
            <NavLink to="/login" className="flex items-center">
              <FiLogIn className="text-2xl" />
              <span className="ml-2">Login</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/profile" className="flex items-center">
              <BsPersonCircle className="text-2xl" />
              <span className="ml-2">Profile</span>
            </NavLink>
          </div>
          <div className="relative">
            <NavLink to="/cart">
            <AiOutlineShoppingCart
              className="text-2xl cursor-pointer"
              // onClick={() => handleNav()}
            />
            <div className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center">
             {carts.length}
            </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-40 z-[1000]"
            : "hidden"
        }>
        <div className="absolute right-4 top-4 lg:hidden">
          <AiOutlineClose
            onClick={handleNav}
            className="text-3xl text-white cursor-pointer"
          />
        </div>
        <ul className="flex flex-col justify-center items-center text-white text-2xl space-y-8">
          <li>
            <NavLink onClick={handleNav} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNav} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNav} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNav} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
