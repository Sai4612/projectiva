"use client";

import Navbar from "../../components/Navbar";
import WhatsApp from "../../components/WhatsApp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 text-center max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          About Projectiva
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Projectiva is a global academic support platform helping postgraduate
          students complete projects, assignments, and research work with expert guidance.
        </motion.p>

        {/* IMAGE */}
        <motion.img
          src="/about.jpg"
          alt="Team working"
          className="rounded-2xl mx-auto mb-16 w-[500px] shadow-xl hover:scale-105 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </section>

      {/* MISSION + EXPERTISE */}
      <section className="px-6 pb-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400">
            To empower students globally with reliable, high-quality academic
            support, ensuring success in their postgraduate journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            What We Do
          </h2>
          <p className="text-gray-400">
            We provide end-to-end solutions including project development,
            assignments, thesis writing, and research support.
          </p>
        </motion.div>

      </section>

      {/* EXPERTISE SECTION */}
      <section className="px-6 pb-24 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            { img: "/ai.jpg", title: "AI / Machine Learning" },
            { img: "/web.jpg", title: "Web Development" },
            { img: "/data.jpg", title: "Data Science" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-lg hover:shadow-purple-500/30 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="flex flex-wrap justify-center gap-10 text-lg">
          <span>✔ 100+ Projects Delivered</span>
          <span>✔ Global Students</span>
          <span>✔ Expert Developers</span>
          <span>✔ On-Time Delivery</span>
        </div>
      </section>

      <WhatsApp />

    </main>
  );
}