"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/918317575719"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50 flex items-center justify-center"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
}