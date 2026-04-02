import React from "react";

export default function Contact() {
  return (
    <div className="mt-8 sm:mt-12 md:mt-24">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl  font-semibold text-black dark:text-[#FBFBFB] tracking-[1.95px] ">
          Let&apos;s Design Together
        </h2>
        <p className="text-xl sm:text-2xl text-black dark:text-[#FBFBFB] mt-4 w-full sm:w-4/6 m-auto tracking-[0.63px]">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
      </div>

      <form action="#" method="get" className="w-full sm:w-5/6 m-auto mt-8">
        <div className="border border-amber-400  w-full sm:w-4/6 m-auto mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center ">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-4/6 bg-[#F8F8F8] dark:bg-black border border-[#AFAFAF] dark:border-[#FBFBFB] placeholder:text-[#797979]dark:placeholder:text-[#FBFBFB] text-black dark:text-[#FBFBFB] py-3 pl-4 pr-16 rounded focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
          />
          <button
            type="submit"
            className="w-fit bg-[#FD6F00] hover:bg-[#e56a00] rounded-lg text-white text-2xl tracking-[0.72px] py-2 px-4 focus:outline-none focus:ring focus:ring-[#FD6F00]"
          >
            Contact Me
          </button>
        </div>
      </form>
    </div>
  );
}
