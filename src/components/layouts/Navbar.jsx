"use client";
import { useState, useRef, useEffect } from "react";
import { FaExpand, FaBell, FaUser, FaAngleDown, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
   const [showNotifications, setShowNotifications] = useState(false);
   const [showUserMenu, setShowUserMenu] = useState(false);
   const userMenuRef = useRef();

   const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
         document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
         document.exitFullscreen();
      }
   };

   // Close user menu on click outside
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
            setShowUserMenu(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   return (
      <header className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-4 py-3 sticky top-0 z-10">

         {/* Left: Sidebar Toggle + Title */}
         <div className="flex items-center gap-4">
            <button
               onClick={() => setSidebarOpen(!sidebarOpen)}
               className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg font-bold text-xl transition-colors"
               aria-label="Toggle sidebar"
            >
               {sidebarOpen ? "❮" : "❯"}
            </button>

            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 hidden md:block">
               Admin Dashboard
            </h1>
         </div>

         {/* Right: Theme, Fullscreen, Notifications, User */}
         <div className="flex items-center gap-3">

            <ThemeToggle />

            <button
               onClick={toggleFullScreen}
               className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 rounded-lg transition-colors"
               aria-label="Toggle fullscreen"
            >
               <FaExpand size={18} />
            </button>

            {/* Notifications */}
            <div className="relative">
               <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 rounded-lg transition-colors relative"
               >
                  <FaBell size={18} />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
               </button>
            </div>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
               <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 py-1.5 px-3 rounded-lg transition-colors"
               >
                  <img
                     src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff"
                     alt="User"
                     className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-700"
                  />
                  <span className="hidden md:block text-sm font-medium">Admin User</span>
                  <FaAngleDown size={12} className="text-gray-500" />
               </button>

               {/* Dropdown */}
               {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 animate-fadeIn">
                     {/* Arrow */}
                     <div className="absolute right-3 -top-2 w-3 h-3 bg-white dark:bg-gray-800 transform rotate-45 border-l border-t border-gray-200 dark:border-gray-700"></div>

                     {/* Menu Items */}
                     <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-md"
                     >
                        <FaUserCircle className="text-gray-500 dark:text-gray-300" /> Your Profile
                     </a>
                     <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-md"
                     >
                        <FaCog className="text-gray-500 dark:text-gray-300" /> Settings
                     </a>
                     <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                     <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-md"
                     >
                        <FaSignOutAlt className="text-red-600 dark:text-red-400" /> Sign out
                     </a>
                  </div>
               )}
            </div>
         </div>
      </header>
   );
}
