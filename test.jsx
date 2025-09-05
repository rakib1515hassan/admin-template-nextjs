'use client';
import { useState, useEffect } from 'react';
import {
    FaHome,
    FaChartBar,
    FaShoppingCart,
    FaUsers,
    FaFolder,
    FaAngleDown,
    FaAngleRight,
} from 'react-icons/fa';

export default function Sidebar({ open: sidebarOpen, setOpen: setSidebarOpen }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    // 🎯 Sidebar background color (API driven)
    const [sidebarBackgroundColor, setSidebarBackgroundColor] = useState(null);

    useEffect(() => {
        // ✅ শুধু এখানে API url বসাতে হবে
        fetch("https://your-backend.com/api/settings/sidebar")
            .then((res) => {
                if (!res.ok) throw new Error("API error");
                return res.json();
            })
            .then((data) => {
                if (data?.sidebarBackground) {
                    setSidebarBackgroundColor(data.sidebarBackground);
                }
            })
            .catch(() => {
                console.warn("Sidebar config API failed, using default colors");
                setSidebarBackgroundColor(null); // fallback
            });
    }, []);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
        setActiveSubMenu(null);
    };

    const toggleSubMenu = (submenu) => {
        setActiveSubMenu(activeSubMenu === submenu ? null : submenu);
    };

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            <aside
                style={{
                    backgroundColor: sidebarBackgroundColor || undefined, // 🎯 API রঙ, না থাকলে default
                }}
                className={`fixed z-30 top-0 left-0 h-full 
               ${!sidebarBackgroundColor ? 'bg-white dark:bg-gray-800' : ''}  // fallback 
               shadow-xl transform transition-transform
               ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
               md:${sidebarOpen ? 'w-64' : 'w-20'} md:translate-x-0 md:static md:flex md:flex-col 
               border-r border-gray-200 dark:border-gray-700`}
            >
                {/* Logo */}
                <div className="flex items-center justify-center h-16 shadow-sm border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-gray-800 dark:to-gray-900">
                    <div className={`flex items-center ${sidebarOpen ? 'gap-2' : 'justify-center'}`}>
                        <div className="bg-white dark:bg-gray-800 p-1.5 rounded-md shadow-md">
                            <img src="/logo.svg" alt="Logo" className="h-7 w-7" />
                        </div>
                        <h1 className={`text-xl font-bold text-white ${!sidebarOpen && 'md:hidden'}`}>
                            Astha Admin
                        </h1>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                    <nav className="flex flex-col p-3 flex-grow space-y-1">

                        {/* ---------------- DASHBOARDS ---------------- */}
                        <div className="space-y-1">
                            <h3 className={`text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 ${!sidebarOpen && 'md:hidden'}`}>
                                DASHBOARDS
                            </h3>
                            <div className="mb-1">
                                <button
                                    onClick={() => toggleMenu('dashboard')}
                                    className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2 rounded-md ${activeMenu === 'dashboard'
                                        ? 'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                                        : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700'} font-medium transition-colors group`}
                                >
                                    <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                                        <div
                                            className={`${activeMenu === 'dashboard'
                                                ? 'bg-cyan-200 dark:bg-cyan-900/30'
                                                : 'bg-gray-100 dark:bg-gray-700'} ${sidebarOpen ? 'p-1.5' : 'p-2'} rounded text-cyan-600 dark:text-cyan-400`}
                                        >
                                            <FaHome size={sidebarOpen ? 16 : 18} />
                                        </div>
                                        <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Dashboards</span>
                                    </div>
                                    {sidebarOpen && (activeMenu === 'dashboard' ? <FaAngleDown size={16} /> : <FaAngleRight size={16} />)}
                                </button>
                            </div>
                        </div>
                        {/* ... তোমার অন্য menus এখানে থাকবে ... */}
                    </nav>
                </div>
            </aside>
        </>
    );
}
