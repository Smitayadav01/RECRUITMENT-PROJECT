import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-purple-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center text-purple-100">
                <Mail className="h-5 w-5 mr-2" />
                <span>hr.admin@arihantconsultants.co.in</span>
              </div>
              <div className="flex items-center text-purple-100">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 900-466-4496</span>
              </div>
              <div className="flex items-center text-purple-100">
                <Globe className="h-5 w-5 mr-2" />
                <a href="https://www.arihantconsultants.co.in" className="hover:text-white">
                  www.arihantconsultants.co.in
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Sectors We Serve</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="text-purple-100">Legal/Medical</li>
              <li className="text-purple-100">IT</li>
              <li className="text-purple-100">E-commerce</li>
              <li className="text-purple-100">Finance</li>
              <li className="text-purple-100">Sales/Marketing</li>
              <li className="text-purple-100">Social Media</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-purple-100 mb-4">Stay updated with our latest opportunities</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-purple-700 text-white px-4 py-2 rounded-r-md hover:bg-purple-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800">
          <p className="text-center text-purple-100">
            © {new Date().getFullYear()} Arihant Consultants. All rights reserved.
          </p>
          <p className="text-center text-purple-100 mt-2">
            Founded by Jatin Gala
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;