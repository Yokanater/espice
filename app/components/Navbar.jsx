"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoverIndicator, setHoverIndicator] = useState(false);
  const [hoverIndicatorPosition, setHoverIndicatorPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { target: "/", label: "/home", active: pathname === "/" },
    { target: "/members", label: "/members", active: pathname === "/members" },
    { target: "/alumni", label: "/alumni", active: pathname === "/alumni" },
    { target: "/log", label: "/log", active: pathname === "/log" },
    {
      target: "/resources",
      label: "/resources",
      active: pathname === "/resources",
    },
    { target: "/contact", label: "/contact", active: pathname === "/contact" },
  ];

  return (
    <div className="flex justify-center items-center w-full mt-0 mx-auto mb-[60px] p-[40px]">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.ico"
            alt="Logo"
            className="h-[40px] relative bottom-[5px] sm:mr-[20px] sm:h-[40px] md:h-[50px]"
          />
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden sm:flex gap-[30px] justify-center items-center">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.target}
              onMouseEnter={() => {
                setHoverIndicator(true);
                setHoverIndicatorPosition(i);
              }}
              onMouseLeave={() => {
                setHoverIndicator(false);
                setHoverIndicatorPosition(0);
              }}
            >
              <div
                className={`font-semibold text-[18px] cursor-pointer transition-all duration-200 ${
                  link.active ||
                  (hoverIndicator && hoverIndicatorPosition === i)
                    ? "text-[#4a4a4a]" // Active color
                    : "text-[#9e9e9e]"
                }`}
              >
                {link.label}
              </div>

              <div
                className={`transform transition-all duration-400 h-[8px] relative top-[-6px] w-[calc(100%+10px)] ml-[-5px] origin-bottom ${
                  (hoverIndicator && hoverIndicatorPosition === i) ||
                  (!hoverIndicator && link.active)
                    ? "bg-[#008AE3] opacity-[20%] top-[-11px] transform scale-y-100"
                    : "bg-transparent transform scale-y-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="sm:hidden flex items-center justify-between w-full">
        <button
          className="text-[#4a4a4a] text-2xl absolute right-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div>
          <div
            className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-[50%] bg-white text-black transition-transform duration-300 transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute right-7 top-4 p-3"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              X{" "}
            </button>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.target}
                onMouseEnter={() => {
                  setHoverIndicator(true);
                  setHoverIndicatorPosition(i);
                }}
                onMouseLeave={() => {
                  setHoverIndicator(false);
                  setHoverIndicatorPosition(0);
                }}
              >
                <div
                  className={`font-semibold text-[25px] cursor-pointer transition-all duration-200 ${
                    link.active ||
                    (hoverIndicator && hoverIndicatorPosition === i)
                      ? "text-[#4a4a4a]" // Active color
                      : "text-[#9e9e9e]"
                  }`}
                >
                  {link.label}
                </div>

                <div
                  className={`transform transition-all duration-400 h-[8px] relative top-[-6px] w-[calc(100%+10px)] ml-[-5px] origin-bottom ${
                    (hoverIndicator && hoverIndicatorPosition === i) ||
                    (!hoverIndicator && link.active)
                      ? "bg-[#008AE3] opacity-[20%] top-[-15px] transform scale-y-100"
                      : "bg-transparent transform scale-y-0"
                  }`}
                />
              </a>
            ))}
          </div>
          {/* <div className="sm:hidden bg-white w-full mt-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.target}
                className={`block py-2 px-4 font-semibold text-[18px] text-[#9e9e9e] hover:text-[#4a4a4a] ${
                  link.active ? "text-[#4a4a4a]" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
}
