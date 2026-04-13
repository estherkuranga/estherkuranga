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
        <div className="w-full flex flex-wrap justify-center mt-4  gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-72 bg-[#F3F3F3] rounded-sm pt-6 sm:pt-8 sm:pb-6 pb-8 px-4 mx-auto"
            >
              <i className="text-4xl mb-4 block">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={72}
                  height={83}
                  className={clsx(
                    service.title === "App Design"
                      ? "w-11.75 h-20.75"
                      : "w-17.5 h-17.5",
                  )}
                />
              </i>
              <h4 className="text-xl sm:text-3xl font-semibold text-black dark:text-[#FBFBFB] mb-2">
                {service.title}
              </h4>
              <p className="text-lg sm:text-xl text-black dark:text-[#FBFBFB] tracking-[0.57px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </SectionHeader>
    </Element>
  );
}
