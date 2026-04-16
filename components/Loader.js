"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-10 h-10 border-4 border-white border-t-transparent rounded-full"
      />
    </div>
  );
}