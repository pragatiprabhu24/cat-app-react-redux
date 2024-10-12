// src/components/Navbar.js

import React, { useState } from "react";
import logo from "../asset/images/cat-logo.png";
import { LuPhoneCall } from "react-icons/lu";
import { FaHome, FaSearch, FaCat } from "react-icons/fa";

const Navbar = ({ onFiltersApplied }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#FD7014] dark:bg-gray-900 fixed w-full z-20 top-0 shadow-lg transition-shadow duration-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-mono">
              Caterpillar
            </span>
          </a>

          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`flex-grow ${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-between`}
          >
            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 lg:ml-20">
              <ul className="flex flex-col p-4 mt-4 font-medium text-center border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <a
                    href="/"
                    className="flex items-center py-2 px-3 text-white rounded md:bg-transparent"
                    aria-current="page"
                  >
                    <FaHome className="mr-2" /> Home
                  </a>
                </li>
                <li>
                  <a
                    href="/explore"
                    className="flex items-center py-2 px-3 text-white rounded md:bg-transparent"
                  >
                    <FaCat className="mr-2" /> Explore more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
