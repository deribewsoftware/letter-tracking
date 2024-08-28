"use client"
"use client";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: ReactElement; // Accepting icon as a JSX element
  };
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-primary dark:text-accent mb-4">
        {feature.icon} {/* Render the icon here */}
      </div>
      <h3 className="text-2xl font-bold text-primary dark:text-highlight">
        {feature.title}
      </h3>
      <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
        {feature.description}
      </p>
    </motion.div>
  );
}
