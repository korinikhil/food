import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../../public/Logo.png'; // Make sure the logo path is correct

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-8 mb-8">
          {/* Logo + Subscribe */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-full border-2 border-white h-20 bg-[#2C2C2C] left-0 mr-4 relative">
                <Image
                  src={Logo}
                  alt="Mumma's Cafe Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Subscribe */}
            <div className="mt-8 max-w-sm">
              <h3 className="text-xl font-semibold mb-2">Subscribe Our Newsletter</h3>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 border border-gray-600 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                />
                <button className="bg-orange-500 text-white p-2 rounded-r-md">
                  <FaArrowRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Service Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Online Order</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Pre-Reservation</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">24/7 Services</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Foodie Place</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400">Call us:</span>{' '}
                  <a href="tel:+919999999999" className="hover:text-orange-500">+91 99999 99999</a>
                </li>
                <li>
                  <span className="text-gray-400">Email:</span>{' '}
                  <a href="mailto:support@mummascafe.com" className="hover:text-orange-500">support@mummascafe.com</a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>All Rights Reserved © Mumma's Cafe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
