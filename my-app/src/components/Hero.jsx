import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4"
        >
          Welcome to Food Village
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white mb-8"
        >
          Delicious food delivered to your doorstep.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all"
        >
          Order Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;