import React from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <SectionHeader
      title="Let's Design Together"
      description="Lorem ipsum dolor sit amet
      consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis
      fghh hgjj nisi ante."
    >
      <form action="#" method="get" className="w-full sm:w-5/6 m-auto mt-8">
        <div className="  w-full sm:w-4/6 m-auto mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center ">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-4/6 bg-[#F8F8F8] dark:bg-black border border-[#AFAFAF] dark:border-[#FBFBFB] placeholder:text-[#797979]dark:placeholder:text-[#FBFBFB] text-black dark:text-[#FBFBFB] py-3 pl-4 pr-16 rounded focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
          />
          <button
            type="submit"
            className="w-fit bg-[#FD6F00] hover:bg-[#e56a00] rounded-lg text-white text-xl tracking-[0.72px] py-2 px-4 focus:outline-none focus:ring focus:ring-[#FD6F00]"
          >
            Contact Me
          </button>
        </div>
      </form>
    </SectionHeader>
  );
}
