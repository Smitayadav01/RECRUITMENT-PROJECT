import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-futuristic-800 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-cream-50 dark:text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center text-cream-200 dark:text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <span>hr.admin@arihantconsultants.co.in</span>
              </div>
              <div className="flex items-center text-cream-200 dark:text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 900-466-4496</span>
              </div>
              <div className="flex items-center text-cream-200 dark:text-gray-300">
                <Globe className="h-5 w-5 mr-2" />
                <a href="https://www.arihantconsultants.co.in" className="hover:text-cream-50 dark:hover:text-white">
                  www.arihantconsultants.co.in
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-cream-50 dark:text-white text-lg font-semibold mb-4">Sectors We Serve</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="text-cream-200 dark:text-gray-300">Legal/Medical</li>
              <li className="text-cream-200 dark:text-gray-300">IT</li>
              <li className="text-cream-200 dark:text-gray-300">E-commerce</li>
              <li className="text-cream-200 dark:text-gray-300">Finance</li>
              <li className="text-cream-200 dark:text-gray-300">Sales/Marketing</li>
              <li className="text-cream-200 dark:text-gray-300">Social Media</li>
            </ul>
          </div>
          <div>
            <h3 className="text-cream-50 dark:text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-cream-200 dark:text-gray-300 mb-4">Stay updated with our latest opportunities</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none bg-cream-50 dark:bg-gray-800 text-futuristic-900 dark:text-white"
              />
              <button className="bg-futuristic-600 dark:bg-futuristic-700 text-cream-50 px-4 py-2 rounded-r-md hover:bg-futuristic-500 dark:hover:bg-futuristic-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-futuristic-700 dark:border-gray-700">
          <p className="text-center text-cream-200 dark:text-gray-300">
            © {new Date().getFullYear()} Arihant Consultants. All rights reserved.
          </p>
          <p className="text-center text-cream-200 dark:text-gray-300 mt-2">
            Founded by Jatin Gala
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;