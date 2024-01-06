import React from "react";
import Info from "./components/Business Card/Info";
import About from "./components/Business Card/About";
import Interest from "./components/Business Card/Interest";
import Social from "./components/Business Card/Social";

const App = () => {
  return (
    <div className="place-items flex ">
      <div className="bg-black rounded-md w-3/5 h-full md:w-1/2 justify-center m-auto p-3 md:flex">
        <div className="  block ">
          {" "}
          <Info />
        </div>
        <div className="md:ml-4">
          <About />
          <Interest />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default App;
