import { Geist, Geist_Mono } from "next/font/google";
import { Inter as inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// Declare font loaders at the module scope
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interFont = inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "eSpice",
  description: "DPS Noida's tech club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#F6F6F6]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
