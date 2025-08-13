import type { Metadata } from "next";
import { Delius, News_Cycle, Special_Elite } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";


const specialElite = Special_Elite({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400"],
});

const newsCycle = News_Cycle({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400"],
});

const delius = Delius({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "IBA Computer Science Society",
  description: "A community for computer science enthusiasts at IBA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${specialElite.variable}
          ${newsCycle.variable}
          ${delius.variable}
          antialiased
        `}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
