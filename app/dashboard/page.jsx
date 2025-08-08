"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardRedirect = () => {
  const { isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const role = user?.publicMetadata?.role;

    if (role === "admin") {
      router.push("/admin");
    } else {
      router.push("/user");
    }
  }, [isLoaded]);

  return <p>Redirecting...</p>;
};

export default DashboardRedirect;
