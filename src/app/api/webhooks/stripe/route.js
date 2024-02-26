import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      `${process.env.STRIPE_WEBHOOK_SECRET}`,
    );
  } catch (err) {
    return new Response(`Webhook Error: ${err}`, { status: 400 });
  }

  return new Response(event.data.object, { status: 200 });
}
