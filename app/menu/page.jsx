'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoStar } from 'react-icons/io5';
import { Search } from 'lucide-react';
import Dal from '../../public/dal.png';

// Tabs
const Menubtn = [
  "Morning Meals",
  "Salads & Bowls",
  "Grilled Platters",
  "Grilled Sandwich",
  "Snacks & Sides",
];

// Products
const allProducts = {
  "Morning Meals": [
    { name: "Oats Bowl", desc: "Healthy oats with dry fruits and honey.", price: "₹150", image: Dal },
    { name: "Boiled Egg Salad", desc: "High-protein breakfast plate.", price: "₹100", image: Dal },
  ],
  "Salads & Bowls": [
    { name: "Greek Salad", desc: "Fresh veggies with feta cheese.", price: "₹180", image: Dal },
    { name: "Fruit Bowl", desc: "Assorted seasonal fruits.", price: "₹120", image: Dal },
  ],
  "Grilled Platters": [
    { name: "Grilled Paneer", desc: "Spicy grilled paneer cubes.", price: "₹220", image: Dal },
    { name: "Chicken Platter", desc: "Protein-packed grilled chicken.", price: "₹250", image: Dal },
  ],
  "Grilled Sandwich": [
    { name: "Veg Sandwich", desc: "Stuffed with grilled veggies.", price: "₹140", image: Dal },
    { name: "Chicken Sandwich", desc: "Grilled chicken & sauces.", price: "₹180", image: Dal },
  ],
  "Snacks & Sides": [
    { name: "Protein Bar", desc: "Homemade peanut protein bar.", price: "₹90", image: Dal },
    { name: "Energy Balls", desc: "Date-based energy bites.", price: "₹110", image: Dal },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState(Menubtn[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = allProducts[activeTab].filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-12 px-4 md:px-16">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Menubtn.map((btn, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveTab(btn);
              setSearchTerm("");
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200 whitespace-nowrap ${
              activeTab === btn
                ? "bg-yellow-400 text-black shadow-lg"
                : "border-yellow-400 text-white hover:bg-yellow-400 hover:text-black"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-12 px-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-yellow-400 bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />
        </div>
      </div>

      {/* Product Cards */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white w-full max-w-sm mx-auto rounded-xl shadow-xl p-6 relative flex flex-col items-center"
            >
              <div className="w-24 h-24 absolute -top-12 left-1/2 transform -translate-x-1/2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={96}
                  height={96}
                  className="object-cover rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-20 text-center w-full">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

                <div className="flex justify-center text-yellow-400 text-lg my-1">
                  {[...Array(5)].map((_, i) => <IoStar key={i} />)}
                </div>

                <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">{product.desc}</p>

                <div className="flex items-center justify-between mt-6 px-4">
                  <p className="text-xl text-gray-800 font-bold">{product.price}</p>
                  <button className="border border-yellow-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-100 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
