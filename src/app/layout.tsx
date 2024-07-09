import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Academy",
  description: "Explore our diverse course offerings, including Music Theory, Composition, Instrument Mastery, Vocal Training, Music Production, and more. With a blend of traditional techniques and modern innovations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
       <div className="relative w-full flex justify-center items-center ">
       <Navbar/>
       </div>
        
        {children}
        
        </body>
    </html>
  );
}
