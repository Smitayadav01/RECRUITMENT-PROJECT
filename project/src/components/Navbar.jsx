import React, { useState } from 'react';
import { Users, Menu, X } from 'lucide-react';
import JobForm from './JobForm';
import logo from '../assets/logo.png';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
              <img src={logo} alt="Arihant Consultants Logo" className="h-40 w-auto object" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-900 font-medium transition-colors duration-200">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-900 font-medium transition-colors duration-200">About</a>
              <a href="#services" className="text-gray-700 hover:text-purple-900 font-medium transition-colors duration-200">Services</a>
              <a href="#blog" className="text-gray-700 hover:text-purple-900 font-medium transition-colors duration-200">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-900 font-medium transition-colors duration-200">Contact</a>
              <button 
                onClick={() => setIsJobFormOpen(true)}
                className="bg-purple-900 hover:bg-purple-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-lg shadow-purple-900/25">
                Job Application
              </button>
            </div>
              {/* Mobile Menu Button */}
         <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-purple-900">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-gray-700 hover:text-purple-900 font-medium">Services</a>
              <a href="#blog" className="block text-gray-700 hover:text-purple-900 font-medium">Blog</a>
              <a href="#about" className="block text-gray-700 hover:text-purple-900 font-medium">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-purple-900 font-medium">Contact</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsJobFormOpen(true);
                }}
                className="w-full bg-purple-900 hover:bg-purple-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200"
              >
                Post a Job
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