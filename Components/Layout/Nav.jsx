"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import Logo from '../../public/Logo.png';
import Image from "next/image";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#2C2C2C] sticky top-0 z-50 text-white transition-shadow duration-300 ${
        hasShadow ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-6 py-2">
        {/* Logo section */}
        <div className="flex items-center min-w-[180px]">
          <div className="mr-2 flex-shrink-0">
            <Image
              src={Logo}
              alt="Mumma's Logo"
              className=" w-50 rounded-full object-cover bg-white"
            />
          </div>
         
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex text-xl items-center space-x-6 ml-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-white text-lg font-medium hover:text-yellow-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right icons with updated buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-6">
          <button className="w-12 h-12 flex items-center justify-center bg-white hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow transition">
            <LuShoppingCart className="text-xl" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-white hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow transition">
            <FaSignOutAlt className="text-xl" />
          </button>
        </div>

        {/* Hamburger menu (mobile/tablet) */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[100] transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#222222] shadow-lg z-[101] transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Mumma's Logo"
              className="w-30 rounded-full object-cover bg-white"
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-400 hover:text-yellow-400"
            aria-label="close menu"
          >
            {/* Close icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2 p-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-white text-lg py-2 px-2 rounded hover:bg-yellow-600/20 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="flex gap-4 mt-4">
            <button className="w-12 h-12 flex items-center justify-center bg-white hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow transition">
              <LuShoppingCart className="text-xl" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-white hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow transition">
              <FaSignOutAlt className="text-xl" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
