import React from "react";

const Testimonials = () => {
  return (
    <div className=" bg-white grid grid-cols-2 space-x-4 gap-2 mt-6 md:flex lg:w-svw lg:justify-around text-2xl">
      <div className=" bg-red-500 w-40 h-40 ml-4">
        <p>"I appreciate her versatility and proficiency"</p>
      </div>
      <div className=" bg-red-500 w-40 h-40">
        <p>"Her abilities cover a wide spectrum"</p>
      </div>
      <div className=" bg-red-500 w-40 h-40">
        <p>"She excels in a multitude of areas"</p>
      </div>
      <div className=" bg-red-500 w-40 h-40">
        <p>"A true asset with a bredth of talents"</p>
      </div>
    </div>  
  );
};

export default Testimonials;
