import React, { useState, useEffect } from 'react';
import { AiOutlineClose,  AiOutlineMenu } from 'react-icons/ai';
// import { FaFacebook, FaGithub, FaaedinIn } from 'react-icons/fa';
// import { BsWhatsapp } from 'react-icons/bs';
//import NavLogo from '../public/assets/navLogo3.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('transparent');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg('#000000');
      } else {
        setShadow(false);
        setNavBg('transparent');
      }
    };
    window.addEventListener('scroll', handleShadow);
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
        <a href="/">
          <div className="">
            {/* <img
              //src={NavLogo}
              alt="/"
              width="125"
              height="50"
              className="cursor-pointer"
            /> */}
            <h1 className='text-3xl'>E-mart</h1>
          </div>
        </a>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden lg:flex">
            
            <li className="ml-7 text-black navHover">
              <a href="/">Home</a>
            </li>
            <li className="ml-7 text-black navHover">
              <a href="/#about">About</a>
            </li>
            <li className="ml-7 text-black navHover">
              <a href="/#skills">Skills</a>
            </li>
            <li className="ml-7 text-black navHover">
              <a href="/#projects">Projects</a>
            </li>
            <li className="ml-7 text-black navHover">
              <a href="/resume">Resume</a>
            </li>
            <li className="ml-7 text-black navHover">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="lg:hidden mx-2 rounded-full bg-gray-600 p-2">
            <AiOutlineMenu size={25} className="text-white" />
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
              <a href="/">
                <>
                  {/* <img src={NavLogo} width="87" height="35" alt="/" /> */}
                 <h1 className='text-3xl'>E-mart</h1> 
                </>
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                <AiOutlineClose className="text-black" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-2">
              <p className="w-[85%] md:w-[90%] py-4 text-gray-500">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Home
                </li>
              </a>
              <a href="/#about">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  About
                </li>
              </a>
              <a href="/#skills">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Skills
                </li>
              </a>
              <a href="/#projects">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Projects
                </li>
              </a>
              <a href="/resume">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Resume
                </li>
              </a>
              <a href="/#contact">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Contact
                </li>
              </a>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
