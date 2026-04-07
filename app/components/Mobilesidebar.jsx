import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Mobilesidebar() {
  return (
    // Mobile menu
    <Sheet className="w-12 sm:w-16">
      <SheetTrigger>
        <Menu className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
      </SheetTrigger>

      <SheetContent className="bg-white dark:bg-black h-screen p-4 sm:p-6">
        <nav className=" flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6">
          <a href="#" className="text-sm sm:text-base">Home</a>
          <a href="#" className="text-sm sm:text-base">About</a>
          <a href="#" className="text-sm sm:text-base">Projects</a>
          <a href="#" className="text-sm sm:text-base">Services</a>
          <a href="#" className="text-sm sm:text-base">Testimonials</a>
          <a href="#" className="text-sm sm:text-base">Contact</a>
          <a
            href="#"
            className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FF6300] text-white text-sm sm:text-base rounded-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition duration-300 ease-in-out"
          >
            Download CV
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
