"use client";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import SidebarItem from "./sidebarItem";
import { LuMoveRight } from "react-icons/lu";
import { MdOutlineKeyboardBackspace ,MdOutlineKeyboardArrowRight} from "react-icons/md";
interface MenuItem {
  label: string;
  href: string;
  icon: IconType;
}

interface SidebarProps {
  isOpen: boolean;
  onOpen: (isOpen: boolean) => void;
  isExpand:boolean;
 onExpand: (isOpen: boolean) => void;
  menuItems: MenuItem[];
}

export const Sidebar = ({
  isOpen,
  onOpen,
  isExpand,
  onExpand,
  menuItems,
}: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Close the sidebar when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onOpen(false);
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
  }, [isOpen, onOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className=" lg:hidden  fixed top-4 left-4 z-50">
        <button className="" onClick={() => onOpen(!isOpen)}>
          <IoMenuOutline className="w-6 h-6 text-yellow-400" />
        </button>
      
       
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 ${isExpand?'w-64':'w-20'} bg-surfaceLight dark:bg-surfaceDark shadow-lg transition-transform transform ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full lg:translate-x-0 lg:opacity-100"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            {isExpand?<h1 className="text-2xl font-bold dark:text-gray-400 text-gray-900">
              Dashboard
            </h1>:""}
            <button onClick={() => onOpen(!isOpen)} className="lg:hidden">
              <IoClose className="w-6 h-6 text-yellow-400" />
            </button>

            {isExpand? <button className=" hidden lg:block" onClick={() => onExpand(!isExpand)}>
          <MdOutlineKeyboardBackspace className="w-6 h-6 text-yellow-400" />
        </button>:<div className="w-full flex justify-center">
        <button className=" hidden lg:block" onClick={() => onExpand(!isExpand)}>
          <LuMoveRight className="w-6 h-6 text-yellow-400" />
        </button></div>}

            

          </div>
          <nav className="flex flex-col p-4 space-y-2">
            {menuItems.map((item) => (
              <SidebarItem 
              isLabel={isExpand}
              key={item?.label}
              icon={item?.icon}
              href={item?.href}
              label={item?.label}/>
            ))}
          </nav>
          {isExpand?<footer className="mt-auto p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Your Company
            </p>
          </footer>:""}
        </div>
      </div>
    </>
  );
};
