import React from "react";
import { IoStar } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import Image from "next/image";


const ProductCard = ({ image, name, price, desc, tag }) => {
  return (
    <div className="relative w-full max-w-xs mx-auto rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 my-14 px-4 pb-6 pt-20 flex flex-col items-center group overflow-visible">
      {/* Optional status badge */}
      {tag && (
        <span className="absolute left-5 top-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm z-20">
          {tag}
        </span>
      )}

      {/* Floating image */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <Image
          src={image}
          alt={name}
          width={112} // 28 * 4 (rem to px = 112px)
          height={112}
          className="object-cover rounded-full border-4 border-white shadow-md bg-white group-hover:scale-105 transition"
        />

      </div>

      {/* Card Content */}
      <div className="w-full text-center mt-2">
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
        <div className="flex justify-center items-center text-yellow-400 text-lg gap-1 my-1">
          {[...Array(5)].map((_, i) => (
            <IoStar key={i} />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2 mb-3 px-2 min-h-[40px]">{desc}</p>
      </div>

      {/* Price and Button */}
      <div className="w-full flex items-center justify-between px-2 mt-4">
        <span className="text-2xl font-bold text-gray-900">{price}</span>
        <button
          className="flex items-center gap-1 border border-yellow-400 bg-yellow-50 text-yellow-800 font-semibold py-2 px-5 rounded-full transition hover:bg-yellow-400 hover:text-black hover:shadow-lg"
        >
          <LuShoppingCart className="text-lg" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
