import React from "react";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full flex items-center justify-center relative">
      {/* Bubble Background Images */}
      <Image
        src="/images/hero/bubble 1.svg"
        alt="Bubble Image"
        width={160}
        height={160}
        className="w-40 h-40 rounded-lg absolute max-sm:w-25 max-sm:top-10 max-sm:left-53 sm:top-40 sm:left-75"
      />

      <Image
        src="/images/hero/bubble 2.svg"
        alt="Bubble Image"
        width={200}
        height={200}
        className=" w-50 h-50 rounded-lg absolute max-sm:w-35 max-sm:top-40 max-sm:left-0 sm:top-50 sm:left-10"
      />

      <Image
        src="/images/hero/bubble 3.svg"
        alt="Bubble Image"
        width={70}
        height={70}
        className="w-17.5 h-17.5 rounded-lg absolute max-sm:w-12.5 max-sm:top-17 max-sm:left-12 sm:top-22 sm:left-25"
      />
      <Image
        src="/images/hero/bubble 4.svg"
        alt="Bubble Image"
        width={280}
        height={280}
        className="w-70 h-70 rounded-lg absolute max-sm:w-55 max-sm:top-17 max-sm:left-12 sm:top-25 sm:left-25"
      />

      {/* Main Photo */}
      <Image
        src="/images/hero/myphoto.png"
        alt="My Photo"
        width={300}
        height={250}
        className=" max-sm:w-75 max-sm:h-fit max-sm:mt-5 rounded-lg absolute max-sm:top-[-130] max-sm:left-02 sm:top-[-50] sm:left-25"
      />
    </div>
  );
}
