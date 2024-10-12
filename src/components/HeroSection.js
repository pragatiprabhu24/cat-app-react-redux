import React from "react";
import cat from "../asset/images/cat.gif";

const HeroSection = () => {
  return (
    <section className="text-white flex items-center min-h-screen p-4">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Find Your Purr-fect Companion
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            Explore a variety of adorable cats waiting for a loving home!
          </p>
          <a
            href="#cats"
            className="bg-[#393E46] hover:bg-[#333A3F] text-white font-semibold rounded-lg px-6 py-3 transition duration-300"
          >
            Browse Cats
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={cat}
            alt="Cute Cat"
            className="max-w-xs sm:max-w-sm md:max-w-md rounded-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
