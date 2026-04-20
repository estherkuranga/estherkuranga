"use client";
import React from "react";
import Modal from "./Modal";
import Image from "next/image";

export default function ProjectModal({ item, setSelectedProject }) {
  // const [open, setOpen] = React.useState(true);
  return (
    <>
      <Modal>
        <div className="  bg-white p-4 rounded-xl w-full max-w-4xl flex flex-col items-center">
          <div className="w-full flex items-center justify-center">
            <h3 className="w-full text-2xl text-center tracking-wide font-bold text-black dark:text-[#FBFBFB]">
              {item.title}
            </h3>
            <button type="button" onClick={() => setSelectedProject(null)}>
              <Image
                src="/icons/closeIcon.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div className="w-200 mt-5 flex max-sm:flex-col gap-5 text-gray-700 dark:text-[#FBFBFB] items-center">
            <Image
              src={item.src}
              alt={item.title}
              width={300}
              height={200}
              className="w-1/2 rounded-lg mb-4"
            />
            <p className="text-start text-lg">{item.fullDesc}</p>
          </div>

          <div className="w-full flex items-center justify-end">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6300] text-white text-lg py-2 px-8 mt-4 rounded-2xl hover:shadow-lg focus:outline-none focus:ring focus:ring-white transition-all duration-300 ease-in-out cursor-pointer hover:scale-102 "
            >
              Visit
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}
