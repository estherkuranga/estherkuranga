import React from "react";

export default function SectionHeader({ title, description, children }) {
  return (
    <div className="w-full">
      <div className="text-center mt-8 sm:mt-12 md:mt-24">
        <h1 className="text-2xl sm:text-3xl md:text-5xl  font-semibold text-black dark:text-[#FBFBFB] tracking-[1.95px] ">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-black dark:text-[#FBFBFB] mt-4 w-full sm:w-4/6 m-auto tracking-[0.63px]">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}
