import React from "react";

const AboutMe = () => {
  const pdfUrl = "./auto.pdf";

  return (
    <div className=" flex  justify-around  items-center  bg-white font-bold space-x-2 px-2  mt-6 md:w-svw md:space-x-36 lg:space-x-70  lg:text-2xl">
      <a
        // href="./assets/Lucy%20Mutunga's%20Autobiography.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="rounded-full bg-red-400 w-20 h-20 md:w-28 md:h-28 md:mr-10 lg:w-40 lg:h-40"
          onClick={() => (window.location.href = "./auto.pdf")}
        >
          Autobio <br />
          graphy
        </button>
      </a>
      {/* <a href={pdfUrl} target="_blank">
        Download PDF
      </a> */}

      <a href="">
        <button className="rounded-full bg-red-400  w-20 h-20 px-2 md:w-28 md:h-28 lg:w-40 lg:h-40">
          Power
          <br />
          point Essay
        </button>
      </a>

      <a href="">
        <button className="rounded-full bg-red-400 w-20 h-20 px-4 md:mt-2 md:w-28 md:h-28 lg:w-40 lg:h-40">
          Photo
          <br />
          graphic Essay
        </button>
      </a>
    </div>
  );
};

export default AboutMe;
