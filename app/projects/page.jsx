import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const tags = {
    "Web Development": "bg-green-500",
    "Competitive Programming": "bg-blue-500",
    Robotics: "bg-yellow-500",
    Design: "bg-purple-500",
    "Game Development": "bg-red-500",
  };

  const projects = [
    {
      name: "eSpice v14 prelims",
      img: "/cp1.png",
      description:
        "eSpice v14 prelims was an exciting showcase of programming skills, creativity, and problem-solving. The event brought together some of the brightest minds to tackle challenging problems and compete for the top spot. The contest was held to help students of DPS Noida get inducted into our tech club and get trained in various languages and problem-solving techniques.",
      tag: "Competitive Programming",
      link: "https://www.hackerrank.com/contests/espice-v14-prelims/challenges",
      author: "eSpice Competitive Programming Team",
    },
    {
      name: "Svagram",
      tag: "Web Development",
      img: "/svagram.png",
      description:
        "This is 𝑆𝑣𝑎𝑔𝑟𝑎𝑚, a website aptly named `Your Own Village`. 𝑆𝑣𝑎𝑔𝑟𝑎𝑚 serves as a digital hub where users can propose initiatives, garner support through volunteering and upvoting, ultimately fostering a community-driven environment for realising impactful ideas.",
      author: "Kartik Garg",
    },
    {
      name: "Zemnalite",
      description:
        "Zemnalite is a design project created by us, exploring the idea of an underground city with advanced technology. It features The Wanderers, sophisticated submarines designed for navigation in submerged environments, and an advanced, fictional species of jellyfish, integral to the city’s ecosystem. This project focuses on creating intricate, futuristic environments with unique technologies.",
      tag: "Design",
      img: "/zem.png",
      link: "https://www.behance.net/gallery/211817407/Zemlanite",
      author: "Ruhan Kapoor",
    },
    {
      name: "Robowar",
      tag: "Robotics",
      img: "/robo.png",
      description:
        "This Robowar bot features a high-speed rotating horizontal drum powered by advanced BLDC motors for exceptional destructive power. Built with SS307 stainless steel, it ensures unmatched durability in combat. Planetary DC motors drive the chassis, delivering powerful torque and agile movement. Two 4500mAh 12V batteries provide sustained performance, powering both the drivetrain and weapon system. With its combination of strength, speed, and endurance, this bot is built to dominate the battlefield.",
      author: "Armaan Guha",
    },
    {
      name: "Chess",
      tag: "Game Development",
      img: "/python.png",
      author: "Raghav Agarwal",
      link: "https://github.com/InviBull/Chess",
      description:
        "The project is a simplified chess game created by a student using Pygame, designed to make the game easier to play for beginners. It features user-friendly controls, clear visual cues, and an intuitive interface. The game aims to teach players the basics of chess while providing an enjoyable and accessible experience. The design focuses on minimizing complex rules and enhancing the learning process for new players.",
    },
    {
      name: "eSpice v14 finals",
      img: "/cp2.png",
      description:
        "eSpice v14 finals was an exciting showcase of programming skills, creativity, and problem-solving. The event brought together some of the brightest minds to tackle challenging problems and compete for the top spot. The contest was held to help students of DPS Noida get inducted into our tech club and get trained in various languages and problem-solving techniques.",
      tag: "Competitive Programming",
      link: "https://www.hackerrank.com/contests/espice-v14-finals/challenges",
      author: "eSpice Competitive Programming Team",
    },
    {
      name: "Diwaari Eats",
      tag: "Design",
      img: "/design1.png",
      description:
        "This project revolves around designing a vibrant restaurant that seamlessly blends modern aesthetics with a touch of quirky charm. The architecture of the space emphasizes a cozy yet dynamic ambiance, featuring warm wooden floors, stylish furniture, and a stage for live performances. The lighting design employs multicolored, glowing table lamps, creating an inviting and energetic atmosphere perfect for social gatherings",
      link: "https://www.behance.net/gallery/205716753/DIWAARI-EATS-CORE-24",
      author: "Ruhan Kapoor",
    },
  ];

  return (
    <div className="bg-back bg-no-repeat bg-cover min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-[78px] px-4 sm:px-6 md:px-8 lg:px-10 mb-[30px]">
        <div className="w-full max-w-[1000px]">
          <p className="text-[24px] sm:text-[30px] font-bold text-[#303030] mb-8">
            Our Projects
          </p>
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center bg-white rounded-lg shadow-md p-6 md:p-8`}
              >
                <Image
                  src={project.img}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 md:mb-0"
                />
                <div className="md:ml-6 md:mr-6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-[20px] font-semibold text-gray-900 mr-2">
                      {project.name}
                    </h3>
                    <span
                      className={`text-white text-sm px-2 py-1 rounded ${
                        tags[project.tag]
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-gray-500 mb-4">
                    Made by : {project.author}
                  </p>
                  {project.link && (
                    <Link href={project.link}>
                      <p className="text-blue-500 hover:underline">
                        Learn more
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
