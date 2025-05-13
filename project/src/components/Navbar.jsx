import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import JobForm from './JobApplication';
import logoDark from '../assets/logo-dark.png';   // Dark version (for light mode)
import logoLight from '../assets/logo-light.png'; // Light version (for dark mode)
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-cream-50/80 dark:bg-futuristic-900/80 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo with theme-based switching */}
            <div className="flex items-center space-x-4">
              <div className="relative h-20 w-auto flex items-center">
                {/* Show logoDark in light mode */}
                <img
                  src={logoDark}
                  alt="Logo for Light Mode"
                  className="h-40 w-auto object-contain dark:hidden"
                />
                {/* Show logoLight in dark mode */}
                <img
                  src={logoLight}
                  alt="Logo for Dark Mode"
                  className="h-40 w-auto object-contain hidden dark:block"
                />
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium transition-colors duration-200">Home</a>
              <a href="#about" className="text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium transition-colors duration-200">About</a>
              <a href="#services" className="text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium transition-colors duration-200">Services</a>
              <a href="#blog" className="text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium transition-colors duration-200">Blog</a>
              <a href="#contact" className="text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium transition-colors duration-200">Contact</a>
              <ThemeToggle />
              <button 
                onClick={() => setIsJobFormOpen(true)}
                className="bg-futuristic-700 dark:bg-cream-600 hover:bg-futuristic-600 dark:hover:bg-cream-500 text-cream-50 dark:text-futuristic-900 px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-lg shadow-futuristic-900/25 dark:shadow-cream-900/40"
              >
                Job Application
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream-50 dark:bg-futuristic-900 border-t dark:border-futuristic-800">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium">Services</a>
              <a href="#blog" className="block text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium">Blog</a>
              <a href="#about" className="block text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium">About</a>
              <a href="#contact" className="block text-futuristic-800 dark:text-cream-200 hover:text-futuristic-600 dark:hover:text-cream-400 font-medium">Contact</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsJobFormOpen(true);
                }}
                className="w-full bg-futuristic-700 dark:bg-cream-600 hover:bg-futuristic-600 dark:hover:bg-cream-500 text-cream-50 dark:text-futuristic-900 px-6 py-2.5 rounded-lg font-medium transition-colors duration-200"
              >
                Job Application
              </button>
            </div>
          </div>
        )}
      </nav>

      <JobForm isOpen={isJobFormOpen} onClose={() => setIsJobFormOpen(false)} />
    </>
  );
}

export default Navbar;
