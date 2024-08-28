"use client";
import { motion } from "framer-motion";
import { FaRocket, FaBolt, FaLightbulb } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-light dark:bg-dark transition-colors duration-500">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-accent">
            Launch Your Ideas with{" "}
            <span className="text-secondary dark:text-highlight">TrackIt</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300">
            Revolutionize your workflow with our powerful letter tracking system.
          </p>
          <div className="mt-8">
            <button className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-secondary dark:bg-accent dark:hover:bg-highlight transition-all duration-300">
              Get Started
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex space-x-10 mt-12"
        >
          <FaRocket size={80} className="text-primary dark:text-accent" />
          <FaBolt size={80} className="text-secondary dark:text-highlight" />
          <FaLightbulb size={80} className="text-primary dark:text-accent" />
        </motion.div>
      </section>
    </div>
  );
}
