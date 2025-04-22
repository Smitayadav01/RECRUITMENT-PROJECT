import React from 'react';
import { Users } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Arihant Consultants</span>
          </div>
          <div className="flex items-center">
            <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2">Contact</a>
            <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar