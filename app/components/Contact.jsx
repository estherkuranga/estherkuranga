import React from "react";
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <SectionHeader
      title="Let's Design Together"
      description="Let's collaborate on your next project. I'd love to hear about your design goals and how I can help bring your vision to life."
    >
      <ContactForm />
    </SectionHeader>
  );
}
