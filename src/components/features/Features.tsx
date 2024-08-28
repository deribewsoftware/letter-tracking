"use client";
import { motion } from "framer-motion";

import { FaCheckCircle, FaShieldAlt, FaUserShield, FaCogs } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Real-time Tracking",
    description: "Monitor the status of every document as it moves through your organization.",
    icon: FaCheckCircle,
  },
  {
    title: "Secure Document Sharing",
    description: "Ensure documents are shared securely with encryption and role-based access.",
    icon: FaShieldAlt,
  },
  {
    title: "User-friendly Interface",
    description: "Navigate through the system with ease using our intuitive interface.",
    icon: FaUserShield,
  },
  {
    title: "Customizable Workflows",
    description: "Tailor document processes to fit the unique needs of your organization.",
    icon: FaCogs,
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center text-primary dark:text-accent">
          Key Features
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
