// src/components/Contact.tsx
"use client"
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-surfaceLight dark:bg-surfaceDark">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-accent">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Whether you have a question or need assistance, we&apos;re here to help.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="mailto:info@trackit.com" className="flex items-center text-lg md:text-xl text-secondary dark:text-accent">
            <FaEnvelope className="mr-2" /> info@trackit.com
          </a>
          <a href="tel:+1234567890" className="flex items-center text-lg md:text-xl text-secondary dark:text-accent">
            <FaPhone className="mr-2" /> +1 234 567 890
          </a>
        </div>
      </motion.div>
    </section>
  );
}
