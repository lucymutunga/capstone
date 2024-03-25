import React from "react";
import me from "../assets/images/me.jpeg";

const hero = () => {
  return (
    <div className="hero-container grid grid-rows-2  place-items-center bg-white md:grid-cols-2 md:mt-6 md:border md:border-grey md:w-auto">
      <div className="hero-text px-2">
        <h1 className="text-4xl font-semibold md:text-4xl lg:text-6xl lg:w-26">
          Welcome to my page
        </h1>
        <p className="text-2xl mt-2 md:mt-12 lg:text-4xl">
          Get to know me just by scrolling and a few clicks as you please
        </p>
      </div>

      <img
        src={me}
        className="w-60 h-60 rounded-full object-cover md:mt-8 md:w-80 md:h-80 lg:w-96 lg:h-96"
      />

      <a
        href="https://portfolioalcy.netlify.app/"
        className="bg-[#adb5bd] rounded-lg font-bold  w-32 mt-6 py-2 md:ml-80 md:mt-0 md:p-4 lg:w-48 lg:h-16 lg:position-center lg:mb-36 lg:ml-auto lg:text-2xl"
      >
        About me
      </a>
    </div>
  );
};

export default hero;
