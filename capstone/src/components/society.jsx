import React from "react";
import Border from "./border";
const Society = () => {
  return (
    <>
      <div className="p-6 bg-white md:mt-4 md:w-svw text-[#e9ecef] text-2xl">
        <div className="flex space-x-6 mt-10  md:space-x-40 md:p-6 lg:space-x-80">
          <button className="bg-[#820263] rounded-lg mr-10 p-2 font-bold lg:ml-24 lg:p-8">
            <a href="">African culture & Area of Study</a>
          </button>

          <button className="bg-[#820263] rounded-lg font-bold p-2 lg:p-8">
            <a href="">challenges facing modern society</a>
          </button>
        </div>

        <button className="bg-[#820263] rounded-lg ml-28 mt-6 p-4 font-bold md:ml-72 md:p-6 lg:px-52">
          <a href="">African culture</a>
        </button>
      </div>
      <Border />
    </>
  );
};

export default Society;
