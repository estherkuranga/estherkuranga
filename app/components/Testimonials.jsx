"use client";
import React, { use } from "react";
import SectionHeader from "./SectionHeader";
import { testimonialData } from "@/lib/data";
import Image from "next/image";

// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper/modules";
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
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={42}
        slidesPerView={1.4}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mt-4 w-5/6 max-sm:w-full m-auto "
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
                width={90}
                height={90}
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
      </Swiper>
    </SectionHeader>
  );
}
