import React from "react";
import Border from "./border";
const Activities = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-8 bg-white text-[#e9ecef] md:w-svw lg:px-28 lg:text-xl">
        <button className="bg-[#820263] rounded-full w-28 h-28 font-bold  lg:w-40 lg:h-40">
          <a href="">Sports</a>
        </button>
        <button className="bg-[#820263] rounded-full w-28 h-28 font-bold  lg:w-40 lg:h-40 ">
          <a href="">Community work</a>
        </button>

        <button className="bg-[#820263] rounded-full w-32 h-32  p-2 font-bold   lg:w-40 lg:h-40">
          <a href="">Responsibilities outside classroom</a>
        </button>
      </div>
      <Border />
    </>
  );
};

export default Activities;
