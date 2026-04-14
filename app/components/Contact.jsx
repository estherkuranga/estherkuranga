"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact" className="animate-fade-in-up">
      <SectionHeader
        title="Let's Design Together"
        description="Let's collaborate on your next project. I'd love to hear about your design goals and how I can help bring your vision to life."
      >
        <div className="animate-fade-in-up animation-delay-300">
          <ContactForm />
        </div>
      </SectionHeader>
    </Element>
  );
}
