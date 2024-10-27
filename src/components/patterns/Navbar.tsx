"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Globe, Instagram, MenuIcon, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Knowledge", href: "/knowledge" },
  { title: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logos/caremedico-logo-lg.png"
            alt="CareMedico Desktop Logo"
            className="hidden lg:block h-8 mr-2"
            width="110"
            height={"59"}
          />
          {/* Mobile Logo */}
          <Image
            src="/images/logos/caremedico-logo.png"
            alt="CareMedico Mobile Logo"
            className="block lg:hidden h-8 mr-2"
            width="60"
            height="60"
          />
          {/* <span className="text-lg font-bold text-red-500">Care</span>
          <span className="text-lg font-bold text-gray-800">Medico</span> */}
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </Link>
          <Link href="/languages" target="_blank">
            <Globe className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full p-4">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              {item.title}
            </Link>
          ))}
          <div className="flex space-x-4 mt-4">
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-800" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-800" />
            </Link>
            <Link href="/languages" target="_blank">
              <Globe className="w-5 h-5 text-gray-600 hover:text-gray-800" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-800" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
