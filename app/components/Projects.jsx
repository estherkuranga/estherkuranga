"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projectData } from "@/lib/data";
import ProjectModal from "./ProjectModal";
import SectionHeader from "./SectionHeader";

const categories = [
  "All",
  "UI/UX",
  "App Design",
  "Website Design",
  "Graphic Design",
];
export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <SectionHeader
      title="Projects"
      description="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante."
    >
      {/* Projects category  */}
      <div className="max-sm:hidden w-full sm:w-4/6 m-auto mt-8">
        <ul className="w-full flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-lg sm:text-xl text-black dark:text-[#FBFBFB] cursor-pointer hover:text-[#FF6300] focus:outline-none focus:ring-2 focus:ring-[#FF6300] focus:ring-offset-2 rounded "
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      {/* Projects cards  */}
      <div className="w-full sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center m-auto">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2C2C2C] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={300}
              height={200}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-black dark:text-[#FBFBFB]">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-[#FBFBFB] mt-2">
              {item.desc}
            </p>
            <Button
              variant="outline"
              className="mt-3 text-[#FF6300] hover:bg-[#FF6300] hover:text-white"
              onClick={() => setSelectedProject(item)}
            >
              View Project
            </Button>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          item={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </SectionHeader>
  );
}
