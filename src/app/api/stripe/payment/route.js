import { stripe } from "@/utils/stripe";

const ITEMS = [
  { priceInCents: 10000, name: "Something really cool that we dont have" },
  { priceInCents: 20000, name: "Arduino Kit" },
];

export const POST = async (req) => {
  const { items } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: items.map(({ id, quantity }) => {
      const item = ITEMS[id];

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.priceInCents,
        },
        quantity: quantity,
      };
    }),
    success_url: `${process.env.NEXTAUTH_URL}/payment/success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/payment/cancel`,
  });

  return Response.json({ url: session.url });
};
