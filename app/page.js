"use client";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhatsApp from "../components/WhatsApp";
import { motion } from "framer-motion";
import { FaCode, FaFileAlt, FaProjectDiagram, FaRobot } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  const services = [
    {
      title: "M.Tech Projects",
      desc: "End-to-end academic projects with full implementation and support.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "MS Projects (Abroad)",
      desc: "Support for international students (USA, UK, Canada).",
      icon: <FaCode />,
    },
    {
      title: "Assignments & Documentation",
      desc: "Complete reports, thesis writing, and research papers.",
      icon: <FaFileAlt />,
    },
    {
      title: "AI / ML Solutions",
      desc: "Advanced AI, ML, and Data Science development.",
      icon: <FaRobot />,
    },
  ];

  return (
    <main className="bg-black text-white">

      <Navbar />

      <div className="pt-24">
        <Hero />
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 text-center">
        <motion.h2 className="text-4xl font-bold mb-10">
          Our Expertise
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-lg"
            >
              <div className="text-3xl text-purple-400 mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-bold mb-12">Our Process</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Requirement Analysis",
            "Development & Research",
            "Testing & Documentation",
            "Final Delivery & Support",
          ].map((step, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-purple-400 font-bold mb-2">
                Step {i + 1}
              </h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUALITY */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Our Quality Commitment
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "100% Original Work",
              desc: "Plagiarism-free content with academic integrity.",
            },
            {
              title: "Complete Documentation",
              desc: "Reports, PPT, source code, explanation.",
            },
            {
              title: "On-Time Delivery",
              desc: "Strict deadline adherence guaranteed.",
            },
            {
              title: "Expert Developers",
              desc: "Experienced team in AI, ML, Web & Data Science.",
            },
            {
              title: "24/7 Support",
              desc: "Support even after project delivery.",
            },
            {
              title: "Custom Solutions",
              desc: "Tailored based on your university requirements.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-purple-400 font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
{/* PREMIUM HOVER FAQ */}
<section className="py-24 px-6 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold mb-10 text-center">
    Frequently Asked Questions
  </h2>

 <div className="space-y-4 h-[450px] overflow-y-auto pr-2">
    {[
      {
        q: "How quickly can you deliver assignments or projects?",
        a: "Basic assignments are delivered within 24–48 hours. Advanced projects may take 3–7 days depending on complexity.",
      },
      {
        q: "Do you provide complete source code and documentation?",
        a: "Yes, we provide full source code, reports, PPTs, and explanation aligned with university standards.",
      },
      {
        q: "Is your work plagiarism-free?",
        a: "Absolutely. All work is developed from scratch and verified using plagiarism detection tools.",
      },
      {
        q: "Do you offer support after delivery?",
        a: "Yes, we provide post-delivery support including revisions, explanation, and viva guidance.",
      },
      {
        q: "Can you handle international (MS) assignments?",
        a: "Yes, we support students from USA, UK, Canada, and Australia with advanced requirements.",
      },
      {
        q: "What technologies do you specialize in?",
        a: "We specialize in AI/ML, Data Science, Python, React, TensorFlow, and Cloud technologies.",
      },
      {
        q: "How is pricing determined?",
        a: "Pricing depends on complexity, deadline, and requirements. We provide affordable pricing.",
      },
      {
        q: "Do you provide revisions?",
        a: "Yes, we offer revisions based on your feedback to meet expectations.",
      },
      {
        q: "Is my project confidential?",
        a: "Yes, all your data and project details are kept strictly confidential.",
      },
      {
        q: "Can you handle urgent deadlines?",
        a: "Yes, we accept urgent work based on availability and deliver quickly.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={false}
        whileHover={{ scale: 1.02 }}
        className="group bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-lg transition cursor-pointer"
      >
        <h3 className="font-semibold text-lg">{item.q}</h3>

        {/* ANSWER */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
          <p className="text-gray-400 text-sm mt-2">
            {item.a}
          </p>
        </div>
      </motion.div>
    ))}

  </div>
</section>

      {/* CONTACT CTA */}
      <section className="py-28 text-center bg-gradient-to-r from-purple-900 to-blue-900">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>

        <p className="text-gray-200 mb-10">
          Get expert help for your assignments instantly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
      <a
  href="https://wa.me/918317575719"
  className="bg-green-500 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition shadow-lg flex items-center justify-center gap-3"
>
  <FaWhatsapp className="text-xl" />
  WhatsApp Now
</a>
          <a
            href="/contact"
            className="bg-white text-black px-8 py-4 rounded-xl"
          >
            Contact Us
          </a>
        </div>
      </section>

      <WhatsApp />

    </main>
  );
}