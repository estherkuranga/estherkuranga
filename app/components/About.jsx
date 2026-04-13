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
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full mt-8 sm:mt-12 md:mt-24">
        {/* My Photo */}
        <div className="hidden sm:flex w-5/12">
          <Photo />
        </div>

        {/* About Me Text */}
        <div className="w-full sm:w-6/12 flex flex-col gap-3">
          <h4 className="text-2xl sm:text-3xl font-semibold max-sm:text-center text-black dark:text-[#FBFBFB] tracking-[1.95px] ">
            About Me
          </h4>

          <p className="text-lg sm:text-xl text-black dark:text-[#FBFBFB] -mt-1">
            I&apos;m a creative designer with a strong focus on user-centered
            design principles. With years of experience in UI/UX design,
            I&apos;ve helped numerous brands enhance their digital presence
            through thoughtful and innovative design solutions that prioritize
            both aesthetics and functionality.
          </p>

          {/* Skills Slider */}
          <div className="-mt-3 sm:mt-1">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className=" w-full flex flex-col gap-4 mb-2 sm:mb-4 mt-3"
              >
                <h6 className="font-bold">{skill.name}</h6>
                <Slider
                  defaultValue={[skill.value]}
                  max={100}
                  step={2}
                  className=" w-full h-1.5 -mt-3 **:[[role='slider']]:border-[#FF6300] **:[[role='slider']]:bg-[#EDECEC] **:data-[slot='slider-range']:bg-[#FF6300] **:data-[slot='slider-track']:bg-[#EDECEC]"
                />
              </div>
            ))}
          </div>

          <a
            href="/cv.pdf"
            download
            className="md:hidden px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6300] text-white rounded-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition duration-300 ease-in-out"
          >
            Download CV
          </a>
        </div>
      </div>
    </Element>
  );
}
