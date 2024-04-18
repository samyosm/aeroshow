import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import "./globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aeroshow",
  description: "Look up the beautiful sky.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
