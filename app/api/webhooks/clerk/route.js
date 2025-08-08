// /pages/api/webhooks/clerk.js (ya /app/api/webhooks/clerk/route.js for app dir)
import { NextResponse } from "next/server";
import { clerkClient, Webhook } from "@clerk/nextjs/server";

const signingSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

export async function POST(request) {
  const body = await request.text();
  const signature = request.headers.get("x-clerk-signature");

  let event;

  try {
    event = Webhook.verify(body, signature, signingSecret);
  } catch (err) {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // Check for user.created event
  if (event.type === "user.created") {
    const userId = event.data.id;

    // Update user role to 'user' in public metadata
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "user",
      },
    });

    return new NextResponse("User role set to user", { status: 200 });
  }

  return new NextResponse("Event ignored", { status: 200 });
}
