import React from "react";
import { navData } from "@/lib/data";
import Mobilesidebar from "./Mobilesidebar";
import Name from "./Name";

export default function Nav() {
  return (
    // Nav bar
    <nav className="flex items-center justify-between w-full bg-white dark:bg-black mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
      <Name />

      {/* Mobile menu */}
      <div className="lg:hidden">
        <Mobilesidebar />
      </div>

      {/* Desktop menubar */}
      <ul className="hidden lg:flex font-normal transition duration-300 ease-in-out">
        <li className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-base sm:text-lg md:text-xl">
          {navData.map((navItem, index) => (
            <a
              key={index}
              href={navItem.href}
              className={
                navItem.href === "#downloadcv"
                  ? "px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6300] text-white rounded-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition duration-300 ease-in-out"
                  : " text-black hover:text-[#FF6300] dark:text-[#FBFBFB] dark:hover:text-[#FF6300] transition duration-300 ease-in-out cursor-pointer"
              }
            >
              {navItem.name}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
}
