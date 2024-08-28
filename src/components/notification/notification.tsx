"use client";
import { FaBell } from 'react-icons/fa';
import { Dropdown } from '../ui/dropdown/dropdown';

export default function Notification() {
 

  return (
    <Dropdown
    titleUi={<> <FaBell className="w-6 h-6" />
        <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span></>}
    > {/* Notification Content */}
            <div className="flex flex-col   space-y-4">
              <div className="flex items-center space-x-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="text-sm text-gray-800 dark:text-gray-200">
                  <p>New comment on your post</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">5 mins ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="text-sm text-gray-800 dark:text-gray-200">
                  <p>New like on your comment</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">10 mins ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="text-sm text-gray-800 dark:text-gray-200">
                  <p>New follower</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">15 mins ago</p>
                </div>
              </div>
            </div>
        
    </Dropdown>
    
  );
}
