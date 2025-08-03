import Image from "next/image";
import React from 'react'
import chef from '../../public/chef1.png'

const Chef = () => {
    return (
        <>
            <div className=" w-full h-[550px] px-6 py-16 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="relative">
                    <Image src={chef} className="w-full md:w-80 rounded-xl" />
                </div>

                <div className="text-center md:text-left max-w-xl space-y-6">
                    <h1 className=" text-white text-3xl md:text-4xl font-extrabold leading-tight">We Are More Than <br />Multiple Survice</h1>
                    <p className="text-gray-200 text-sm md:text-base italic"> "Our expert chefs craft every dish with fresh ingredients, rich flavors,
                        and a passion for healthy eating."</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-white font-medium">
                        <p>Online Order</p>
                        <p>Organized FoodiePlace</p>
                        <p>24/7 Service</p>
                        <p>Organized FoodiePlace</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chef
