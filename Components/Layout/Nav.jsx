"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // For cart & user icons

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact US", href: "/contact" },
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
        {/* --- Logo section / Mumma's --- */}
        <div className="flex items-center min-w-[180px]">
          {/* Icon, you can use an <img> instead */}
          <div className="mr-2 flex-shrink-0">
            {/* Example SVG icon - replace with your logo! */}
            <svg width={42} height={42} viewBox="0 0 48 48" fill="none">
              {/* Place a simple cook/woman/chef icon here; placeholder below */}
              <circle cx="24" cy="24" r="22" fill="#fff" />
              <text x="13" y="30" fontSize="22" fill="#F43F5E" fontWeight="bold">👩‍🍳</text>
            </svg>
          </div>
          <div>
            <div className="text-[1.8rem] leading-none font-bold font-sans tracking-tight">
              <span className="px-2 py-1 bg-black rounded text-white mr-2">Mumma's</span>
            </div>
            <div className="text-base font-semibold text-[#E6E6E6] -mt-1 ml-1">
              Healthy Kitchen
            </div>
          </div>
        </div>

        {/* --- Desktop nav --- */}
        <ul className="hidden md:flex items-center space-x-6 ml-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-white text-lg font-medium hover:text-pink-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* --- Right icons --- */}
        <div className="hidden md:flex items-center space-x-4 ml-6">
          <button className="hover:text-pink-400 p-1">
            <FaShoppingCart className="w-6 h-6" />
          </button>
          <button className="hover:text-pink-400 p-1">
            <FaUser className="w-6 h-6" />
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
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* --- Mobile menu --- */}
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
            {/* Mini logo for mobile */}
            <span className="text-2xl px-2 py-1 bg-black rounded text-white font-bold mr-2">Mumma's</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-400 hover:text-pink-400"
            aria-label="close menu"
          >
            {/* Close SVG */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2 p-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-white text-lg py-2 px-2 rounded hover:bg-pink-600/20 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="flex gap-4 mt-4">
            <button className="hover:text-pink-400">
              <FaShoppingCart className="w-7 h-7" />
            </button>
            <button className="hover:text-pink-400">
              <FaUser className="w-7 h-7" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
