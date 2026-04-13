"use client";
import React from "react";
import { Link } from "react-scroll";
import { navData } from "@/lib/data";

export default function MobileBottomNav() {
  // Filter navData
  const filteredNavData = navData.filter((item) =>
    ["Home", "Services", "Projects", "Testimonials", "Contact"].includes(
      item.name,
    ),
  );

  return (
    // Mobile bottom navigation bar
    <ul className="w-full bg-white/20 dark:bg-black/20 backdrop-blur-md flex items-center justify-center lg:hidden fixed bottom-0 z-50 pb-4 rounded-t-3xl shadow-lg px-4 font-normal transition duration-300 ease-in-out">
      <li className="flex items-center space-x-6 sm:space-x-8 text-lg">
        {filteredNavData.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.to}
            smooth={true}
            duration={500}
            className="flex flex-col items-center space-y-1 text-black hover:text-[#FF6300] dark:text-[#FBFBFB] dark:hover:text-[#FF6300] transition duration-300 ease-in-out cursor-pointer  active:text-[#FF6300] tracking-wide"
          >
            <navItem.icon className="text-2xl" />
            <span className="text-sm">
              {navItem.name === "Testimonials" ? (
                <>
                  <span className="sm:hidden">Feedback</span>
                  <span className="hidden sm:block">Testimonials</span>
                </>
              ) : (
                navItem.name
              )}
            </span>
          </Link>
        ))}
      </li>
    </ul>
  );
}
