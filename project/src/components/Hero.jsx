import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-futuristic-800 via-futuristic-700 to-cream-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-64">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-cream-50 leading-tight">
            Ocean of <span className="text-cream-200">Careers</span>
          </h1>
          <p className="mt-8 text-xl text-cream-100 leading-relaxed">
            Your trusted partner in finding the perfect talent. We combine speed and expertise to connect exceptional candidates with outstanding opportunities.
          </p>
          
          <div className="mt-12">
            <div className="bg-cream-50/10 backdrop-blur-lg p-2 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-4 p-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for jobs..."
                    className="w-full pl-12 pr-4 py-3 bg-cream-50 dark:bg-gray-800 rounded-xl focus:ring-2 focus:ring-cream-400 focus:outline-none dark:text-white"
                  />
                </div>
                <button className="bg-futuristic-700 hover:bg-futuristic-600 text-cream-50 px-8 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg shadow-futuristic-900/25">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cream-50 opacity-75" />
        </div>
      </div>
    </div>
  );
}

export default Hero;