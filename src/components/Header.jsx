import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from './Sidebar';

const Header = () => {
const [isOpen, setIsOpen] = useState(false);

return (
    <header className="w-full bg-gray-100 sticky top-0 z-50 h-16 flex items-center px-4 shadow">
    <div className="flex items-center justify-between w-full mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="h-16 flex items-center">
        <img src="/logo.png" alt="Logo" className="h-12 w-auto  sm:h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-gray-700">
        <Link
            to="/"
            className="relative group"
        >
            <span className="hover:text-blue-600">Home</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/tracking" className="relative group">
            <span className="hover:text-blue-600">Tracking</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/pricing" className="relative group">
            <span className="hover:text-blue-600">Pricing</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/about-us" className="relative group">
            <span className="hover:text-blue-600">About</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/blog" className="relative group">
            <span className="hover:text-blue-600">Blog</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/contact-us" className="relative group">
            <span className="hover:text-blue-600">Contact</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/sign-in" className="relative group">
            <span className="hover:text-blue-600">Sign In</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        </nav>


        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <FiX /> : <FiMenu />}
      
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
