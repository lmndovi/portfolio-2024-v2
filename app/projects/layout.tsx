import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-5">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
