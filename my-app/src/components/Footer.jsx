import React from "react";
import { FaWhatsapp, FaLinkedin, FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Food Village</h2>
            <p className="text-sm">Serving authentic flavors since 2023</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Locations</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Stay Updated</h3>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button 
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm">
            &copy; 2023 Food Village. All rights reserved.
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaWhatsapp size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-primary rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-white" size={20} />
      </button>
    </footer>
  );
};

export default Footer;