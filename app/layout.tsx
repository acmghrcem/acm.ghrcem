import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GHRCEM ACM: Welcome to ACM Student Chapter",
  description: "Association for Computing Machinery at GH Raisoni College of Engineering and Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative  bg-black wfull flex items-center justify-center">
        <Navbar />
        </div>
        {children}
        <Footer />
        </body>

    </html>
  );
}
