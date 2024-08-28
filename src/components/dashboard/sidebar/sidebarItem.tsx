import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';
interface MenuItem {
  label: string;
  href: string;
  icon: IconType;
  isLabel?:boolean
}
const SidebarItem:React.FC<MenuItem> = ({label,isLabel,href,icon:Icon}) => {
  return (<Link
    key={label}
    href={href}
    className="flex items-center space-x-2 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md"
  >
    <Icon className="w-6 h-6" />
    {isLabel?<span>{label}</span>:""}
  </Link>
  )
}

export default SidebarItem