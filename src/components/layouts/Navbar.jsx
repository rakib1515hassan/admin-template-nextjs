"use client";
import { useState } from "react";
import { FaExpand, FaBars, FaBell, FaUser, FaSearch, FaAngleDown } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    return (
        <header className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-4 py-3 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                {/* Hamburger menu - visible on all screen sizes */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 rounded-lg transition-colors"
                    aria-label="Toggle sidebar"
                >
                    <FaBars size={18} />
                </button>

                {/* Title - only on larger screens */}
                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 hidden md:block">
                    Admin Dashboard
                </h1>
                
                {/* Search bar */}
                <div className="relative hidden md:block ml-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearch className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input 
                        type="search" 
                        className="block w-64 lg:w-80 p-2 pl-10 text-sm border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div className="flex items-center gap-2">
                {/* Dark/Light Mode */}
                <ThemeToggle />

                {/* Fullscreen */}
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
                        aria-label="Notifications"
                    >
                        <FaBell size={18} />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
                    </button>
                    
                    {/* Notifications dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-200 dark:border-gray-700 z-50">
                            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-700 dark:text-gray-200">Notifications</h3>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                {/* Notification items */}
                                <a href="#" className="flex px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-2">
                                        <FaUser className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="ml-3 w-full">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">New user registered</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                                    </div>
                                </a>
                                <a href="#" className="flex px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 rounded-full p-2">
                                        <FaShoppingCart className="h-4 w-4 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="ml-3 w-full">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">New order received</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                                    </div>
                                </a>
                            </div>
                            <a href="#" className="block text-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline p-2">
                                View all notifications
                            </a>
                        </div>
                    )}
                </div>
                
                {/* User menu */}
                <div className="relative ml-2">
                    <button 
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 py-1.5 px-2 rounded-lg transition-colors"
                    >
                        <img 
                            src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" 
                            alt="User" 
                            className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-700"
                        />
                        <span className="hidden md:block text-sm font-medium">Admin User</span>
                        <FaAngleDown size={12} className="text-gray-500" />
                    </button>
                    
                    {/* User dropdown */}
                    {showUserMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-200 dark:border-gray-700 z-50">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Your Profile
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Settings
                            </a>
                            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Sign out
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
