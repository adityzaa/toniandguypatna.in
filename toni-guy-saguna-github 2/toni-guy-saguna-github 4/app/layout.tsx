import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://toniandguypatna.in"),
  title: {
    default: "TONI&GUY RPS More Saguna Patna | Premium Salon in Patna",
    template: "%s | TONI&GUY RPS More Saguna Patna",
  },
  description:
    "Premium hair, beauty, bridal, color, keratin, nails, makeup and skin services at TONI&GUY RPS More Saguna Patna.",
  keywords: [
    "TONI&GUY RPS More Saguna Patna",
    "Salon in Patna",
    "Best Salon in Patna",
    "Hair Salon Saguna More",
    "Bridal Makeup Patna",
    "Hair Color Patna",
  ],
  openGraph: {
    title: "TONI&GUY RPS More Saguna Patna",
    description: "International hairdressing excellence at RPS More, Saguna, Patna.",
    url: "https://toniandguypatna.in",
    siteName: "TONI&GUY RPS More Saguna Patna",
    images: [{ url: "/images/og-salon.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TONI&GUY RPS More Saguna Patna",
    description: "Hair, beauty, bridal and color by experts in Patna.",
    images: ["/images/og-salon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
