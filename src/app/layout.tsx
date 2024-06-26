import type { Metadata } from "next";
import "./globals.css";
import DarkMode from "@/components/darkMode";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Climapp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 dark:bg-gray-800 text-gray-950 dark:text-gray-50`}>
        <Navbar />
        {children}
        <DarkMode />
      </body>
    </html>
  );
}
