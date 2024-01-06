import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="w-full bg-black text-cyan-400 p-3">
      <nav className="flex justify-between items-center ">
        <div>
          <img src="src/assets/react.svg" alt="" className="w-" />
        </div>
        <div className="mr-auto pl-2">
          <h1 className="text-2xl font-semibold">ReactFacts</h1>
        </div>
        <div>
          <h3>React -Project 1</h3>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
