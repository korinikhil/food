import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Customersay = () => {
  return (
    <>
        <div className="bg-black px-6 md:px-20 py-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                <h1 className="text-3xl text-white md:text-4xl font-extrabold mb-10 text-center md:text-left"> What Our Customer says ?</h1>
                <div className="flex justify-center md:justify-end mt-6 md:mt-0 gap-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400 text-white hover:bg-yellow-400 hover:text-black transition"><FaArrowLeft size={18}/></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition"><FaArrowRight size={18}/></button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                {[1,2].map((_,i) => (
                    <div key={i} className="bg-white text-black rounded-xl p-6 w-[220px] md:w-[560px]">
                        <p className="text-sm mb-4">
                            “This place is great! Atmosphere is chill and cool but the staff is also
                            really friendly. They know what they're doing and what they’re talking
                            about, and you can tell making the customers happy is their main priority.”
                        </p>
                        <div className="flex items-center mt-4">
                            <div className="w-6 h-6 bg-blue-400 rounded-full mr-2"></div>
                            <span className="text-sm font-medium">John</span>              
                        </div>
                    </div>
                ))}
            </div>
            
        </div>      
    </>
  )
}

export default Customersay
