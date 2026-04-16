"use client";

import Navbar from "../../components/Navbar";
import WhatsApp from "../../components/WhatsApp";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-6">
          Our Services
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          We provide high-quality academic solutions for M.Tech, MS and postgraduate
          students worldwide — including projects, assignments, and full documentation support.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-10 text-left">

          {[
            {
              title: "M.Tech Projects",
              desc: "Complete end-to-end academic project development tailored to university requirements.",
              points: [
                "✔ Full source code implementation",
                "✔ Detailed documentation & reports",
                "✔ PPT & explanation for viva",
                "✔ Real-time project support",
              ],
            },
            {
              title: "MS Projects (Abroad)",
              desc: "Advanced project solutions for international students (USA, UK, Canada, Australia).",
              points: [
                "✔ Research-based assignments",
                "✔ IEEE standard documentation",
                "✔ Support for strict university guidelines",
                "✔ Continuous assistance",
              ],
            },
            {
              title: "Assignments & Documentation",
              desc: "Professional academic writing and structured documentation services.",
              points: [
                "✔ Thesis & dissertation writing",
                "✔ Plagiarism-free content",
                "✔ PPT & report preparation",
                "✔ Proper formatting (APA/IEEE)",
              ],
            },
            {
              title: "AI / ML Solutions",
              desc: "Cutting-edge AI, Machine Learning, and Data Science project development.",
              points: [
                "✔ Deep Learning & NLP projects",
                "✔ Python, TensorFlow, PyTorch",
                "✔ Real datasets & analysis",
                "✔ End-to-end model deployment",
              ],
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:shadow-purple-500/30 transition"
            >
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">
                {service.title}
              </h2>

              <p className="text-gray-400 mb-4 text-sm">
                {service.desc}
              </p>

              <ul className="space-y-2 text-gray-300 text-sm">
                {service.points.map((p, index) => (
                  <li key={index}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-bold mb-12">How We Work</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: "Step 1",
              title: "Requirement Analysis",
              desc: "We understand your academic requirements and project scope in detail.",
            },
            {
              step: "Step 2",
              title: "Development",
              desc: "Our experts start development with proper research and coding.",
            },
            {
              step: "Step 3",
              title: "Testing",
              desc: "We ensure the project is error-free and meets quality standards.",
            },
            {
              step: "Step 4",
              title: "Delivery & Support",
              desc: "Final delivery with documentation and ongoing support.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-purple-400 font-bold mb-2">
                {item.step}
              </h3>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-purple-800 to-blue-800">
        <h2 className="text-4xl font-bold mb-4">
          Need Help With Your Project?
        </h2>

        <p className="mb-6 text-gray-200">
          Get expert assistance for your assignments and academic work.
        </p>

        <a
          href="https://wa.me/918317575719"
          className="bg-white text-black px-8 py-3 rounded-lg hover:scale-105 transition"
        >
          Contact Us on WhatsApp
        </a>
      </section>

      <WhatsApp />

    </main>
  );
}