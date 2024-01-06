import React from "react";
const Main = () => {
  return (
    <main className="p-6 text-white h-full bg-contain bg-right bg-[url('src/assets/react.svg')] bg-no-repeat">
      <h2 className="text-2xl font-bold">Fun Facts about React</h2>
      <ul className="marker:text-cyan-200 list-disc">
        <li>Was releaed in 2013</li>
        <li>was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>It is maintained by Facebook</li>
        <li>powers thousands of enterprisee apps, including mobile apps</li>
      </ul>
    </main>
  );
};
export default Main;
