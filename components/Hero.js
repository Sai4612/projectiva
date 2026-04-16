"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://assets2.lottiefiles.com/packages/lf20_kyu7xb1v.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white min-h-screen flex items-center px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Academic Assignments <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Made Easy 🚀
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg text-gray-300 max-w-lg"
          >
            Get M.Tech, MS & Postgraduate assignments with complete documentation,
            source code, and expert guidance — delivered on time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/918317575719"
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
            >
              Get Assignment
            </a>

            <a
              href="#services"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-sm text-gray-400"
          >
            ✔ Global Students | ✔ Expert Developers | ✔ On-Time Delivery
          </motion.div>
        </motion.div>

        {/* RIGHT ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          {/* Glow */}
          <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

          {/* LOTTIE */}
          {animationData && (
            <div className="w-[300px] md:w-[450px] relative z-10">
              <Lottie animationData={animationData} loop={true} />
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}