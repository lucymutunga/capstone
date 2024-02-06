import React from "react";
import Border from "./border";
const Activities = () => {
  return (
    <>
      <div className="mt-8 bg-white text-[#e9ecef] md:w-svw lg:px-28 lg:text-xl">
        <div className="flex space-x-32 ml-4 md:space-x-60 md:ml-36 lg:space-x-96">
          <button className="bg-[#820263] rounded-full w-28 h-28 font-bold lg:ml-18 lg:w-40 lg:h-40">
            <a href="">Sports</a>
          </button>
          <button className="bg-[#820263] rounded-full w-28 h-28 font-bold  lg:w-40 lg:h-40 ">
            <a href="">Community work</a>
          </button>
        </div>
        <button className="bg-[#820263] rounded-full w-32 h-32 ml-32 p-2 font-bold md:ml-72 lg:ml-96  lg:w-40 lg:h-40">
          <a href="">Responsibilities outside classroom</a>
        </button>
      </div>
      <Border />
    </>
  );
};

export default Activities;
