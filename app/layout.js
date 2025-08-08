import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/Components/Layout/Nav';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/Components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `Mumma's Healthy Kitchen`,
  description: 'Healthy and homemade food delivered to your doorstep.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* Yahan par Tailwind ka background color class use kiya gaya hai, jaise bg-[#faf7ee] */}
        <body className={`${inter.className} bg-[#2C2C2C]`} suppressHydrationWarning>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
