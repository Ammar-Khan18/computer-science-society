// "use server";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material";

export const metadata: Metadata = {
  title: "IBA Computer Science Society",
  description: "Computer Science Society",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const theme = createTheme({
  //   palette: {
  //     mode: 'light',
  //   },
  // });
  return (
    <html lang="en">
      <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
      <body className="page">
        {/* <ThemeProvider theme={theme}> */}
          <Navbar />
          {children}
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html >
  );
}
