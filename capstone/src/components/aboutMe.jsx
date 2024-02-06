import React from "react";

const AboutMe = () => {
  return (
    <div className=" flex bg-white font-bold space-x-2 px-2 ml-2 mt-6 md:w-svw md:space-x-36 lg:space-x-70  lg:text-2xl">
      <button className=" rounded-full bg-red-400 w-20 h-20 px-2 md:mt-2 md:w-28 md:h-28 lg:ml-16 lg:w-40 lg:h-40">
        Resume
      </button>

      <div className=" flex mt-40 space-x-6">
        <button className="rounded-full bg-red-400  w-20 h-20 md:w-28 md:h-28 md:mr-10 lg:w-40 lg:h-40">
          Autobio <br /> graphy
        </button>
        <button className="rounded-full bg-red-400  w-20 h-20 px-2 md:w-28 md:h-28 lg:w-40 lg:h-40">
          Power
          <br />
          point Essay
        </button>
      </div>
      <button className="rounded-full bg-red-400 w-20 h-20 px-4 md:mt-2 md:w-28 md:h-28 lg:w-40 lg:h-40">
        Photo
        <br />
        graphic Essay
      </button>
    </div>
  );
};

export default AboutMe;
