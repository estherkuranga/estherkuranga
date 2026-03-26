import React from "react";
import Photo from "./Photo";
import { Slider } from "@/components/ui/slider";

export default function About() {
  const skills = [
    { name: "UX", value: 80 },
    { name: "App Design", value: 90 },
    { name: "Website Design", value: 70 },
    { name: "Graphic Design", value: 65 },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full mt-8 sm:mt-12 md:mt-24">
      {/* My Photo */}
      <div className="hidden sm:flex w-5/12">
        <Photo />
      </div>

      {/* About Me Text */}
      <div className="w-full sm:w-6/12 flex flex-col gap-3">
        <h4 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-[#FBFBFB] tracking-[2px]">
          About Me
        </h4>

        <p className="text-xl text-black dark:text-[#FBFBFB]">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
          consectetur lacus
        </p>

        {/* Skills Slider */}
        <div className="mt-[-12px] sm:mt-1">
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
                className=" w-full h-1.5 mt-[-12px] [&_[role='slider']]:border-[#FF6300] [&_[role='slider']]:bg-[#EDECEC] [&_[data-slot='slider-range']]:bg-[#FF6300] [&_[data-slot='slider-track']]:bg-[#EDECEC]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
