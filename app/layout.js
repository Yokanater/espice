import { Geist, Geist_Mono } from "next/font/google";
import { Inter as inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

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
      <body className={`${interFont.latin} antialiased bg-[#F6F6F6]`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
