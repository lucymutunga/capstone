import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center  bg-red-400 w-full h-16">
      <ul className="flex space-x-6 ml-4 font-bold  md:space-x-20 md:ml-20 lg:space-x-48 lg:text-2xl">
        <li>Home</li>
        <li>About </li>
        <li>Society</li>
        <li>Sports</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
