import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h1 className="text-6xl">E-mart</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Privacy & Terms
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Payment Systems
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                  About Us
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                  Return Policy
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <div className="mt-0 justify-center md:items-center pb-5  md:mt-0  text-left">
                <div className=" px-2 ">
                  <h3 className="font-bold  text-xl  mb-4 text-black text-center">
                    Subscribe To Newsletter
                  </h3>
                  <form action="" className="flex justify-center">
                    <div className=" ">
                      <input
                        type="email"
                        className="bg-white text-start border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2 px-5 shadow-xl shadow-gray-300"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <button
                      type="button"
                      className="text-white bg-orange-500 hover:bg-black/70 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-0 text-center -ml-1 z-10">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <span className="ml-3 text-xl">E-mart</span>

            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © Copyright 2023 E-MART —  All Rights Reserved
              
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
