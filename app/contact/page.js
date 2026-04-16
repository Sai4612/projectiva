"use client";

import Navbar from "../../components/Navbar";
import WhatsApp from "../../components/WhatsApp";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Let’s Work Together 🚀
        </motion.h1>

        <p className="text-gray-400 text-center mb-12">
          Tell us your requirement and get expert academic support instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE (INFO + ANIMATION STYLE) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400">
              Why Choose Projectiva?
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>✔ 100% Original Work</li>
              <li>✔ On-Time Delivery</li>
              <li>✔ Expert Developers</li>
              <li>✔ 24/7 Support</li>
            </ul>

            {/* CONTACT CARDS */}
            <div className="space-y-4 mt-6">

              <a
                href="https://wa.me/918317575719"
                target="_blank"
                className="flex items-center gap-4 bg-green-500 p-4 rounded-xl hover:scale-105 transition shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/YOUR_USERNAME"
                target="_blank"
                className="flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-xl hover:scale-105 transition shadow-lg"
              >
                <FaInstagram className="text-2xl" />
                <span className="font-semibold">Follow on Instagram</span>
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE (GLASS FORM) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl"
          >
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400"
              />

              <textarea
                placeholder="Describe your requirement..."
                rows="4"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400"
              />

              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg">
                Send Message 🚀
              </button>

            </form>
          </motion.div>

        </div>

      </section>

      <WhatsApp />

    </main>
  );
}