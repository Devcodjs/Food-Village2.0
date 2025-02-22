import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/assets/bg.jpg',
  '/assets/jb.jpg',
  '/assets/js2.png',
  
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((src) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
            })
          )
        );
        setLoaded(true);
      } catch (err) {
        setError(err);
        console.error('Image loading error:', err);
      }
    };

    preloadImages();

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Text animations variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode='popLayout'>
          {images.map((image, index) => (
            activeIndex === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: loaded ? `url(${image})` : 'none',
                  backgroundPosition: 'center 25%'
                }}
              />
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
          ⚠ Image loading issue - Showing placeholder
        </div>
      )}

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            <motion.div variants={textVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Savor the Art of
                <br />
                <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Modern Gastronomy
                </span>
              </h1>
            </motion.div>

            <motion.div variants={textVariants} transition={{ delay: 0.3 }}>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
                Where passion meets the plate - Experience Michelin-starred creativity through
                seasonal ingredients transformed into edible masterpieces
              </p>
            </motion.div>

            <motion.div
              variants={textVariants}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="group bg-gradient-to-r from-amber-400 to-amber-500 text-black px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:gap-4">
                <span>Book Your Culinary Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer relative
                ${index === activeIndex ? 'w-8 bg-amber-400' : 'w-3 bg-white/50 hover:bg-white/80'}
              `}
              aria-label={`Slide ${index + 1}`}
            >
              {index === activeIndex && (
                <motion.div 
                  className="absolute h-full bg-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4.8, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute top-1/2 left-4 right-4 h-1 bg-white/5 rounded-full max-w-7xl mx-auto" />
    </section>
  );
};

export default Hero;