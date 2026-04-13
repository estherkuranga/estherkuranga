"use client";
import React from "react";
import Image from "next/image";
import { navData, socialIcons } from "@/lib/data";
import Name from "./Name";
import { Element, Link } from "react-scroll";

export default function Footer() {
  return (
    <Element name="footer">
      <footer className="w-full bg-[#f8f8f8] dark:bg-[#333] flex flex-col gap-8 pt-5 mt-12 text-center">
        <div className="scale-50">
          <Name />
        </div>

        {/* Navigation Links */}
        <div className="w-full flex max-sm:flex-col max-sm:space-y-3 items-center justify-center space-x-4 sm:space-x-6 md:space-x-8">
          {navData.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.to}
              smooth={true}
              duration={500}
              className="text-sm text-black dark:text-gray-400 hover:text-[#FF6300] dark:hover:text-[#FF6300] transition duration-300 ease-in-out mx-3"
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="w-full flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={24}
                height={24}
                className="rounded-lg sm:w-8 sm:h-8"
              />
            </a>
          ))}
        </div>

        <p className="text-sm bg-[#545454] py-4 text-white dark:text-gray-500 tracking-[0.63px]">
          &copy; {new Date().getFullYear()}
          <span className="px-1 text-[#FD6F00] dark:text-gray-200 ml-1 mr-2">
            Esther.
          </span>
          All rights reserved.
        </p>
      </footer>
    </Element>
  );
}
