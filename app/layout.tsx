import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: side-effect import of CSS without declaration file
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOVA - Digital Sculpture Studio",
  description: "Immersive 3D portfolio experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}