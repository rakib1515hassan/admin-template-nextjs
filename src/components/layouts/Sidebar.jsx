'use client';
import { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { GoDot } from "react-icons/go";
import { sidebarMenu } from './sidebarMenu';

export default function Sidebar({ open: sidebarOpen, setOpen: setSidebarOpen }) {
   const [activeMenu, setActiveMenu] = useState(null);
   const [activeSubMenu, setActiveSubMenu] = useState(null);
   const [activeItem, setActiveItem] = useState(null);

   // Tailwind Classes
   const [nonactiveNavigationClassTailwindCSS, setNonactiveNavigationClassTailwindCSS] = useState('text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700');
   const [nonactiveNavigationL2ClassTailwindCSS, setNonactiveNavigationL2ClassTailwindCSS] = useState('text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700');
   const [nonactiveNavigationL3ClassTailwindCSS, setNonactiveNavigationL3ClassTailwindCSS] = useState('text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-white');
   const [activeNavigationClassTailwindCSS, setActiveNavigationClassTailwindCSS] = useState('bg-sky-600 text-white dark:bg-white dark:text-gray-700');

   const toggleMenu = (menu) => {
      setActiveMenu(activeMenu === menu ? null : menu);
      setActiveSubMenu(null);
   };

   const toggleSubMenu = (submenu) => {
      setActiveSubMenu(activeSubMenu === submenu ? null : submenu);
   };

   const handleItemClick = (level1Id, level2Id = null, level3Id = null) => {
      setActiveMenu(level1Id || null);
      setActiveSubMenu(level2Id || null);
      setActiveItem(level3Id || null);
   };

   return (
      <>
         {/* Mobile Overlay */}
         <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={() => setSidebarOpen(false)}
         ></div>

         <aside
            className={`fixed z-30 top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-xl transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:${sidebarOpen ? 'w-64' : 'w-20'} md:translate-x-0 md:static md:flex md:flex-col border-r border-gray-200 dark:border-gray-700`}
         >
            {/* Logo */}
            <div className="flex items-center justify-center h-16 shadow-sm border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-gray-800 dark:to-gray-900">
               <div className={`flex items-center ${sidebarOpen ? 'gap-2' : 'justify-center'}`}>
                  <div className="bg-white dark:bg-gray-800 p-1.5 rounded-md shadow-md">
                     <img src="/logo.svg" alt="Logo" className="h-7 w-7" />
                  </div>
                  <h1 className={`text-xl font-bold text-white ${!sidebarOpen && 'md:hidden'}`}>Astha Admin</h1>
               </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
               <nav className="flex flex-col p-3 flex-grow space-y-1">
                  {sidebarMenu.map((menu) => (
                     <div key={menu.id} className="mb-1">
                        {/* Level-1 */}
                        <button
                           onClick={() => menu.children ? toggleMenu(menu.id) : handleItemClick(menu.id)}
                           className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2 rounded-md ${activeMenu === menu.id ? activeNavigationClassTailwindCSS : nonactiveNavigationClassTailwindCSS} font-medium transition-colors`}
                        >
                           <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                              {menu.icon && <menu.icon size={sidebarOpen ? 16 : 18} />}
                              <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>{menu.title}</span>
                           </div>
                           {menu.children && sidebarOpen && (activeMenu === menu.id ? <FaAngleDown size={16} /> : <FaAngleRight size={16} />)}
                        </button>

                        {/* Level-2 */}
                        {menu.children && (
                           <div className={`pl-5 space-y-1 mt-1 ${activeMenu === menu.id && sidebarOpen ? 'block' : 'hidden'}`}>
                              {menu.children.map((sub) => (
                                 <div key={sub.id}>
                                    <button
                                       onClick={() => sub.children ? toggleSubMenu(sub.id) : handleItemClick(menu.id, sub.id)}
                                       className={`w-full flex items-center gap-2 px-2 py-1 rounded-md text-sm transition-colors ${activeSubMenu === sub.id || activeItem === sub.id ? activeNavigationClassTailwindCSS : nonactiveNavigationL2ClassTailwindCSS}`}
                                    >
                                       {sub.icon && <sub.icon size={14} />}
                                       {sub.title}
                                       {sub.children && <span className="ml-auto">{activeSubMenu === sub.id ? <FaAngleDown size={12} /> : <FaAngleRight size={12} />}</span>}
                                    </button>

                                    {/* Level-3 */}
                                    {sub.children && (
                                       <div className={`pl-6 mt-1 ${activeSubMenu === sub.id ? 'block' : 'hidden'}`}>
                                          <ul className="space-y-1">
                                             {sub.children.map((item) => (
                                                <li
                                                   key={item.id}
                                                   onClick={() => handleItemClick(menu.id, sub.id, item.id)}
                                                   className={`cursor-pointer text-sm px-2 py-1 rounded-[4px] ${activeItem === item.id ? activeNavigationClassTailwindCSS : nonactiveNavigationL3ClassTailwindCSS}`}
                                                >
                                                   {item.icon && <item.icon className="inline mr-2" size={14} />}
                                                   {item.title}
                                                </li>
                                             ))}
                                          </ul>
                                       </div>
                                    )}
                                 </div>
                              ))}
                           </div>
                        )}
                     </div>
                  ))}
               </nav>
            </div>
         </aside>
      </>
   );
}
