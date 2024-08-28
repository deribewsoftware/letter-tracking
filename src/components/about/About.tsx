"use client";
import { FaCheckCircle, FaUsers, FaCloudUploadAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import AboutCard from "./aboutCard";


export default function About() {
  return (
    <section className="py-20 px-4 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-primary dark:text-accent">
          About <span className="text-secondary dark:text-highlight">TrackIt</span>
        </h2>
        <p className="mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300">
          Empower your team with seamless document management, real-time tracking, and enhanced collaboration.
        </p>
      </motion.div>

      <div className="flex gap-6 flex-col md:flex-row justify-around mt-16 space-y-12 md:space-y-0">
        <AboutCard
          icon={<FaCheckCircle size={60} />}
          title="Accurate Tracking"
          description="Monitor document progress with precision, ensuring nothing gets lost in the process."
          delay={0.2}
        />
        <AboutCard
          icon={<FaUsers size={60} />}
          title="Team Collaboration"
          description="Foster collaboration across your organization, ensuring everyone stays in sync."
          delay={0.4}
        />
        <AboutCard
          icon={<FaCloudUploadAlt size={60} />}
          title="Secure Sharing"
          description="Share documents securely and effortlessly, with cloud-based accessibility."
          delay={0.6}
        />
      </div>
    </section>
  );
}
