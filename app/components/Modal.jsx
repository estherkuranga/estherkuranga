import React from "react";

export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-50 flex items-center justify-center">
      <div className="max-sm:h-fit max-sm:w-5/6 bg-white p-4 rounded-xl">
        {children}
      </div>
    </div>
  );
}
