import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'; // Import the dumbbell icon

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Left: Logo Section */}
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faDumbbell} size="2x" className="text-white" />
          <span className="text-xl font-semibold">FIT SURE</span>
        </div>
        {/* Newsletter Section */}
        <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p>Subscribe to our newsletter for exclusive updates and promotions.</p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2">
              <input type="email" placeholder="Enter your email" className="py-2 pl-10 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button className="bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition">Subscribe</button>
            </div>
          </div>

        {/* Right: Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto">
          {/* About Us Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-yellow-400 transition">Our Story</a></li>
              <li><a href="#team" className="hover:text-yellow-400 transition">Team</a></li>
              <li><a href="#careers" className="hover:text-yellow-400 transition">Careers</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Fitness Street</li>
              <li>Email: info@fitnesspro.com</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-yellow-400 transition">Pricing</a></li>
              <li><a href="#blog" className="hover:text-yellow-400 transition">Blog</a></li>
            </ul>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;