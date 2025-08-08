// app/api/set-role/route.js

import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req) {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { role } = await req.json(); // "admin" ya "user"

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { role },
    });

    return new Response("Role set successfully");
  } catch (error) {
    console.error(error);
    return new Response("Failed to set role", { status: 500 });
  }
}
