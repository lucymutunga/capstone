import React from "react";

const Activities = () => {
  return (
    <div className="mt-8">
      <div className="flex space-x-32 ml-4">
        <button className="bg-red-400 rounded-full w-28 h-28">
          <a href="">Sports</a>
        </button>
        <button className="bg-red-400 rounded-full w-28 h-28">
          <a href="">Community work</a>
        </button>
      </div>
      <button className="bg-red-400 rounded-full w-32 h-32 ml-32 px-2 ">
        <a href="">Responsibilities outside classroom</a>
      </button>
    </div>
  );
};

export default Activities;
