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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full bg-white dark:bg-black py-4 px-6 md:py-6 md:px-16 md:pl-26">
        <Name />

        {/* Desktop menubar */}
        <ul className="hidden lg:flex font-normal transition duration-300 ease-in-out ">
          <li className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-base sm:text-lg md:text-xl">
            {navData.map((navItem, index) =>
              navItem.to === "downloadcv" ? (
                <a
                  key={index}
                  href="/estherKuranga.pdf"
                  download
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6300] text-white rounded-sm hover:bg-[#FF6300] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 ease-in-out  hover:scale-102 hover:shadow-lg animate-fade-in-up animation-delay-600 cursor-pointer"
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
