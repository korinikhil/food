// /app/api/webhooks/clerk/route.js
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { Webhook } from "svix";

// IMPORTANT: Use your Clerk Svix secret (not the API key)
const svixSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

export async function POST(request) {
  // Raw payload needed for signature verification
  const payload = await request.text();
  const headers = request.headers;

  // Get signature headers
  const svixId = headers.get("svix-id");
  const svixTimestamp = headers.get("svix-timestamp");
  const svixSignature = headers.get("svix-signature");

  // Only verify if all headers exist
  if (!svixId || !svixTimestamp || !svixSignature || !svixSecret) {
    return NextResponse.json({ error: "Missing Svix headers or secret" }, { status: 400 });
  }

  // Webhook signature verification
  try {
    const wh = new Webhook(svixSecret);
    const body = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });

    // Only handle user.created event
    if (body.type === "user.created") {
      const userId = body.data.id;
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: { role: "user" }
      });
      return NextResponse.json({ message: "User role set to user" });
    }

    return NextResponse.json({ message: "Event ignored" });
  } catch (err) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }
}
