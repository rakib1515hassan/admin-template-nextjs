import './globals.css';

export const metadata = {
   title: 'Astha Admin Dashboard',
   description: 'Professional Admin panel using Next.js 15+',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="antialiased bg-gray-100 dark:bg-gray-900">{children}</body>
      </html>
   );
}
