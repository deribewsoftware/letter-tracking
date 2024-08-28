// src/components/Footer.tsx
"use client"
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-surfaceLight dark:bg-surfaceDark text-center py-8 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-accent mb-4">
          Empowering Your Workflow
        </h3>
        <p className="text-lg md:text-xl mb-8">
          Transform the way you manage, share, and collaborate on documents with TrackIt.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-primary dark:text-accent hover:text-secondary dark:hover:text-primary"
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-primary dark:text-accent hover:text-secondary dark:hover:text-primary"
          >
            <FaFacebookF size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="text-primary dark:text-accent hover:text-secondary dark:hover:text-primary"
          >
            <FaLinkedinIn size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com"
            aria-label="GitHub"
            className="text-primary dark:text-accent hover:text-secondary dark:hover:text-primary"
          >
            <FaGithub size={24} />
          </motion.a>
        </div>
        
        <p className="text-sm md:text-base text-textLight dark:text-textDark mb-4">
          Stay connected and follow us on social media for the latest updates and tips.
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-xs md:text-sm text-textLight dark:text-textDark">
            © {new Date().getFullYear()} TrackIt. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
