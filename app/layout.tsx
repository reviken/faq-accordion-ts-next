import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import favicon from "@/assets/images/favicon-32x32.png";
import background from "@/assets/images/background-pattern-desktop.svg";
import Image from "next/image";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAQ accordion",
  description: "Frontend Mentor exercise",
  icons: favicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased w-screen h-screen grid items-center justify-items-center bg-purple-100`}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {children}
      </body>
    </html>
  );
}
