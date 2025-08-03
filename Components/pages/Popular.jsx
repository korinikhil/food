import React from 'react'
import ProductCard from './ProductCard';


// import ProductCard from './ProductCard'

const Popular = () => {
    const popularDishes = [
        {
            name: "Fresh Kiwi Juice",
            desc: "Fresh, colorful mix of exotic seasonal fruits.",
            price: "₹120",
            image: '/Dal.png',
        },

        {
            name: "Fresh Kiwi Juice",
            desc: "Fresh, colorful mix of exotic seasonal fruits.",
            price: "₹120",
            image: '/Dal.png',
        },

        {
            name: "Fresh Kiwi Juice",
            desc: "Fresh, colorful mix of exotic seasonal fruits.",
            price: "₹120",
            image: '/Dal.png',
        },
        {
            name: "Fresh Kiwi Juice",
            desc: "Fresh, colorful mix of exotic seasonal fruits.",
            price: "₹120",
            image: '/Dal.png',
        },
    ]
    return (
        <>
            <div className="min-h-64 py-20 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {popularDishes.map((dish, i) => (
                        <ProductCard
                            key={i}
                            name={dish.name}
                            desc={dish.desc}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Popular
