import './globals.css';

export const metadata = {
   title: 'Astha Admin Dashboard',
   description: 'Professional Admin panel using Next.js 15+',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
