"use client";

import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scroll ? "bg-black/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto text-white">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-purple-400">
          Projectiva
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          <a href="/" className="hover:text-purple-400 transition">Home</a>

          <a href="/about" className="hover:text-purple-400 transition">
            About Us
          </a>

          <a href="/services" className="hover:text-purple-400 transition">
            Services
          </a>

          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Contact Us
          </a>

          {/* INSTAGRAM */}
          <a
  href="https://www.instagram.com/globalassignmentdesk"
  target="_blank"
  className="text-xl hover:text-pink-400 transition"
>
  <FaInstagram />
</a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 text-white p-6 space-y-4 text-center">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>

          <a
            href="/contact"
            className="block bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg"
          >
            Contact Us
          </a>

          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            className="block text-pink-400"
          >
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}