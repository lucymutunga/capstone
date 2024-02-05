import React from "react";

const AboutMe = () => {
  return (
    <div className="  flex space-x-2 px-2 ml-2 mt-6">
      <button className=" rounded-full bg-red-400 w-20 h-20 px-2">
        Resume
      </button>

      <div className=" flex mt-40 space-x-8">
        <button className="rounded-full bg-red-400  w-20 h-20 ">
          Autobio <br /> graphy
        </button>
        <button className="rounded-full bg-red-400  w-20 h-20 px-2">
          Power
          <br />
          point Essay
        </button>
      </div>
      <button className="rounded-full bg-red-400 w-20 h-20 px-4">
        Photo
        <br />
        graphic Essay
      </button>
    </div>
  );
};

export default AboutMe;
