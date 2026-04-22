"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);

          toast.success("Message sent!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send message.", {
            position: "top-right",
            autoClose: 3000,
          });
        },
      );
    setIsLoading(false);
  };

  return (
    <form ref={form} className="w-full sm:w-5/6 m-auto mt-8 animate-fade-in-up">
      <div className="w-full sm:w-4/6 m-auto mt-8 flex flex-col gap-4 items-center justify-center">
        <input
          type="email"
          name="user_email"
          placeholder="Enter Your Email"
          required
          className="w-4/6 bg-[#F8F8F8] dark:bg-black border border-[#AFAFAF] dark:border-[#FBFBFB] placeholder:text-[#797979]dark:placeholder:text-[#FBFBFB] text-black dark:text-[#FBFBFB] py-3 pl-4 pr-16 rounded focus:outline-none focus:ring-2 focus:ring-[#FD6F00] transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in-up animation-delay-100"
        />
        <textarea
          name="message"
          required
          className="w-4/6 bg-[#F8F8F8] dark:bg-black border border-[#AFAFAF] dark:border-[#FBFBFB] placeholder:text-[#797979]dark:placeholder:text-[#FBFBFB] text-black dark:text-[#FBFBFB] py-3 pl-4 pr-16 rounded focus:outline-none focus:ring-2 focus:ring-[#FD6F00] transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in-up animation-delay-200"
          placeholder="Enter Your Message"
        />
        <div>
          <button
            type="submit"
            onClick={sendEmail}
            disabled={isLoading}
            className="w-fit bg-[#FD6F00] rounded-lg text-white text-xl tracking-[0.72px] py-2 px-4 focus:outline-none focus:ring focus:ring-[#FD6F00] transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-300 cursor-pointer"
          >
            Contact Me
          </button>
          <ToastContainer />
        </div>
      </div>
    </form>
  );
}
