import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Society from "./components/society";
import Activities from "./components/activities";
import Testimonials from "./components/testimonials";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Society />
      <Activities />
      <Testimonials />
    </div>
  );
};

export default App;
