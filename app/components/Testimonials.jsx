"use client";
import React, { use } from "react";
import SectionHeader from "./SectionHeader";
import { testimonialData } from "@/lib/data";
import Image from "next/image";
import clsx from "clsx";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Testimonials() {
  return (
    <SectionHeader
      title="Testimonials"
      description="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante."
    >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.25}
        // slidesPerView={{clsx("1.25", "sm:1.5", "md:2", "lg:2.5", "xl:3")}}
        // navigation
        autoplay
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mt-4 w-4/6 max-sm:w-full m-auto "
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="w-full bg-[#f8f8f8] rounded-lg flex  gap-4 justify-between items-center mb-4 sm:mb-5"
          >
            <div className="w-full flex max-sm:flex-col max-sm:justify-center gap-4 justify-between items-center p-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full sm:w-25 sm:h-25"
              />
              <div className="w-full flex flex-col ">
                <p className="text-[#424242]">{testimonial.feedback}</p>
                <h5 className="text-lg font-bold tracking-[0.63px] mt-1 text-black dark:text-[#FBFBFB]">
                  {testimonial.name}
                </h5>
                <p className="text-sm text-gray-500 tracking-[0.38px]">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* 1 */}
        {/* <SwiperSlide className="w-full bg-[#f8f8f8] rounded-lg flex  gap-4 justify-between items-center mb-4 sm:mb-5">
          <div className="w-full flex max-sm:flex-col max-sm:justify-center gap-4 justify-between items-center p-4">
            <Image
              src={testimonialData[0].avatar}
              alt={testimonialData[0].name}
              width={80}
              height={80}
              className="rounded-full sm:w-25 sm:h-25"
            />

            <div className="w-full flex flex-col ">
              <p className="text-[#424242]">{testimonialData[0].feedback}</p>
              <h5 className="text-lg font-bold tracking-[0.63px] mt-1 text-black dark:text-[#FBFBFB]">
                {testimonialData[0].name}
              </h5>
              <p className="text-sm text-gray-500 tracking-[0.38px]">
                {testimonialData[0].title}
              </p>
            </div>
          </div>
        </SwiperSlide> */}
        {/* 2 */}
        {/* <SwiperSlide className="mb-4 w-full bg-[#f8f8f8] rounded-lg flex  gap-4 justify-between items-center">
          <div className="w-full flex max-sm:flex-col max-sm:justify-center gap-4 justify-between items-center p-4">
            <Image
              src={testimonialData[1].avatar}
              alt={testimonialData[1].name}
              width={90}
              height={90}
              className="rounded-full sm:w-25 sm:h-25"
            />

            <div className="w-full flex flex-col ">
              <p className="text-[#424242]">{testimonialData[1].feedback}</p>
              <h5 className="text-lg font-bold tracking-[0.63px] mt-1 text-black dark:text-[#FBFBFB]">
                {testimonialData[1].name}
              </h5>
              <p className="text-sm text-gray-500 tracking-[0.38px]">
                {testimonialData[1].title}
              </p>
            </div>
          </div>
        </SwiperSlide> */}
        {/* 3 */}
        {/* <SwiperSlide className="w-full bg-[#f8f8f8] rounded-lg flex  gap-4 justify-between items-center">
          <div className="w-full flex max-sm:flex-col max-sm:justify-center gap-4 justify-between items-center p-4">
            <Image
              src={testimonialData[0].avatar}
              alt={testimonialData[0].name}
              width={90}
              height={90}
              className="rounded-full sm:w-25 sm:h-25"
            />

            <div className="w-full flex flex-col">
              <p className="text-[#424242]">{testimonialData[0].feedback}</p>
              <h5 className="text-lg font-bold tracking-[0.63px] mt-1 text-black dark:text-[#FBFBFB]">
                {testimonialData[0].name}
              </h5>
              <p className="text-sm text-gray-500 tracking-[0.38px]">
                {testimonialData[0].title}
              </p>
            </div>
          </div>
        </SwiperSlide> */}
        {/* 4 */}
        {/* <SwiperSlide className="w-full bg-[#f8f8f8] rounded-lg flex  gap-4 justify-between items-center">
          <div className="w-full flex max-sm:flex-col max-sm:justify-center gap-4 justify-between items-center p-4">
            <Image
              src={testimonialData[2].avatar}
              alt={testimonialData[2].name}
              width={90}
              height={90}
              className="rounded-full sm:w-25 sm:h-25"
            />

            <div className="w-full flex flex-col">
              <p className="text-[#424242]">{testimonialData[2].feedback}</p>
              <h5 className="text-lg font-bold tracking-[0.63px] mt-1 text-black dark:text-[#FBFBFB]">
                {testimonialData[2].name}
              </h5>
              <p className="text-sm text-gray-500 tracking-[0.38px]">
                {testimonialData[2].title}
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </SectionHeader>
  );
}
