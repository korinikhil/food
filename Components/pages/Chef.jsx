import Image from "next/image";
import React from 'react';
import chef from '../../public/chef1.png';

const Chef = () => {
    return (
        <div className="w-full px-6 py-12 md:px-20 bg-[#1a1a1a]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Chef Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image 
                        src={chef} 
                        alt="CHEF IMG" 
                        className="rounded-xl object-cover"
                        width={320} 
                        height={400} 
                        priority 
                    />
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left max-w-xl space-y-6">
                    <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
                        We Are More Than <br />Multiple Service
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base italic">
                        "Our expert chefs craft every dish with fresh ingredients, rich flavors, and a passion for healthy eating."
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-white font-medium">
                        <p>Online Order</p>
                        <p>Organized Food Place</p>
                        <p>24/7 Service</p>
                        <p>Healthy Ingredients</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;
