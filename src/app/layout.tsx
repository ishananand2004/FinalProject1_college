import { Footer, FooterProps } from "@/components/patterns/Footer";
import { Navbar } from "@/components/patterns/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TanstackProviders from "./providers/TanstackProvider";
import { GoogleTagManager } from "@next/third-parties/google";

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

const navigationItems: FooterProps["navigationItems"] = [
  {
    title: "Need Help?",
    items: [
      {
        title: "Home",
        href: "/",
        // icon: Home, // Add the icon
      },
      {
        title: "Contact Us",
        href: "/contacts",
        // icon: Mail, // Add the icon
      },
      {
        title: "Terms and Conditions",
        href: "/terms-and-conditions",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
    ],
  },
  {
    title: "Get In Touch",
    description: "B7 1st Floor, Sector II, Gautam Buddha Nagar, Noida 201301",
    items: [
      {
        title: "admin@caremedico.com",
        href: "mailto:admin@caremedico.com",
        icon: { provider: "lucide", name: "Mail" }, // Add the icon
      },
      {
        title: "+918130600627",
        href: "tel:+918130600627",
        icon: { provider: "lucide", name: "Phone" }, // Add the icon
      },
      {
        title: "+918130600628",
        href: "tel:+918130600628",
        icon: { provider: "lucide", name: "Phone" }, // Add the icon
      },
    ],
  },
];

const footerData: FooterProps = {
  title: "Join the Community",
  description:
    "We are trusted by over 5000+ patients. Join us for full support.",
  navigationItems,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TQWBN5WH" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProviders>
          <>
            <Navbar />

            <div
              id="wrapper"
              className="fixed top-0 right-0 bottom-0 left-0 overflow-auto flex flex-col justify-between bg-[#F6F7F9]"
            >
              <main className="">{children}</main>
              <Footer {...footerData} />
            </div>
          </>
        </TanstackProviders>
      </body>
    </html>
  );
}
