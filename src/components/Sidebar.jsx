import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={() => setIsOpen(false)} className="text-gray-600">
          ✕
        </button>
      </div>
      <nav className="flex flex-col p-4 gap-4 font-medium text-gray-700">
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/tracking" onClick={() => setIsOpen(false)}>Tracking</Link>
        <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
        <Link to="/about-us" onClick={() => setIsOpen(false)}>About</Link>
         <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact</Link>
         <Link to="/sign-in" onClick={() => setIsOpen(false)}>Sign In</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
