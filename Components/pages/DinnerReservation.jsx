import React from 'react';
import Image from "next/image";
import Dal from '../../public/dal.png';

const DinnerReservation = () => {
  return (
    <div className="relative  min-h-[520px] px-6 py-16 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden">
      
      {/* Content */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left flex flex-col items-center md:items-start">
        <div className="mb-10 md:mb-0 max-w-xl w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Do You Have Any Dinner <br /> Plan Today? 
            <br className='hidden md:block'/>
            <span className="text-yellow-400">Reserve Your Table</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto md:mx-0">
            "Make online reservations, read restaurant reviews from diners, and earn points towards free meals. OpenTable is a real-time online reservation."
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-7 py-3 rounded-full shadow hover:scale-105 active:scale-95 transition-all text-lg">
            Make Reservation
          </button>
        </div>
      </div>

      {/* Dal Image with NO halo */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mb-10 md:mb-0">
        <Image
          src={Dal}
          alt="Dal Dish"
          width={320}
          height={320}
          className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain rounded-xl "
          priority
        />
      </div>
    </div>
  );
};

export default DinnerReservation;
