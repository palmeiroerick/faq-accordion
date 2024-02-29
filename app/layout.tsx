import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAQ Accordion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} flex h-screen w-screen items-center justify-center bg-mobile bg-contain bg-top bg-no-repeat lg:bg-desktop `}
      >
        {children}
      </body>
    </html>
  );
}
