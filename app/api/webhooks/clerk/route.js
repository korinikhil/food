import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { Webhook } from "svix";

// CLERK_WEBHOOK_SIGNING_SECRET environment variable
const svixSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

export async function POST(request) {
  const payload = await request.text();
  const headers = request.headers;

  const svixId = headers.get("svix-id");
  const svixTimestamp = headers.get("svix-timestamp");
  const svixSignature = headers.get("svix-signature");

  // Basic checks for headers & secret
  if (!svixId || !svixTimestamp || !svixSignature || !svixSecret) {
    return NextResponse.json({ error: "Missing Svix headers or secret" }, { status: 400 });
  }

  try {
    // Signature verify
    const wh = new Webhook(svixSecret);
    const body = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });

    // Event: user.created
    if (body.type === "user.created") {
      const userId = body.data.id;
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: { role: "user" },
      });
      return NextResponse.json({ message: "User role set to user" });
    }

    return NextResponse.json({ message: "Event ignored" });
  } catch (error) {
    // For debugging, you may log error to Vercel logs!
    // console.log("Webhook error:", error);
    return NextResponse.json({ error: "Invalid signature or error" }, { status: 400 });
  }
}
