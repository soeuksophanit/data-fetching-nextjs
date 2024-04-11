import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

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
      <body className={inter.className + " bg-gray-900"}>
        <header className="w-full px-[5%] left-[50%] translate-x-[-50%] z-[99] fixed flex items-center justify-between top-0 py-2">
          <Link href={"/"} className="flex gap-2  items-center font-bold">
            <span className="py-1 px-4 bg-yellow-500 rounded-sm text-[#393939]">
              New
            </span>
            <span className="text-yellow-500">Movie</span>
          </Link>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
