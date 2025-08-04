'use client';

import React from 'react';
import ProductCard from './ProductCard';

const Popular = () => {
    const dalImage = '../../public/dal.png'; //  Image ko variable me rakha

    const popularDishes = [
        {
            id: 1,
            name: "Fresh Kiwi Juice",
            desc: "Fresh, colorful mix of exotic seasonal fruits.",
            price: "₹120",
            image: dalImage, //  variable ka use
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
        <section className="min-h-64 py-20 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {popularDishes.map((dish) => (
                    <ProductCard
                        key={dish.id}
                        name={dish.name}
                        desc={dish.desc}
                        price={dish.price}
                        image={dish.image} // ✅ image variable pass ho raha hai
                    />
                ))}
            </div>
        </section>
    );
};

export default Popular;
