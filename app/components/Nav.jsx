import React from "react";
import Mobilesidebar from "./Mobilesidebar";

export default function Nav() {
  // Navigation links data
  const lists = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Download CV", href: "#downloadcv" },
  ];
  return (
    // Nav bar
    <nav className="flex items-center justify-between w-full bg-white dark:bg-black mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
      <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
        <span className="px-1 bg-[#FF6300] text-white dark:text-gray-200">
          E
        </span>
        <span className="text-black-500">sther</span>
      </p>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <Mobilesidebar />
      </div>

      {/* Desktop menubar */}
      <ul className="hidden lg:flex font-normal transition duration-300 ease-in-out">
        <li className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-base sm:text-lg md:text-xl">
          {lists.map((list, index) => (
            <a
              key={index}
              href={list.href}
              className={
                list.href === "#downloadcv"
                  ? "px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6300] text-white rounded-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition duration-300 ease-in-out"
                  : " text-black hover:text-[#FF6300] dark:text-[#FBFBFB] dark:hover:text-[#FF6300] transition duration-300 ease-in-out cursor-pointer"
              }
            >
              {list.name}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
}
