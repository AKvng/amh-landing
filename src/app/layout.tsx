import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const LatoSans = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMH-vendors",
  description:
    "Take control of your ecommerce success with Amahoro. Our comprehensive service empowers sellers with seamless inventory management, real-time order tracking, and an intuitive dashboard designed for effortless monitoring. Watch as your product listings come to life on your sales platform, connecting you to eager buyers and expanding your reach",
  keywords: [
    "ecommerce",
    "inventory management",
    "real-time order tracking",
    "East-Africa",
    "Burundi",
  ],
  icons: {
    icon: "/LOGO-COLORED.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LatoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
