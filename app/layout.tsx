import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IBA Computer Science Society",
  description: "Computer Science Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
      <body className="page">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
