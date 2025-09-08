'use client';

import { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { sidebarMenu } from './sidebarMenu';

export default function Sidebar({ open: sidebarOpen, setOpen: setSidebarOpen, userPermissions = [] }) {
   const [activeMenu, setActiveMenu] = useState(null);
   const [activeSubMenu, setActiveSubMenu] = useState(null);
   const [activeItem, setActiveItem] = useState(null);
   const [hoverExpand, setHoverExpand] = useState(false);

   const [navigationColorBG, setNavigationColorBG] = useState('bg-sky-600');
   const [navigationColorText, setNavigationColorText] = useState('text-white');
   const [nonactiveNavigationClassTailwindCSS, setNonactiveNavigationClassTailwindCSS] = useState('');
   const [nonactiveNavigationL2ClassTailwindCSS, setNonactiveNavigationL2ClassTailwindCSS] = useState('');
   const [nonactiveNavigationL3ClassTailwindCSS, setNonactiveNavigationL3ClassTailwindCSS] = useState('');
   const [activeNavigationClassTailwindCSS, setActiveNavigationClassTailwindCSS] = useState('');

   useEffect(() => {
      const colorMap = {
         cyan: 'hover:text-cyan-600',
         purple: 'hover:text-purple-600',
         blue: 'hover:text-blue-600',
      };

      setNavigationColorBG('bg-sky-600');
      setNavigationColorText('text-white');
      setNonactiveNavigationClassTailwindCSS('text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700');
      setNonactiveNavigationL2ClassTailwindCSS('text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700');
      setNonactiveNavigationL3ClassTailwindCSS(`text-gray-600 dark:text-gray-300 ${colorMap['cyan']} dark:hover:text-white`);
      setActiveNavigationClassTailwindCSS(`${navigationColorBG} ${navigationColorText} dark:bg-white dark:text-gray-700`);
   }, [navigationColorBG, navigationColorText]);

   const toggleMenu = (menuId) => {
      setActiveMenu(activeMenu === menuId ? null : menuId);
      setActiveSubMenu(null);
   };

   const toggleSubMenu = (subId) => {
      setActiveSubMenu(activeSubMenu === subId ? null : subId);
   };

   const handleItemClick = (level1Id, level2Id = null, level3Id = null) => {
      setActiveMenu(level1Id || null);
      setActiveSubMenu(level2Id || null);
      setActiveItem(level3Id || null);

      if (window.innerWidth < 768) {
         setSidebarOpen(false); // Mobile auto-close
      }
   };

   const hasPermission = (menu) => {
      if (!menu.permissions || menu.permissions.length === 0) return true;
      return menu.permissions.some((p) => userPermissions.includes(p));
   };

   const isExpanded = sidebarOpen || hoverExpand;

   return (
      <>
         {/* Mobile overlay */}
         <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={() => setSidebarOpen(false)}
         />

         <aside
            onMouseEnter={() => {
               if (!sidebarOpen) setHoverExpand(true);
            }}
            onMouseLeave={() => {
               if (hoverExpand) setHoverExpand(false);
            }}
            className={`fixed z-30 top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-xl transform transition-all duration-300 
          ${isExpanded ? 'translate-x-0 w-64' : '-translate-x-full md:w-20 md:translate-x-0'} 
          md:static md:flex md:flex-col border-r border-gray-200 dark:border-gray-700`}
         >
            {/* Logo */}
            <div className="flex items-center justify-center h-16 shadow-sm border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-gray-800 dark:to-gray-900">
               <div className={`flex items-center ${isExpanded ? 'gap-2' : 'justify-center'}`}>
                  <div className="bg-white dark:bg-gray-800 p-1.5 rounded-md shadow-md">
                     <img src="/logo/DekkoISHO_logo.png" alt="Logo" className="h-7 w-7" />
                  </div>
                  {isExpanded && <h1 className="text-xl font-bold text-white">Astha Admin</h1>}
               </div>
            </div>

            {/* Menu items */}
            <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
               <nav className="flex flex-col p-3 flex-grow space-y-1">
                  {sidebarMenu.map((menu) => {
                     if (!hasPermission(menu)) return null;
                     return (
                        <div key={menu.id} className="mb-1">
                           {/* Level 1 */}
                           <button
                              onClick={() => (menu.children ? toggleMenu(menu.id) : handleItemClick(menu.id))}
                              className={`w-full flex items-center justify-between ${isExpanded ? 'gap-3' : 'justify-center'} p-2 rounded-[4px] ${activeMenu === menu.id ? activeNavigationClassTailwindCSS : nonactiveNavigationClassTailwindCSS
                                 } font-medium transition-colors`}
                           >
                              <div className={`flex items-center ${isExpanded ? 'gap-3' : 'justify-center w-full'}`}>
                                 {menu.icon && <menu.icon size={isExpanded ? 16 : 18} />}
                                 {isExpanded && <span className="text-base">{menu.title}</span>}
                              </div>
                              {menu.children && isExpanded && (activeMenu === menu.id ? <FaAngleDown size={16} /> : <FaAngleRight size={16} />)}
                           </button>

                           {/* Level 2 */}
                           {menu.children && activeMenu === menu.id && isExpanded && (
                              <div className="pl-5 space-y-1 mt-1">
                                 {menu.children.map((sub) => {
                                    if (!hasPermission(sub)) return null;
                                    return (
                                       <div key={sub.id}>
                                          <button
                                             onClick={() => (sub.children ? toggleSubMenu(sub.id) : handleItemClick(menu.id, sub.id))}
                                             className={`w-full flex items-center gap-2 px-2 py-1 rounded-[4px] text-sm transition-colors ${activeSubMenu === sub.id || activeItem === sub.id
                                                ? activeNavigationClassTailwindCSS
                                                : nonactiveNavigationL2ClassTailwindCSS
                                                }`}
                                          >
                                             {sub.icon && <sub.icon size={14} />}
                                             {sub.title}
                                             {sub.children && <span className="ml-auto">{activeSubMenu === sub.id ? <FaAngleDown size={12} /> : <FaAngleRight size={12} />}</span>}
                                          </button>

                                          {/* Level 3 */}
                                          {sub.children && activeSubMenu === sub.id && (
                                             <ul className="pl-6 mt-1 space-y-1">
                                                {sub.children.map((item) => {
                                                   if (!hasPermission(item)) return null;
                                                   return (
                                                      <li
                                                         key={item.id}
                                                         onClick={() => handleItemClick(menu.id, sub.id, item.id)}
                                                         className={`cursor-pointer text-sm px-2 py-1 rounded-[4px] ${activeItem === item.id ? activeNavigationClassTailwindCSS : nonactiveNavigationL3ClassTailwindCSS
                                                            }`}
                                                      >
                                                         {item.icon && <item.icon className="inline mr-2" size={14} />}
                                                         {item.title}
                                                      </li>
                                                   );
                                                })}
                                             </ul>
                                          )}
                                       </div>
                                    );
                                 })}
                              </div>
                           )}
                        </div>
                     );
                  })}
               </nav>
            </div>
         </aside>
      </>
   );
}
