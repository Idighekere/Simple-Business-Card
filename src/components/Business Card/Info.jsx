import React from "react";

const Info = () => {
  return (
    <div className="text-white">
      <div>
        <img
          src="src/assets/Idighs.jpg"
          alt=""
          className="md:w-78 w-full flex-shrink-0 rounded-md justify-center "
        />
      </div>
      {/* Name */}
      <div className="text-center">
        <h1 className=" font-extrabold text-2xl md:text-3xl">Idighekere Udo</h1>
        <h3 className="text-gray-200 text-1xl">Frontend Developer</h3>
        <p className="text-gray-300 text-1xl">Idighekere.com</p>
      </div>
      {/* Buttons */}
      <div className="justify-center flex mt-2">
        <button className="bg-white text-black px-6 py-1 rounded-md mr-1 items-center">
          <ion-icon name="mail-sharp" class="items-center"></ion-icon>
          Email
        </button>
        <button className="bg-blue-400 text-white px-6 py-1 rounded-md ml-1">
          <ion-icon name="logo-linkedin"></ion-icon>
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
