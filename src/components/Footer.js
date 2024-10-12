import React from "react";
import logo from "../asset/images/cat-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#393E46] p-4">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse mb-4 sm:mb-0"
          >
            <img src={logo} className="h-20" alt="Caterpillar Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-mono">
              Caterpillar
            </span>
          </a>
          <div>
            <p className="text-white font-bold text-center sm:text-left">
              Made with ❤️ by Pragati Prabhu
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <span className="block text-sm text-white text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            catsite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
