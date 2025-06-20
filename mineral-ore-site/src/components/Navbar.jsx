import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FBFBFB] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-lg font-bold text-green-700">JLU MOTEC</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link 
            to="/" 
            className={`hover:text-green-700 transition-colors ${
              isActive('/') ? 'text-green-700 font-semibold' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-green-700 transition-colors ${
              isActive('/about') ? 'text-green-700 font-semibold' : 'text-gray-700'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/technologies" 
            className={`hover:text-green-700 transition-colors ${
              isActive('/technologies') ? 'text-green-700 font-semibold' : 'text-gray-700'
            }`}
          >
            Technologies
          </Link>
          <Link 
            to="/products" 
            className={`hover:text-green-700 transition-colors ${
              isActive('/products') ? 'text-green-700 font-semibold' : 'text-gray-700'
            }`}
          >
            Products
          </Link>
          <a href="#contact" className="text-gray-700 hover:text-green-700 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden bg-[#FBFBFB] border-t border-gray-200 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="px-4 py-4 space-y-4">
          <Link 
            to="/" 
            onClick={closeMenu}
            className={`block py-2 hover:text-green-700 transition-colors ${
              isActive('/') ? 'text-green-700 font-semibold' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={closeMenu}
            className={`block py-2 hover:text-green-700 transition-colors ${
              isActive('/about') ? 'text-green-700 font-semibold' : 'text-gray-700'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/technologies" 
            onClick={closeMenu}
            className={`block py-2 hover:text-green-700 transition-colors ${
              isActive('/technologies') ? 'text-green-700 font-semibold' : 'text-gray-700'
            }`}
          >
            Technologies
          </Link>
          <Link 
            to="/products" 
            onClick={closeMenu}
            className={`block py-2 hover:text-green-700 transition-colors ${
              isActive('/products') ? 'text-green-700 font-semibold' : 'text-gray-700'
            }`}
          >
            Products
          </Link>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="block py-2 text-gray-700 hover:text-green-700 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}