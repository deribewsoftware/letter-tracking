// components/Navbar.tsx
"use client"
// components/Navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set the initial theme based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-30 transition-colors duration-300 ${
        scrolled ? 'bg-primary dark:bg-backgroundDark shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-secondary dark:text-accent">
              {/* Replace with your SVG or Image logo */}
              <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
              <span>TrackIt</span>
            </div>
          </Link>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/dashboard" className="text-textLight dark:text-textDark hover:text-secondary dark:hover:text-accent transition">
              Dashboard
            </Link>
            <Link href="/organizations" className="text-textLight dark:text-textDark hover:text-secondary dark:hover:text-accent transition">
              Organizations
            </Link>
            <Link href="/profile" className="text-textLight dark:text-textDark hover:text-secondary dark:hover:text-accent transition">
              Profile
            </Link>
            <Link href="/contact" className="text-textLight dark:text-textDark hover:text-secondary dark:hover:text-accent transition">
              Contact
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-textLight dark:text-textDark focus:outline-none p-2"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-textLight dark:text-textDark md:hidden focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {navbarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-backgroundLight dark:bg-backgroundDark"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-textLight dark:text-textDark hover:text-secondary dark:hover:text-accent transition">
              Dashboard
            </Link>
            <Link href="/organizations" className="block px-3 py-2 rounded-md text-base font-medium text-textLight dark:text-textDark hover:text-secondary dark:hover:text-accent transition">
              Organizations
            </Link>
            <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-textLight dark:text-textDark hover:text-secondary dark:hover:text-accent transition">
              Profile
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-textLight dark:text-textDark hover:text-secondary dark:hover:text-accent transition">
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
