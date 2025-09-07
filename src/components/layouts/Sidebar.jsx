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
   FaDotCircle,

} from 'react-icons/fa';

import { GoDot } from "react-icons/go";

export default function Sidebar({ open: sidebarOpen, setOpen: setSidebarOpen }) {
   const [activeMenu, setActiveMenu] = useState(null);
   const [activeSubMenu, setActiveSubMenu] = useState(null);
   const [activeItem, setActiveItem] = useState(null);

   // 🎯 Sidebar background color (API driven)
   const [navigationColorBG, setNavigationColorBG] = useState(null);
   const [navigationColorText, setNavigationColorText] = useState(null);
   const [sidebarBackgroundColor, setSidebarBackgroundColor] = useState(null);

   const [nonactiveNavigationClassTailwindCSS, setNonactiveNavigationClassTailwindCSS] = useState(null);
   const [nonactiveNavigationL2ClassTailwindCSS, setNonactiveNavigationL2ClassTailwindCSS] = useState(null);
   const [nonactiveNavigationL3ClassTailwindCSS, setNonactiveNavigationL3ClassTailwindCSS] = useState(null);

   const [activeNavigationClassTailwindCSS, setActiveNavigationClassTailwindCSS] = useState(null);

   useEffect(() => {
      // fetch("https://your-backend.com/api/settings/sidebar")
      //    .then((res) => {
      //       if (!res.ok) throw new Error("API error");
      //       return res.json();
      //    })
      //    .then((data) => {
      //       if (data?.sidebarBackground) {
      //          setSidebarBackgroundColor(data.sidebarBackground);
      //       }
      //    })
      //    .catch(() => {
      //       console.warn("Sidebar config API failed, using default colors");
      //       setSidebarBackgroundColor(null); 
      //    });

      //! Sidebar Color
      // setSidebarBackgroundColor("bg-blue-500");

      const colorMap = {
         cyan: 'hover:text-cyan-600',
         purple: 'hover:text-purple-600',
         blue: 'hover:text-blue-600',
      };

      //! Navigation Color
      setNavigationColorBG('bg-cyan-100');      //? 1. purple-100  2. cyan-100  3. blue-100
      setNavigationColorText('text-cyan-600');  //? 1. purple-600  2. cyan-600  3. purple-600

      //! Non Active Navigation Color for L1, L2 and L3
      setNonactiveNavigationClassTailwindCSS('text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700');
      setNonactiveNavigationL2ClassTailwindCSS('text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700');
      setNonactiveNavigationL3ClassTailwindCSS(
         `text-gray-600 dark:text-gray-300 ${colorMap['cyan']} dark:hover:text-white`
      );


      //! Navigate Color L1
      setActiveNavigationClassTailwindCSS(
         `${navigationColorBG} ${navigationColorText} dark:bg-white dark:text-gray-700`
      );
   }, [navigationColorBG, navigationColorText]);

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
            className={`
               fixed z-30 top-0 left-0 h-full 
               ${sidebarBackgroundColor || 'bg-white dark:bg-gray-800'} 
               shadow-xl transform transition-transform
               ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
               md:${sidebarOpen ? 'w-64' : 'w-20'} md:translate-x-0 md:static md:flex md:flex-col 
               border-r border-gray-200 dark:border-gray-700
            `}
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
                              ? activeNavigationClassTailwindCSS
                              : nonactiveNavigationClassTailwindCSS} font-medium transition-colors group`}
                        >
                           <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                              <div>
                                 <FaHome size={sidebarOpen ? 16 : 18} />
                              </div>
                              <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Dashboards</span>
                           </div>
                           {sidebarOpen && (activeMenu === 'dashboard' ? <FaAngleDown size={16} /> : <FaAngleRight size={16} />)}
                        </button>

                        {/* Submenu level 2 */}
                        <div className={`pl-5 space-y-1 mt-1 ${activeMenu === 'dashboard' && sidebarOpen ? 'block' : 'hidden'}`}>
                           {['analytics', 'ecommerce', 'crm'].map((subItem) => (
                              <div key={subItem}>
                                 <button
                                    onClick={() => toggleSubMenu(subItem)}
                                    className={`w-full flex items-center gap-2 p-2 rounded-md text-sm transition-colors ${activeSubMenu === subItem
                                       ? activeNavigationClassTailwindCSS
                                       : nonactiveNavigationL2ClassTailwindCSS}`}
                                 >
                                    <FaFolder size={14} /> {subItem.charAt(0).toUpperCase() + subItem.slice(1)}
                                    <span className="ml-auto">{activeSubMenu === subItem ? <FaAngleDown size={12} /> : <FaAngleRight size={12} />}</span>
                                 </button>

                                 {/* Level 3 */}
                                 <div className={`pl-6 mt-1 ${activeSubMenu === subItem ? 'block' : 'hidden'}`}>
                                    <ul className="space-y-1">
                                       {['Item 1', 'Item 2'].map((item) => (
                                          <li
                                             key={item}
                                             onClick={() => setActiveItem(item)}
                                             className={`cursor-pointer text-sm ${activeItem === item
                                                ? navigationColorText + ' dark:text-white font-bold'
                                                : nonactiveNavigationL3ClassTailwindCSS
                                                }`}
                                          >
                                             <GoDot className="inline mr-2" size={14} /> {item}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* ---------------- PRODUCT ---------------- */}
                  <div className="space-y-1">
                     <h3 className={`text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 ${!sidebarOpen && 'md:hidden'}`}>
                        WEB APPS
                     </h3>

                     <div className="mb-1">
                        <button
                           onClick={() => toggleMenu('product')}
                           className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2 rounded-md ${activeMenu === 'product'
                              ? activeNavigationClassTailwindCSS
                              : nonactiveNavigationClassTailwindCSS} font-medium transition-colors group`}
                        >
                           <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                              <div>
                                 <FaChartBar size={sidebarOpen ? 16 : 18} />
                              </div>
                              <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Product</span>
                           </div>
                           {sidebarOpen && (activeMenu === 'product' ? <FaAngleDown size={16} /> : <FaAngleRight size={16} />)}
                        </button>

                        {/* Submenu level 2 */}
                        <div className={`pl-5 space-y-1 mt-1 ${activeMenu === 'product' && sidebarOpen ? 'block' : 'hidden'}`}>
                           {['createProduct', 'listProduct'].map((subItem) => (
                              <div key={subItem}>
                                 <button
                                    onClick={() => toggleSubMenu(subItem)}
                                    className={`w-full flex items-center gap-2 p-2 rounded-md text-sm transition-colors ${activeSubMenu === subItem
                                       ? activeNavigationClassTailwindCSS
                                       : nonactiveNavigationL2ClassTailwindCSS}`}
                                 >
                                    <FaFolder size={14} /> {subItem === 'createProduct' ? 'Create' : 'List'}
                                    <span className="ml-auto">{activeSubMenu === subItem ? <FaAngleDown size={12} /> : <FaAngleRight size={12} />}</span>
                                 </button>

                                 {/* Level 3 */}
                                 <div className={`pl-6 mt-1 ${activeSubMenu === subItem ? 'block' : 'hidden'}`}>
                                    <ul className="space-y-1">
                                       {(subItem === 'createProduct'
                                          ? ['Single Product', 'Bulk Products']
                                          : ['All Products', 'Categories', 'Tags']
                                       ).map((item) => (
                                          <li
                                             key={item}
                                             onClick={() => {
                                                setActiveMenu('product');
                                                setActiveSubMenu(subItem);
                                                setActiveItem(item);
                                             }}
                                             className={`cursor-pointer text-sm ${activeItem === item
                                                ? navigationColorText + ' dark:text-white font-bold'
                                                : nonactiveNavigationL3ClassTailwindCSS
                                                }`}
                                          >
                                             <GoDot className="inline mr-2" size={14} /> {item}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>

                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* ---------------- ORDER ---------------- */}
                  <div className="mb-1">
                     <button
                        onClick={() => toggleMenu('order')}
                        className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2 rounded-md ${activeMenu === 'order'
                           ? activeNavigationClassTailwindCSS
                           : nonactiveNavigationClassTailwindCSS} font-medium transition-colors group`}
                     >
                        <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                           <div>
                              <FaShoppingCart size={sidebarOpen ? 16 : 18} />
                           </div>
                           <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Order</span>
                        </div>
                        {sidebarOpen && (activeMenu === 'order' ? <FaAngleDown size={16} /> : <FaAngleRight size={16} />)}
                     </button>

                     <div className={`pl-5 space-y-1 mt-1 ${activeMenu === 'order' && sidebarOpen ? 'block' : 'hidden'}`}>
                        {['newOrders', 'processingOrders', 'completedOrders', 'cancelledOrders'].map((item) => (
                           <div
                              key={item}
                              onClick={() => setActiveItem(item)}
                              className={`flex items-center gap-2 p-2 rounded-md text-sm cursor-pointer ${activeItem === item
                                 ? activeNavigationClassTailwindCSS + ' font-bold'
                                 : nonactiveNavigationL2ClassTailwindCSS
                                 }`}
                           >
                              <GoDot className="inline mr-2" size={14} />
                              {item === 'newOrders'
                                 ? 'New Orders'
                                 : item === 'processingOrders'
                                    ? 'Processing'
                                    : item === 'completedOrders'
                                       ? 'Completed'
                                       : 'Cancelled'}
                           </div>
                        ))}
                     </div>

                  </div>
               </nav>
            </div>
         </aside>
      </>
   );
}
