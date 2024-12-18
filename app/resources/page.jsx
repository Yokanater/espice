import React from "react";
import Navbar from "../components/Navbar";

export default function resources() {
  return (
    <div className="bg-back bg-no-repeat bg-cover h-screen">
      <Navbar />
      <div className="ml-4 sm:ml-8 md:ml-16 lg:ml-[220px] mt-[78px] w-full max-w-[1000px] overflow-wrap break-words px-4 sm:px-6 md:px-8 lg:px-10">
        <p className="text-[24px] sm:text-[30px] font-bold text-[#303030]">
          Resources
        </p>
        <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/res.png" alt="resources" className="mt-4" />
          <p className="text-[#676767] font-extrabold text-[25px]">
            Coming Soon...
          </p>
        </div>
      </div>
    </div>
  );
}
