import React from "react";
import me from "../assets/images/me.jpeg";

const hero = () => {
  return (
    <div className="hero-container grid grid-rows-2  place-items-center  ">
      <div className="hero-text px-2">
        <h1 className="text-4xl font-bold">Welcome to my page</h1>
        <p className="text-2xl mt-2">
          Get to know me just by scrolling and a few clicks as you please
        </p>
      </div>

      <img src={me} className="w-60 h-60 rounded-full object-cover" />
      <button className="bg-red-400 rounded-lg w-32 mt-6 py-2">
        Portfolio
      </button>
    </div>
  );
};

export default hero;
