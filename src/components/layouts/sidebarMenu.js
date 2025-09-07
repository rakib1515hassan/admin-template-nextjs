import {
   FaHome,
   FaChartBar,
   FaShoppingCart,
   FaFolder,
   FaUser,
   FaTools,
   FaDotCircle,
} from 'react-icons/fa';

export const sidebarMenu = [
   // Dropdown with level 2 + level 3
   {
      id: 'dashboard',
      title: 'Dashboards',
      icon: FaHome,
      children: [
         {
            id: 'analytics',
            title: 'Analytics',
            icon: FaFolder,
            children: [
               { id: 'inbound', title: 'Inbound Courier Service', path: '#', icon: FaDotCircle },
               { id: 'outbound', title: 'Outbound Courier Service', path: '#', icon: FaDotCircle },
            ],
         },
         {
            id: 'ecommerce',
            title: 'E-Commerce',
            icon: FaFolder,
            path: '#', // Level-2 only
         },
         {
            id: 'crm',
            title: 'CRM',
            icon: FaFolder,
            children: [
               { id: 'contacts', title: 'Contacts', path: '#', icon: FaDotCircle },
               { id: 'leads', title: 'Leads', path: '#', icon: FaDotCircle },
            ],
         },
      ],
   },

   // Single menu (no dropdown)
   {
      id: 'profile',
      title: 'My Profile',
      icon: FaUser,
      path: '#',
   },

   // Dropdown (Product)
   {
      id: 'product',
      title: 'Product',
      icon: FaChartBar,
      children: [
         {
            id: 'createProduct',
            title: 'Create',
            icon: FaFolder,
            children: [
               { id: 'single', title: 'Single Product', path: '#', icon: FaDotCircle },
               { id: 'bulk', title: 'Bulk Products', path: '#', icon: FaDotCircle },
            ],
         },
         {
            id: 'listProduct',
            title: 'List',
            icon: FaFolder,
            children: [
               { id: 'all', title: 'All Products', path: '#', icon: FaDotCircle },
               { id: 'categories', title: 'Categories', path: '#', icon: FaDotCircle },
            ],
         },
      ],
   },

   // Mixed Example
   {
      id: 'settings',
      title: 'Settings',
      icon: FaTools,
      children: [
         { id: 'general', title: 'General', path: '#', icon: FaFolder }, // level-2 only
         {
            id: 'userManagement',
            title: 'User Management',
            icon: FaFolder,
            children: [
               { id: 'roles', title: 'Roles', path: '#', icon: FaDotCircle },
               { id: 'permissions', title: 'Permissions', path: '#', icon: FaDotCircle },
            ],
         },
      ],
   },
];
