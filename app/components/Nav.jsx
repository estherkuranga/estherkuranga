"use client";
import React from "react";
import { Link } from "react-scroll";
import { navData } from "@/lib/data";
import Name from "./Name";
import MobileBottomNav from "./MobileBottomNav";

export default function Nav() {
  return (
    <>
      {/* Mobile menu */}
      <div className="w-full flex items-center justify-center lg:hidden ">
        <MobileBottomNav />
      </div>
      <nav className=" flex items-center justify-between w-full bg-white dark:bg-black mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 ">
        <Name />

        {/* Desktop menubar */}
        <ul className="hidden lg:flex font-normal transition duration-300 ease-in-out  ">
          <li className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-base sm:text-lg md:text-xl">
            {navData.map((navItem, index) =>
              navItem.to === "downloadcv" ? (
                <a
                  key={index}
                  href="/cv.pdf"
                  download
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6300] text-white rounded-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition duration-300 ease-in-out"
                >
                  {navItem.name}
                </a>
              ) : (
                <Link
                  to={navItem.to}
                  smooth={true}
                  duration={500}
                  key={index}
                  className=" text-black hover:text-[#FF6300] dark:text-[#FBFBFB] dark:hover:text-[#FF6300] transition duration-300 ease-in-out cursor-pointer"
                >
                  {navItem.name}
                </Link>
              ),
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
