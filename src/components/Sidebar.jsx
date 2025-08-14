import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaDoorOpen } from "react-icons/fa";
const Sidebar = ({ isOpen, setIsOpen, 
  isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

   const onShipRunwayClick = () => {
    handleLogout(); 
    setIsOpen(false); 
    navigate('/'); 
  };

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

          {isAuthenticated ? (
          <button
            onClick={onShipRunwayClick}
            className="flex items-center justify-between w-full px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <span className="font-medium text-gray-800">Ship Runway</span>
          <span className="bg-red-500 p-2 rounded-xl">
            <FaDoorOpen className="text-white text-lg" />
          </span>
          </button>
        ) : (
          <Link to="/sign-in" onClick={() => setIsOpen(false)}>Sign In</Link>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
