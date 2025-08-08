"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import React from 'react'
import { FaSearch } from "react-icons/fa";
import Popular from '@/Components/pages/Popular';
import Chef from '@/Components/pages/Chef';
import DinnerReservation from '@/Components/pages/DinnerReservation';
import Menu from './menu/page';
import Customersay from '@/Components/pages/Customer';

export default function AdminPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Redirect if user is logged and not admin
  useEffect(() => {
    if (!isLoaded) return; // Wait until user is loaded

    if (user && user.publicMetadata.role !== "admin") {
      router.replace("/");
    }

    if (!user) {
      // Not logged in -- no redirect, allow public content to be visible
    }
  }, [isLoaded, user, router]);

  // Show loading only while user data is loading
  if (!isLoaded) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <>
      {/* This part shows always, even if user not logged in */}
      <div className=" h-[650px] flex flex-col lg:flex-row items-center justify-between py-6 md:py-24 px-6">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl text-white md:text-6xl font-bold leading-tight">
            WE SERVE THE TEST <br /> YOU LOVE 😍
          </h1>
          <p className="mt-4 text-gray-300 max-w-lg mx-auto lg:mx-0">
            A cozy café serving fresh, organic, and healthy meals like salads, smoothie bowls, wraps, and juices in a warm, rustic, and welcoming vibe.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300">Explore Food</button>
            <button className="flex border gap-3 items-center border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300">
              <FaSearch />Search
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src='/fruits.png' alt="img " />
        </div>
      </div>

      {/* Popular and other common components show always */}
      <Popular />
      <Chef />
      <Menu />
      <DinnerReservation />
      <Customersay />

      {/* Only show admin-specific components or features if user is loaded and admin */}
      {(user && user.publicMetadata.role === "admin") && (
        <>
          {/* Admin-specific content or components here, if any */}
          {/* example: <AdminDashboard /> */}
        </>
      )}
    </>
  );
}
