import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-2 bg-red-400">
      <h1 className="font-bold">LM</h1>
      <ul className="flex space-x-6">
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
