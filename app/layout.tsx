import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
  description: "Find the best movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"}>
        <header className="w-full z-10 sticky flex items-center justify-between top-0 py-6">
          <Navbar />
        </header>
        <main className="h-[200vh]">{children}</main>
      </body>
    </html>
  );
}
