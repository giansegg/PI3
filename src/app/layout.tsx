"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  return (
    <AuthProvider>
      <html lang="en" className={isDashboard ? "h-full" : ""}>
        <body
          className={`${inter.className} ${
            isDashboard ? "h-full m-0 p-0" : ""
          }`}
        >
          {!isDashboard && <Navbar />}
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
