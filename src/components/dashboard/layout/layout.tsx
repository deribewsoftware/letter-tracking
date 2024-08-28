// src/components/Layout.tsx
"use client";


import Footer from '@/components/footer/Footer';
import DashboardNavbar from '@/components/navbar/dashboardNavbar';
import { Sidebar } from '../sidebar/sidebar';
import { useState } from 'react';
import { FaChartBar, FaHome, FaUser } from 'react-icons/fa';


const menuItems = [
  { label: "Home", href: "#home", icon: FaHome },
  { label: "Analytics", href: "#analytics", icon: FaChartBar },
  { label: "Profile", href: "#profile", icon: FaUser },
];

export default function DashboardLayoutComponent({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [isExpand, setExpand] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors">
      <Sidebar
      onExpand={setExpand}
      isExpand={isExpand}
       menuItems={menuItems} onOpen={setOpen} isOpen={isOpen} />
      <div className={`relative ${isExpand?'lg:ml-64':'lg:ml-20'} flex-1 flex flex-col px-10 transition-all duration-300 `}>
        <DashboardNavbar isExpand={isExpand} />
        <main className="mt-10 py-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
