"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";
import classes from "./members.json";

export default function Members() {
  const sortedClasses = classes.sort((a, b) => a.class - b.class);

  return (
    <div className="bg-back bg-no-repeat bg-cover min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-[78px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-[1000px]">
          <p className="text-[24px] sm:text-[30px] font-bold text-[#303030]">
            Members
          </p>
          {sortedClasses.map((classGroup) => (
            <div key={classGroup.class} className="w-full">
              <p className="text-[16px] sm:text-[18px] mt-[40px] font-bold text-[#797979] mb-[10px] text-center sm:text-left">
                Class of {classGroup.class}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                {classGroup.members.map((member, index) => (
                  <MemberCard
                    key={index}
                    img={member.img}
                    name={member.name}
                    tag={member.tag}
                    isAdmin={member.isAdmin}
                    links={member.links}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
