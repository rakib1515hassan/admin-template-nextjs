'use client';
import { useState } from 'react';
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
            className={`fixed z-30 top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-xl transform transition-transform
             ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
             md:${sidebarOpen ? 'w-64' : 'w-20'} md:translate-x-0 md:static md:flex md:flex-col border-r border-gray-200 dark:border-gray-700`}
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
                           className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2.5 rounded-md ${activeMenu === 'dashboard'
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

                        {/* Submenu level 2 */}
                        <div className={`pl-11 space-y-1 mt-1 ${activeMenu === 'dashboard' && sidebarOpen ? 'block' : 'hidden'}`}>
                           {['analytics', 'ecommerce', 'crm'].map((subItem) => (
                              <div key={subItem}>
                                 <button
                                    onClick={() => toggleSubMenu(subItem)}
                                    className={`w-full flex items-center gap-2 p-2 rounded-md text-sm transition-colors ${activeSubMenu === subItem
                                       ? 'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                                       : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'}`}
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
                                                ? 'text-cyan-600 dark:text-cyan-400 font-bold' 
                                                : 'text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                                                }`}
                                          >
                                             <span className="mr-2">•</span> {item}
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
                           className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2.5 rounded-md ${activeMenu === 'product'
                              ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700'} font-medium transition-colors group`}
                        >
                           <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                              <div
                                 className={`${activeMenu === 'product'
                                    ? 'bg-purple-200 dark:bg-purple-900/30'
                                    : 'bg-gray-100 dark:bg-gray-700'} ${sidebarOpen ? 'p-1.5' : 'p-2'} rounded text-purple-600 dark:text-purple-400 flex items-center justify-center`}
                              >
                                 <FaChartBar size={sidebarOpen ? 16 : 18} />
                              </div>
                              <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Product</span>
                           </div>
                           {sidebarOpen && (activeMenu === 'product' ? <FaAngleDown size={16} /> : <FaAngleRight size={16} />)}
                        </button>

                        {/* Submenu level 2 */}
                        <div className={`pl-11 space-y-1 mt-1 ${activeMenu === 'product' && sidebarOpen ? 'block' : 'hidden'}`}>
                           {['createProduct', 'listProduct'].map((subItem) => (
                              <div key={subItem}>
                                 <button
                                    onClick={() => toggleSubMenu(subItem)}
                                    className={`w-full flex items-center gap-2 p-2 rounded-md text-sm transition-colors ${activeSubMenu === subItem
                                       ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                                       : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'}`}
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
                                                ? 'text-purple-600 dark:text-purple-400 font-bold' 
                                                   : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                                }`}
                                          >
                                             <span className="mr-2">•</span> {item}
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
                        className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2.5 rounded-md ${activeMenu === 'order'
                           ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                           : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700'} font-medium transition-colors group`}
                     >
                        <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                           <div className={`${activeMenu === 'order'
                              ? 'bg-blue-200 dark:bg-blue-900/30'
                              : 'bg-gray-100 dark:bg-gray-700'} ${sidebarOpen ? 'p-1.5' : 'p-2'} rounded text-blue-600 dark:text-blue-400`}>
                              <FaShoppingCart size={sidebarOpen ? 16 : 18} />
                           </div>
                           <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Order</span>
                        </div>
                        {sidebarOpen && (activeMenu === 'order' ? <FaAngleDown size={16} /> : <FaAngleRight size={16} />)}
                     </button>

                     <div className={`pl-11 space-y-1 mt-1 ${activeMenu === 'order' && sidebarOpen ? 'block' : 'hidden'}`}>
                        {['newOrders', 'processingOrders', 'completedOrders', 'cancelledOrders'].map((item) => (
                           <div
                              key={item}
                              onClick={() => setActiveItem(item)}
                              className={`flex items-center gap-2 p-2 rounded-md text-sm cursor-pointer ${activeItem === item
                                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
                                 }`}
                           >
                              <span className="mr-2">•</span>
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
