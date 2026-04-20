"use client";
import React from "react";
import Photo from "./Photo";
import { Slider } from "@/components/ui/slider";
import { Element } from "react-scroll";

export default function About() {
  const skills = [
    { name: "UX", value: 80 },
    { name: "App Design", value: 90 },
    { name: "Website Design", value: 70 },
  ];

  return (
    <Element name="about">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full mt-8 sm:mt-12 md:mt-24 animate-fade-in-up">
        {/* My Photo */}
        <div className="hidden sm:flex w-5/12 transition-transform duration-500 ease-out hover:scale-105 animate-fade-in-up animation-delay-100">
          <Photo />
        </div>

        {/* About Me Text */}
        <div className="w-full sm:w-6/12 flex flex-col gap-3 animate-fade-in-up animation-delay-200">
          <h4 className="text-2xl sm:text-3xl font-semibold max-sm:text-center text-black dark:text-[#FBFBFB] tracking-[1.95px] animate-fade-in-up animation-delay-300">
            About Me
          </h4>

          <p className="text-lg sm:text-xl text-black dark:text-[#FBFBFB] -mt-1 animate-fade-in-up animation-delay-400">
            I&apos;m a creative designer with a strong focus on user-centered
            design principles. With years of experience in UI/UX design,
            I&apos;ve helped numerous brands enhance their digital presence
            through thoughtful and innovative design solutions that prioritize
            both aesthetics and functionality.
          </p>

          {/* Skills Slider */}
          <div className="-mt-3 sm:mt-1 animate-fade-in-up animation-delay-500">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className=" w-full flex flex-col gap-3 sm:mb-4 mt-3 animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <h6 className="font-bold transition-colors duration-300 ">
                  {skill.name}
                </h6>

                <div className="w-full flex items-center gap-4 justify-center">
                  <Slider
                    defaultValue={[skill.value]}
                    max={100}
                    disabled
                    step={2}
                    className=" w-full h-1.5 -mt-5 **:[[role='slider']]:border-[#FF6300] **:[[role='slider']]:bg-[#EDECEC] **:data-[slot='slider-range']:bg-[#FF6300] **:data-[slot='slider-track']:bg-[#EDECEC] transition-all duration-500"
                  />
                  <span className="text-sm font-medium text-black dark:text-[#FBFBFB] -mt-4">
                    {skill.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/estherKuranga.pdf"
            download
            className="md:hidden px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6300] text-white rounded-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-700 cursor-pointer"
          >
            Download CV
          </a>
        </div>
      </div>
    </Element>
  );
}
