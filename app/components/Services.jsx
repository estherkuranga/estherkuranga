import React from "react";
import Image from "next/image";
import clsx from "clsx";
import SectionHeader from "./SectionHeader";

export default function Services() {
  const services = [
    {
      icon: "/icons/services/uiux.svg",
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh.",
    },
    {
      icon: "/icons/services/app.svg",
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh.",
    },
    {
      icon: "/icons/services/web.svg",
      title: "Website Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh.",
    },
    {
      icon: "/icons/services/graphic.svg",
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh.",
    },
  ];

  return (
    <SectionHeader
      title="Services"
      description="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante."
    >
      <div className="w-full flex flex-wrap justify-center mt-4  gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="mb-6 w-72 bg-[#F3F3F3] rounded-sm pt-6 sm:pt-8 sm:pb-6 pb-8 px-4 mx-auto"
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
  );
}
