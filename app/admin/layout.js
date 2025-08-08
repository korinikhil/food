import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const { userId, sessionClaims } = await auth();
  const role = sessionClaims?.publicMetadata?.role;



  return <>{children}</>;
}
