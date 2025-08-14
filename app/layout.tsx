import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";


const bartkey = localFont({
  src: "./Fonts/BARTKEY.ttf",
  variable: "--font-title",
  display: "swap",
});

const brokenHome = localFont({
  src: "./Fonts/Broken Home Regular.otf",
  variable: "--font-heading",
  display: "swap",
});

const lemonMilk = localFont({
  src: "./Fonts/LEMONMILK-Light.otf",
  variable: "--font-text",
  display: "swap",
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
          ${bartkey.variable}
          ${brokenHome.variable}
          ${lemonMilk.variable}
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
