"use client";

import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";
import classes from "./alumni.json";

export default function Alumni() {
  // Sort classes in descending order
  const sortedClasses = classes.sort((a, b) => b.class - a.class);

  return (
    <div className="bg-back bg-no-repeat bg-cover min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-[78px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-[1000px]">
          <p className="text-[24px] sm:text-[30px] font-bold text-[#303030]">
            Alumni
          </p>
          {sortedClasses.map((classGroup) => (
            <div key={classGroup.class}>
              <p className="text-[16px] sm:text-[18px] mt-[20px] font-bold text-[#797979] text-center lg:text-left">
                Class of {classGroup.class}
              </p>
              <div className="flex flex-col gap-8 p-1">
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
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
