import React from "react";
import Image from "next/image";
import Photo from "./Photo";

export default function Header() {
  // Social media icons data
  const icons = [
    {
      href: "https://www.facebook.com/profile.php?id=10000857599518",
      name: "Facebook",
      src: "/icons/hero/Facebook.svg",
    },
    {
      href: "https://www.x.com/moontess64?t=x-1Sgub-wyakuw101OUmyg&s=09/",
      name: "Twitter",
      src: "/icons/hero/Twitter.svg",
    },
    {
      href: "https://www.linkedin.com/in/estherkuranga/",
      name: "LinkedIn",
      src: "/icons/hero/LinkedIn.svg",
    },
    {
      href: "https://www.instagram.com/moontess1?igsh=a3FxMTc1czNjYWV6/",
      name: "Instagram",
      src: "/icons/hero/Instagram.svg",
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
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-[#FBFBFB] mt-[-12px] ml-12 sm:ml-24 md:ml-36">
          Designer
        </h1>

        <p className="text-lg sm:text-xl w-full sm:w-5/6 text-black dark:text-[#FBFBFB] mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl mb-4 sm:mb-4 md:mb-6">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
          consectetur lacus
        </p>

        {/* Hire Me Button */}
        <button
          type="button"
          className="bg-[#FF6300] text-white text-base sm:text-lg md:text-xl font-normal py-1 px-6 sm:py-2 sm:px-8 md:px-10 rounded hover:bg-[#FF6300] focus:outline-none focus:ring-2 focus:ring-white"
        >
          Hire Me
        </button>
      </div>

      <div className="w-full sm:w-5/12 flex flex-col items-center justify-between space-y-8 mt-16 sm:mt-0">
        {/* Photo */}
        <Photo />

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
