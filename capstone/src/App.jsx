import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Society from "./components/society";
import Activities from "./components/activities";
import Testimonials from "./components/testimonials";
import Border from "./components/border";
const App = () => {
  return (
    <div className="bg-[#edf2f4] flex flex-col justify-center items-center w-fit ">
      <Navbar />
      <Hero />
      <AboutMe />
      <Border />
      <Society />
      <Activities />
      <Testimonials />
    </div>
  );
};

export default App;
