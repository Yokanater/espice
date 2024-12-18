"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";
import cm from "./cm.json";
import tech from "./tech.json";

export default function Contact() {
  //const [tech, setTech] = useState([]);
  //const [cm, setCm] = useState([]);

  return (
    <div className="bg-back bg-no-repeat bg-cover min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-[78px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-[1000px]">
          <p className="text-[24px] sm:text-[30px] font-bold text-[#303030]">
            Contact Us
          </p>
          <p className="text-[16px] sm:text-[18px] mt-[20px] font-bold text-[#595959]">
            Shoot us an email at{" "}
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=espice.mirchi@gmail.com"
              className="text-[#3E85EF]"
            >
              espice.mirchi@gmail.com
            </a>{" "}
            or contact any person from the list below.
          </p>
          <p className="text-[16px] sm:text-[18px] mt-[20px] font-bold text-[#797979] mb-[10px] text-center sm:text-left">
            Core Members
          </p>

          <div className="flex flex-col gap-8 p-1">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {cm.length > 0 ? (
                cm.map((member, index) => (
                  <MemberCard
                    key={index}
                    img={member.img}
                    name={member.name}
                    tag={member.tag}
                    isAdmin={member.isAdmin}
                    links={member.links}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No core members available.
                </p>
              )}
            </div>
          </div>

          <p className="text-[16px] sm:text-[18px] mt-[20px] font-bold text-[#797979] mb-[10px] text-center sm:text-left">
            Teachers
          </p>

          <div className="flex flex-col gap-8 p-1">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {tech.length > 0 ? (
                tech.map((member, index) => (
                  <MemberCard
                    key={index}
                    img={member.img}
                    name={member.name}
                    tag={member.tag}
                    isAdmin={member.isAdmin}
                    links={member.links}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No tech members available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
