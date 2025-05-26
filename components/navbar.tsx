"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-[#00D1C7] text-white p-2 rounded-full mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Workflow nodes */}
            <circle cx="6" cy="6" r="2" fill="currentColor"/>
            <circle cx="18" cy="6" r="2" fill="currentColor"/>
            <circle cx="6" cy="18" r="2" fill="currentColor"/>
            <circle cx="18" cy="18" r="2" fill="currentColor"/>
            <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
            
            {/* Flow arrows */}
            <path d="M8 6L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 6L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8 18L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 18L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            
            {/* AI brain pattern */}
            <path d="M10.5 10.5C10.5 10.5 11 9.5 12 10.5C13 9.5 13.5 10.5 13.5 10.5" 
                  stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M10.5 13.5C10.5 13.5 11 14.5 12 13.5C13 14.5 13.5 13.5 13.5 13.5" 
                  stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <Link href="/" className="text-2xl font-bold">
          AutoFlow
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-gray-800 hover:text-gray-600">
          Home
        </Link>
        <Link href="/about" className="text-gray-800 hover:text-gray-600">
          About Us
        </Link>
        <Link href="/benefits" className="text-gray-800 hover:text-gray-600">
          Benefits
        </Link>
        <Link href="/blog" className="text-gray-800 hover:text-gray-600">
          Blog
        </Link>
        <Link href="/contact" className="text-gray-800 hover:text-gray-600">
          Contact Us
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-[#00D1C7] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            1
          </span>
        </div>
        <Link href="#" className="text-gray-800 hover:text-gray-600 hidden md:block">
          Sign In
        </Link>
        <Link href="#" className="bg-[#D6FF51] hover:bg-[#c7f038] text-black px-4 py-2 rounded-full hidden md:block">
          Get Started
        </Link>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100">
              About Us
            </Link>
            <Link href="/benefits" className="text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100">
              Benefits
            </Link>
            <Link href="/blog" className="text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100">
              Contact Us
            </Link>
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                Sign In
              </Link>
              <Link href="#" className="bg-[#D6FF51] hover:bg-[#c7f038] text-black px-4 py-2 rounded-full text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
