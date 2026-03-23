import React from "react";
import Image from "next/image";

export default function Header() {
  // Social media icons data
  const icons = [
    {
      href: "https://www.linkedin.com/in/estherkuranga/",
      name: "Facebook",
      src: "/icons/Facebook.svg",
    },
    {
      href: "https://www.linkedin.com/in/estherkuranga/",
      name: "Twitter",
      src: "/icons/Twitter.svg",
    },
    {
      href: "https://www.linkedin.com/in/estherkuranga/",
      name: "LinkedIn",
      src: "/icons/LinkedIn.svg",
    },
    {
      href: "https://www.linkedin.com/in/estherkuranga/",
      name: "Instagram",
      src: "/icons/Instagram.svg",
    },
  ];

  return (
    // Header section
    <div className="flex flex-col-reverse space-y-reverse sm:flex-row sm:items-start justify-between w-full">
      {/* Header Content */}
      <div className="w-full sm:w-7/12">
        <h6 className="text-xs mt-28 max-sm:mt-12 sm:mt-0 sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
          Hi, I am
        </h6>
        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FF6300] dark:text-gray-200 tracking-[2px]">
          Esther Kuranga
        </h4>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-[#FBFBFB]">
          UI & UX
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-[#FBFBFB] ml-12 sm:ml-24 md:ml-36">
          Designer
        </h1>

        <p className=" text-black dark:text-[#FBFBFB] mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
          consectetur lacus
        </p>

        {/* Hire Me Button */}
        <button
          type="button"
          className="bg-[#FF6300] text-white text-base sm:text-lg md:text-xl font-normal py-1 px-4 sm:py-2 sm:px-6 md:px-8 rounded hover:bg-[#FF6300] focus:outline-none focus:ring-2 focus:ring-white"
        >
          Hire Me
        </button>
      </div>

      <div className="w-full sm:w-5/12 flex flex-col items-center justify-between space-y-8 mt-16 sm:mt-0">
        {/* Bubble Background Images */}
        <div className="w-full flex items-center justify-center relative">
          <Image
            src="/images/hero/bubble 1.svg"
            alt="Bubble Image"
            width={160}
            height={160}
            className="rounded-lg absolute max-sm:w-[100px] max-sm:top-10 max-sm:left-53 sm:top-40 sm:left-75"
          />

          <Image
            src="/images/hero/bubble 2.svg"
            alt="Bubble Image"
            width={200}
            height={200}
            className="rounded-lg absolute max-sm:w-[140px] max-sm:top-40 max-sm:left-0 sm:top-50 sm:left-10"
          />

          <Image
            src="/images/hero/bubble 3.svg"
            alt="Bubble Image"
            width={70}
            height={70}
            className="rounded-lg absolute max-sm:w-[50px] max-sm:top-8 max-sm:left-10 sm:top-22 sm:left-25"
          />
          <Image
            src="/images/hero/bubble 4.svg"
            alt="Bubble Image"
            width={280}
            height={280}
            className="rounded-lg absolute max-sm:w-[220px] max-sm:top-17 max-sm:left-12 sm:top-25 sm:left-25"
          />

          {/* Main Photo */}
          <Image
            src="/images/hero/myphoto.png"
            alt="Bubble Image"
            width={300}
            height={250}
            className="rounded-lg absolute max-sm:top-[-130] max-sm:left-02 sm:top-[-50] sm:left-25"
          />
        </div>

        {/* Social Icons */}
        <div className="w-full flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-96 max-sm:mt-70">
          {icons.map((icon, index) => (
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
      </div>
    </div>
  );
}
