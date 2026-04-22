"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import SectionHeader from "./SectionHeader";
import { services } from "@/lib/data";
import { Element } from "react-scroll";

export default function Services() {
  return (
    <Element name="services">
      <SectionHeader
        title="Services"
        description="I offer comprehensive design services tailored to enhance your digital presence and create meaningful user experiences across all platforms."
      >
        <div className="w-full flex flex-wrap justify-between max-sm:gap-4 mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className=" max-sm:w-72 w-full max-w-86 2xl:max-w-108 md:flex gap-4  bg-[#F3F3F3] rounded-sm pt-5 pb-5 sm:pt-8 sm:pb-6 px-3 mx-auto transition-all duration-500 ease-out hover:scale-101 hover:shadow-xl hover:bg-[#F0F0F0] dark:hover:bg-[#3A3A3A] animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <i className="text-4xl flex items-center  transition-transform duration-300 hover:scale-105">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={72}
                  height={83}
                  className={clsx(
                    service.title === "App Design"
                      ? "w-11.75 h-20.75 md:w-40 md:h-32"
                      : "w-17.5 h-17.5 md:w-48 md:h-48",
                  )}
                />
              </i>
              <div>
                <h4 className="text-xl sm:text-3xl font-semibold text-black dark:text-[#FBFBFB] mb-2 transition-colors duration-300 hover:text-[#FF6300]">
                  {service.title}
                </h4>
                <p className="text-lg sm:text-xl text-black dark:text-[#FBFBFB] tracking-[0.57px] text-start">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionHeader>
    </Element>
  );
}
