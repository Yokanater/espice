"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = usePathname();

  return (
    <nav className="flex justify-between items-center p-5 mx-4 sm:mx-8 md:mx-16 lg:mx-[200px]">
      <div className="text-xl font-bold">
        <a href="/">
          <img src="/logo.ico" alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
        </a>
      </div>
      <ul className="flex space-x-2 sm:space-x-4 md:space-x-6">
        <li>
          <a
            href="/"
            className={`relative font-semibold text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg p-1 sm:p-2`}
          >
            <span className="relative inline-block group">
              <span className="relative z-10">/home</span>
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0.5 w-[120%] h-3 bg-blue-200 transition-all duration-300 ${
                  router === "/"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </span>
          </a>
        </li>

        <li>
          <a
            href="/members"
            className={`relative font-semibold text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg p-1 sm:p-2`}
          >
            <span className="relative inline-block group">
              <span className="relative z-10">/members</span>
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0.5 w-[120%] h-3 bg-blue-200 transition-all duration-300 ${
                  router === "/members"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="/alumni"
            className={`relative font-semibold text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg p-1 sm:p-2`}
          >
            <span className="relative inline-block group">
              <span className="relative z-10">/alumni</span>
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0.5 w-[120%] h-3 bg-blue-200 transition-all duration-300 ${
                  router === "/alumni"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="/log"
            className={`relative font-semibold text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg p-1 sm:p-2`}
          >
            <span className="relative inline-block group">
              <span className="relative z-10">/log</span>
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0.5 w-[120%] h-3 bg-blue-200 transition-all duration-300 ${
                  router === "/log"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="/resources"
            className={`relative font-semibold text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg p-1 sm:p-2`}
          >
            <span className="relative inline-block group">
              <span className="relative z-10">/resources</span>
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0.5 w-[120%] h-3 bg-blue-200 transition-all duration-300 ${
                  router === "/resources"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={`relative font-semibold text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg p-1 sm:p-2`}
          >
            <span className="relative inline-block group">
              <span className="relative z-10">/contact</span>
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0.5 w-[120%] h-3 bg-blue-200 transition-all duration-300 ${
                  router === "/contact"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
