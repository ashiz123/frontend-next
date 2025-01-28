"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Park & Go</Link>
        </div>
        <div className="hidden md:flex justify-center flex-grow">
          <div className="space-x-6">
            <Link href="/" className="text-white hover:text-blue-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-200">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-200">
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="block text-white hover:text-blue-200 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-blue-200 py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-blue-200 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
