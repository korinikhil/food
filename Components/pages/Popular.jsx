'use client';

import React from 'react';
import ProductCard from './ProductCard';
import dalImage from '../../public/dal.png'; // ✅ Image import

const Popular = () => {
  const popularDishes = [
    {
      id: 1,
      name: "Fresh Kiwi Juice",
      desc: "Fresh, colorful mix of exotic seasonal fruits.",
      price: "₹120",
      image: dalImage,
    },
    {
      id: 2,
      name: "Fresh Kiwi Juice",
      desc: "Fresh, colorful mix of exotic seasonal fruits.",
      price: "₹120",
      image: dalImage,
    },
    {
      id: 3,
      name: "Fresh Kiwi Juice",
      desc: "Fresh, colorful mix of exotic seasonal fruits.",
      price: "₹120",
      image: dalImage,
    },
    {
      id: 4,
      name: "Fresh Kiwi Juice",
      desc: "Fresh, colorful mix of exotic seasonal fruits.",
      price: "₹120",
      image: dalImage,
    },
  ];

  return (
    <section className="min-h-64 py-20 mt-28 px-4 md:px-8 bg-gray-900">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-18">
        {popularDishes.map((dish) => (
          <ProductCard
            key={dish.id}
            name={dish.name}
            desc={dish.desc}
            price={dish.price}
            image={dish.image}
            tag="Popular"
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
