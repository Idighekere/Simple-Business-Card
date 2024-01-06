import React from "react";

const Social = () => {
  return (
    <div className="py-4">
      <h1 className="text-white font-semibold ">Social</h1>
      <div className=" text-3xl flex justify-center text-black">
        <ion-icon
          name="logo-facebook"
          class="bg-gray-300 px-1 text-black mx-2 rounded-sm"
        ></ion-icon>
        <ion-icon
          name="logo-github"
          class="bg-gray-300 px-1 text-black mx-2 rounded-sm"
        ></ion-icon>
        <ion-icon
          name="logo-twitter"
          class="bg-gray-300 px-1 text-black mx-2 rounded-sm"
        ></ion-icon>{" "}
        <ion-icon
          name="logo-instagram"
          class="bg-gray-300 px-1 text-black mx-2 rounded-sm"
        ></ion-icon>{" "}
      </div>
    </div>
  );
};

export default Social;
