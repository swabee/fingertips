import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-light shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-primary font-poppins font-semibold text-2xl">
          FingerTips
        </h1>

        <div className="lg:hidden">
          <button onClick={toggleDrawer} className="text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <ul className="hidden lg:flex gap-6 font-medium text-dark">
          <li className="nav-item">
            <Link to="/" className="hover:text-primary transition-colors duration-300 transform hover:scale-105">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category" className="hover:text-primary transition-colors duration-300 transform hover:scale-105">
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="hover:text-primary transition-colors duration-300 transform hover:scale-105">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="hover:text-primary transition-colors duration-300 transform hover:scale-105">
              Profile
            </Link>
          </li>
        </ul>

        <button className="hidden lg:block bg-primary text-light py-2 px-4 rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105">
          Login
        </button>
      </div>

      {/* Overlay for mobile view */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-light shadow-lg transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden z-50`}>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-primary font-semibold text-xl">Menu</h2>
          <button onClick={toggleDrawer} className="text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 font-medium text-dark">
          <li className="nav-item mb-4">
            <Link to="/" className="hover:text-primary transition-colors duration-300 transform hover:scale-105" onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li className="nav-item mb-4">
            <Link to="/category" className="hover:text-primary transition-colors duration-300 transform hover:scale-105" onClick={toggleDrawer}>
              Category
            </Link>
          </li>
          <li className="nav-item mb-4">
            <Link to="/cart" className="hover:text-primary transition-colors duration-300 transform hover:scale-105" onClick={toggleDrawer}>
              Cart
            </Link>
          </li>
          <li className="nav-item mb-4">
            <Link to="/profile" className="hover:text-primary transition-colors duration-300 transform hover:scale-105" onClick={toggleDrawer}>
              Profile
            </Link>
          </li>
          <button className="bg-primary text-light py-2 px-4 rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 mt-4">
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
