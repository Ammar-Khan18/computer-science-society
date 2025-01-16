import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Making temporary the pro battle page the main page
import Page from "@/app/pro-battle/page";

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
        {/* {children} */}
        <Page />
        <Footer />
      </body>
    </html>
  );
}
