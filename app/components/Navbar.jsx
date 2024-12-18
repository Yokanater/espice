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

  const links = [
    {
      target: "/",
      label: "/home",
      active: pathname === "/",
    },
    {
      target: "/members",
      label: "/members",
      active: pathname === "/members",
    },
    {
      target: "/alumni",
      label: "/alumni",
      active: pathname === "/alumni",
    },
    {
      target: "/log",
      label: "/log",
      active: pathname === "/log",
    },
    {
      target: "/resources",
      label: "/resources",
      active: pathname === "/resources",
    },
    {
      target: "/contact",
      label: "/contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <div className="flex justify-center items-center max-h-[100px] w-[60%] mt-0 mx-auto mb-[60px] p-[20px]">
      <div className="flex gap-[30px] justify-center items-center">
        <Link href="/">
          <img
            src="/logo3.ico"
            alt=""
            className="h-[40px] relative bottom-[5px] mr-[400px]"
          />
        </Link>
        {links.map((link, i) => {
          return (
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
                    ? "bg-[#008AE3] opacity-[20%] top-[-10px] transform scale-y-100"
                    : "bg-transparent transform scale-y-0"
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
