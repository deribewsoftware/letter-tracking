"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaBell, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import Notification from "../notification/notification";

export default function DashboardNavbar({isExpand}:{isExpand?:boolean}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [scrolled, setScrolled] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  

  useEffect(() => {
    // Set the initial theme based on system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={` ${isExpand?'lg:ml-64 lg:w-5/6 ':'lg:ml-20 lg:w-full'} fixed top-0 z-30  lg:z-50 left-0 w-full  transition-colors duration-300 ${
        scrolled ? " bg-surfaceLight dark:bg-surfaceDark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
        
          {/* Center the icons on mobile and right align on larger screens */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-textLight dark:text-textDark focus:outline-none p-2 transition-transform duration-300 transform hover:scale-110"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>

            {/* Notifications Button */}
            <Notification/>

            {/* User Avatar */}
            <div className="relative">
              <button
                className="text-textLight dark:text-textDark focus:outline-none p-2"
                aria-label="User Menu"
              >
                <FaUser size={20} />
              </button>
              {/* Placeholder for User Menu Dropdown */}
              {/* Implement dropdown as needed */}
            </div>
          </div>
        </div>
      </div>

     
    </motion.nav>
  );
}
