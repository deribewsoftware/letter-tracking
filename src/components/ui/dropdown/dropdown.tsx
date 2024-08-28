"use client";
import { useEffect, useRef, useState ,ReactNode} from 'react';
import { FaBell } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Dropdown=(
  {titleUi,children}:
    {titleUi:ReactNode
      ,children:ReactNode}
  
)=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev)=>!prev);
  };

  // Reference to the dropdown container
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Function to close the dropdown when clicked inside
  const handleClickInside = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {isOpen?<motion.div
        
        className="relative p-2 rounded-full text-textLight dark:text-textDark focus:outline-none"
      >
       
        {titleUi}
      </motion.div>:<motion.button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-textLight dark:text-textDark focus:outline-none"
      >
        
        {titleUi}
      </motion.button>}

      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 pl-4  mt-2 w-72 "
          onClick={handleClickInside}
        >
          <div className="relative pl-10 sm:pl-0 ">
            {/* Arrow on the top-right */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-white dark:bg-gray-800 transform rotate-45 -mt-2"></div>

            {/* Notification Content */}
            <div className="bg-white p-4  shadow-lg rounded-lg 
          rounded-tr-none z-50 dark:bg-gray-800">
            {children}
            </div>
            
          </div>
        </motion.div>
      )}
    </div>
  );
}
