import React from "react";
import Image from "next/image";
import clsx from "clsx";

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
    <div className="mt-8 sm:mt-12 md:mt-24">
      {/* Services Section */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl  font-semibold text-black dark:text-[#FBFBFB] tracking-[1.95px] ">
          Services
        </h2>
        <p className="text-xl sm:text-2xl text-black dark:text-[#FBFBFB] mt-4 w-full sm:w-4/6 m-auto tracking-[0.63px]">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center mt-4 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="mb-6 w-[320px] bg-[#F3F3F3] rounded-sm pt-6 sm:pt-8 sm:pb-6 pb-8 px-4 mx-auto"
          >
            <i className="text-4xl mb-4 block">
              <Image
                src={service.icon}
                alt={service.title}
                width={72}
                height={83}
                className={clsx(
                  service.title === "App Design"
                    ? "w-[47px] h-[83px]"
                    : "w-[70px] h-[70px]",
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
    </div>
  );
}
