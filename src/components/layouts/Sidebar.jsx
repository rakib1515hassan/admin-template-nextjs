'use client';
import { useState } from 'react';
import {
   FaHome,
   FaUsers,
   FaChartBar,
   FaCog,
   FaClipboardList,
   FaShoppingCart,
   FaEnvelope,
   FaSignOutAlt,
   FaAngleDown,
   FaAngleRight,
} from 'react-icons/fa';

export default function Sidebar({ open: sidebarOpen, setOpen: setSidebarOpen }) {
   console.log('Sidebar rendered with open state:', sidebarOpen);
   const [activeMenu, setActiveMenu] = useState(null);
   const [activeSubMenu, setActiveSubMenu] = useState(null);

   const toggleMenu = (menu) => {
      setActiveMenu(activeMenu === menu ? null : menu);
      setActiveSubMenu(null); // Reset submenu when toggling main menu
   };

   const toggleSubMenu = (submenu) => {
      setActiveSubMenu(activeSubMenu === submenu ? null : submenu);
   };

   return (
      <>
         {/* Overlay for mobile */}
         <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
               }`}
            onClick={() => setSidebarOpen(false)}
         ></div>

         <aside
            className={`fixed z-30 top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-xl transform transition-transform
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:${sidebarOpen ? 'w-64' : 'w-20'} md:translate-x-0 md:static md:flex md:flex-col border-r border-gray-200 dark:border-gray-700
        `}
         >
            {/* Logo / Brand */}
            <div className="flex items-center justify-center h-16 shadow-sm border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-gray-800 dark:to-gray-900">
               <div className={`flex items-center ${sidebarOpen ? 'gap-2' : 'justify-center'}`}>
                  <div className="bg-white dark:bg-gray-800 p-1.5 rounded-lg shadow-md">
                     <img
                        src="/logo.svg"
                        alt="Astha Logo"
                        className="h-7 w-7"
                        onError={(e) => {
                           e.target.onerror = null;
                           e.target.src = 'https://via.placeholder.com/28?text=A';
                        }}
                     />
                  </div>
                  <h1 className={`text-xl font-bold text-white ${!sidebarOpen && 'md:hidden'}`}>
                     Astha Admin
                  </h1>
               </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
               <nav className="flex flex-col p-3 flex-grow space-y-6">
                  {/* DASHBOARDS Section */}
                  <div className="space-y-1">
                     <h3
                        className={`text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 ${!sidebarOpen && 'md:hidden'}`}
                     >
                        DASHBOARDS
                     </h3>
                     {/* Dashboards Dropdown */}
                     <div className="mb-1">
                        <button
                           onClick={() => toggleMenu('dashboard')}
                           className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2.5 rounded-lg ${activeMenu === 'dashboard' ? 'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400' : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700'} font-medium transition-colors group`}
                        >
                           <div
                              className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}
                           >
                              <div
                                 className={`${activeMenu === 'dashboard' ? 'bg-cyan-200 dark:bg-cyan-900/30' : 'bg-gray-100 dark:bg-gray-700'} ${sidebarOpen ? 'p-1.5' : 'p-2'} rounded text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-gray-600 transition-colors flex items-center justify-center`}
                              >
                                 <FaHome size={sidebarOpen ? 16 : 18} />
                              </div>
                              <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Dashboards</span>
                           </div>
                           {sidebarOpen &&
                              (activeMenu === 'dashboard' ? (
                                 <FaAngleDown size={16} />
                              ) : (
                                 <FaAngleRight size={16} />
                              ))}
                        </button>

                        {/* Dashboards dropdown items */}
                        <div
                           className={`pl-11 space-y-1 mt-1 ${activeMenu === 'dashboard' && sidebarOpen ? 'block' : 'hidden'}`}
                        >
                           <a
                              href="#"
                              className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                           >
                              Analytics
                           </a>
                           <a
                              href="#"
                              className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                           >
                              E-commerce
                           </a>
                           <a
                              href="#"
                              className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                           >
                              CRM
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* WEB APPS Section */}
                  <div className="space-y-1">
                     <h3
                        className={`text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 ${!sidebarOpen && 'md:hidden'}`}
                     >
                        WEB APPS
                     </h3>
                     {/* Product Dropdown */}
                     <div className="mb-1">
                        <button
                           onClick={() => toggleMenu('product')}
                           className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2.5 rounded-lg ${activeMenu === 'product' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700'} font-medium transition-colors group`}
                        >
                           <div
                              className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}
                           >
                              <div
                                 className={`${activeMenu === 'product' ? 'bg-purple-200 dark:bg-purple-900/30' : 'bg-gray-100 dark:bg-gray-700'} ${sidebarOpen ? 'p-1.5' : 'p-2'} rounded text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-gray-600 transition-colors flex items-center justify-center`}
                              >
                                 <FaChartBar size={sidebarOpen ? 16 : 18} />
                              </div>
                              <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Product</span>
                           </div>
                           {sidebarOpen &&
                              (activeMenu === 'product' ? (
                                 <FaAngleDown size={16} />
                              ) : (
                                 <FaAngleRight size={16} />
                              ))}
                        </button>

                        {/* Product dropdown items */}
                        <div
                           className={`pl-11 space-y-1 mt-1 ${activeMenu === 'product' && sidebarOpen ? 'block' : 'hidden'}`}
                        >
                           {/* Create Product - with submenu */}
                           <div>
                              <button
                                 onClick={() => toggleSubMenu('createProduct')}
                                 className="w-full flex items-center justify-between p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                              >
                                 <span>Create</span>
                                 {activeSubMenu === 'createProduct' ? (
                                    <FaAngleDown size={12} />
                                 ) : (
                                    <FaAngleRight size={12} />
                                 )}
                              </button>

                              {/* Create Product submenu items */}
                              <div
                                 className={`pl-4 space-y-1 mt-1 ${activeSubMenu === 'createProduct' ? 'block' : 'hidden'}`}
                              >
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    Single Product
                                 </a>
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    Bulk Products
                                 </a>
                              </div>
                           </div>

                           {/* List Product - with submenu */}
                           <div>
                              <button
                                 onClick={() => toggleSubMenu('listProduct')}
                                 className="w-full flex items-center justify-between p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                              >
                                 <span>List</span>
                                 {activeSubMenu === 'listProduct' ? (
                                    <FaAngleDown size={12} />
                                 ) : (
                                    <FaAngleRight size={12} />
                                 )}
                              </button>

                              {/* List Product submenu items */}
                              <div
                                 className={`pl-4 space-y-1 mt-1 ${activeSubMenu === 'listProduct' ? 'block' : 'hidden'}`}
                              >
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    All Products
                                 </a>
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    Categories
                                 </a>
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    Tags
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>



                     {/* Order Dropdown */}
                     <div className="mb-1">
                        <button
                           onClick={() => toggleMenu('order')}
                           className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2.5 rounded-lg ${activeMenu === 'order' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700'} font-medium transition-colors group`}
                        >
                           <div
                              className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}
                           >
                              <div
                                 className={`${activeMenu === 'order' ? 'bg-blue-200 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'} ${sidebarOpen ? 'p-1.5' : 'p-2'} rounded text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-colors flex items-center justify-center`}
                              >
                                 <FaShoppingCart size={sidebarOpen ? 16 : 18} />
                              </div>
                              <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Order</span>
                           </div>
                           {sidebarOpen &&
                              (activeMenu === 'order' ? (
                                 <FaAngleDown size={16} />
                              ) : (
                                 <FaAngleRight size={16} />
                              ))}
                        </button>

                        {/* Order dropdown items */}
                        <div
                           className={`pl-11 space-y-1 mt-1 ${activeMenu === 'order' && sidebarOpen ? 'block' : 'hidden'}`}
                        >
                           <a
                              href="#"
                              className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                           >
                              New Orders
                           </a>
                           <a
                              href="#"
                              className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                           >
                              Processing
                           </a>
                           <a
                              href="#"
                              className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                           >
                              Completed
                           </a>
                           <a
                              href="#"
                              className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                           >
                              Cancelled
                           </a>
                        </div>
                     </div>


                     {/* Sell Dropdown */}
                     <div className="mb-1">
                        <button
                           onClick={() => toggleMenu('sell')}
                           className={`w-full flex items-center justify-between ${sidebarOpen ? 'gap-3' : ''} p-2.5 rounded-lg ${activeMenu === 'sell' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700'} font-medium transition-colors group`}
                        >
                           <div
                              className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}
                           >
                              <div
                                 className={`${activeMenu === 'sell' ? 'bg-green-200 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-700'} ${sidebarOpen ? 'p-1.5' : 'p-2'} rounded text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-gray-600 transition-colors flex items-center justify-center`}
                              >
                                 <FaUsers size={sidebarOpen ? 16 : 18} />
                              </div>
                              <span className={`${!sidebarOpen && 'md:hidden'} text-base`}>Sell</span>
                           </div>
                           {sidebarOpen &&
                              (activeMenu === 'sell' ? (
                                 <FaAngleDown size={16} />
                              ) : (
                                 <FaAngleRight size={16} />
                              ))}
                        </button>

                        {/* Sell dropdown items */}
                        <div
                           className={`pl-11 space-y-1 mt-1 ${activeMenu === 'sell' && sidebarOpen ? 'block' : 'hidden'}`}
                        >
                           {/* POS submenu */}
                           <div>
                              <button
                                 onClick={() => toggleSubMenu('pos')}
                                 className="w-full flex items-center justify-between p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                              >
                                 <span>POS</span>
                                 {activeSubMenu === 'pos' ? (
                                    <FaAngleDown size={12} />
                                 ) : (
                                    <FaAngleRight size={12} />
                                 )}
                              </button>

                              {/* POS submenu items */}
                              <div
                                 className={`pl-4 space-y-1 mt-1 ${activeSubMenu === 'pos' ? 'block' : 'hidden'}`}
                              >
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    New Sale
                                 </a>
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    Sales History
                                 </a>
                              </div>
                           </div>

                           {/* Reports submenu */}
                           <div>
                              <button
                                 onClick={() => toggleSubMenu('reports')}
                                 className="w-full flex items-center justify-between p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                              >
                                 <span>Reports</span>
                                 {activeSubMenu === 'reports' ? (
                                    <FaAngleDown size={12} />
                                 ) : (
                                    <FaAngleRight size={12} />
                                 )}
                              </button>

                              {/* Reports submenu items */}
                              <div
                                 className={`pl-4 space-y-1 mt-1 ${activeSubMenu === 'reports' ? 'block' : 'hidden'}`}
                              >
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    Daily Sales
                                 </a>
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    Monthly Sales
                                 </a>
                                 <a
                                    href="#"
                                    className="block p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm transition-colors"
                                 >
                                    Product Performance
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </nav>
            </div>
         </aside>
      </>
   );
}
