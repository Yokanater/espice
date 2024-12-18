import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center">
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            eSpice - The Tech Club of DPS Noida
          </p>
          <p className="text-center text-xs sm:text-sm md:text-base mt-2">
            Website made by Kartik Garg, VII B
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
