"use client";
import React, { use } from "react";
import SectionHeader from "./SectionHeader";
import { testimonialData } from "@/lib/data";
import Image from "next/image";
import { Element } from "react-scroll";

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
    <Element name="testimonials" className="w-full ">
      <SectionHeader
        title="Testimonials"
        description="See what clients and collaborators have to say about working with me and the impact of my design work."
      >
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={42}
          slidesPerView={1.3}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="mt-4 w-5/6 max-sm:w-full m-auto animate-fade-in-up animation-delay-200 cursor-pointer"
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="w-full bg-[#f8f8f8] rounded-lg flex  gap-4 justify-between items-center mb-4 sm:mb-5 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              <div className="w-full flex max-sm:flex-col max-sm:justify-center gap-4 justify-between items-center p-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={90}
                  height={90}
                  className="rounded-full sm:w-25 sm:h-25 transition-transform duration-300 hover:scale-110"
                />
                <div className="w-full flex flex-col">
                  <p className="text-[#424242] transition-colors duration-300 hover:text-[#FF6300]">
                    {testimonial.feedback}
                  </p>
                  <h5 className="text-lg font-bold tracking-[0.63px] mt-1 text-black dark:text-[#FBFBFB] transition-colors duration-300 hover:text-[#FF6300]">
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
    </Element>
  );
}
