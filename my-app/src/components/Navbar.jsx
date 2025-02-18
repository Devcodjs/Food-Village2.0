import React from "react";
import { MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="bg-black bg-opacity-80 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/assets/fast-food.png" alt="Logo" className="h-12" />
        </motion.div>
        <ul className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <a
                href={link.href}
                className="text-white hover:text-gray-300 text-lg font-semibold transition-colors"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
        <MenuIcon className="h-8 w-8 text-white md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;