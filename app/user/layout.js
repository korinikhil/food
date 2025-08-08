// app/user/layout.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function UserLayout({ children }) {
  const { userId, sessionClaims } = auth();

  // Role check
  const role = sessionClaims?.publicMetadata?.role;

  if (!userId || role !== "user") {
    redirect("/"); // not authorized
  }

  return (
    <section>
      {children}
    </section>
  );
}
