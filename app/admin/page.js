// app/admin/page.jsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId, sessionClaims } = await auth();

  const role = sessionClaims?.publicMetadata?.role;

  // 🌟 Wait until user is actually loaded and role is missing or wrong
  if (!userId || (role && role !== "admin")) {
    redirect("/");
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">Welcome to Admin Dashboard</h1>
    </div>
  );
}
