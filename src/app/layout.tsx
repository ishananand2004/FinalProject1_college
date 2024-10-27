import { Navbar } from "@/components/patterns/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Caremedico",
  description:
    "TRUSTED MEDICAL PARTNER IN INDIA Your Health Our Priority Guiding You Every Step Need Help? Lets Talk! WHAT WE DO? Our unique process makes your Medical Journey Smooth. Visa Support Assistance with visa applications and documentation to ensure a smooth travel process Local Accomodation Arrangement of comfortable and convenient lodging near medical facilities. Treatment Coordination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main className="fixed top-0 right-0 bottom-0 left-0 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
