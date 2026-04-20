"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projectData, categories } from "@/lib/data";
import ProjectModal from "./ProjectModal";
import SectionHeader from "./SectionHeader";
import { Element } from "react-scroll";

export default function Projects() {
  // State to manage selected project and category
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    selectedTab === "All"
      ? projectData
      : projectData.filter((project) => project.categories === selectedTab);

  return (
    <Element name="projects">
      <SectionHeader
        title="Projects"
        description="Explore my portfolio of design projects showcasing my expertise in creating engaging and user-friendly digital experiences."
      >
        {/* Projects category  */}
        <div className="max-sm:hidden w-full sm:w-4/6 m-auto mt-8 animate-fade-in-up animation-delay-100">
          <ul className="w-full flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-4">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setSelectedTab(category.name)}
                className={`text-lg sm:text-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF6300] focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                  selectedTab === category.name
                    ? "text-[#FF6300] font-bold"
                    : "text-black dark:text-[#FBFBFB] hover:text-[#FF6300]"
                }`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        {/* Projects cards  */}
        <div className="w-full sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center m-auto animate-fade-in-up animation-delay-300">
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2C2C2C] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-out hover:scale-101 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={200}
                className="w-full rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-bold text-black dark:text-[#FBFBFB] transition-colors duration-300 hover:text-[#FF6300]">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-[#FBFBFB] mt-2">
                {item.desc}
              </p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="mt-3 text-[#FF6300] hover:bg-[#FF6300] max-sm:text-white max-sm:bg-[#FF6300] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                  onClick={() => setSelectedProject(item)}
                >
                  View Project
                </Button>
              </div>
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
    </Element>
  );
}
