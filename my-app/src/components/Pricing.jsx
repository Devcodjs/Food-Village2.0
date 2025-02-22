import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const particles = Array(15).fill(null);
  const shapes = Array(8).fill(null);

  return (
    <>
      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Shapes */}
      {shapes.map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute opacity-10 mix-blend-overlay"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            rotate: Math.random() * 360,
            scale: 0,
          }}
          animate={{
            scale: Math.random() * 1.5,
            rotate: Math.random() * 360,
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className={`w-32 h-32 ${
              i % 2 === 0 ? 'text-blue-400' : 'text-purple-400'
            }`}
          >
            {i % 2 === 0 ? (
              <circle cx="50" cy="50" r="45" fill="currentColor" />
            ) : (
              <path
                d="M50 10Q60 30 90 50Q60 70 50 90Q40 70 10 50Q40 30 50 10"
                fill="currentColor"
              />
            )}
          </svg>
        </motion.div>
      ))}
    </>
  );
};

export default function Pricing() {
  const plans = [
    { 
      name: "Starter", 
      price: 49,
      features: ["Basic Website", "5 Pages", "SEO Setup", "Email Support", "1 Month Maintenance"],
      featured: false
    },
    { 
      name: "Professional", 
      price: 149,
      features: ["Business Website", "15 Pages", "Advanced SEO", "Priority Support", "6 Months Maintenance", "CMS Integration"],
      featured: true
    },
    { 
      name: "Enterprise", 
      price: 349,
      features: ["Custom Web App", "Unlimited Pages", "Premium SEO", "24/7 Support", "1 Year Maintenance", "API Integration", "Cloud Hosting"],
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. Start small and upgrade as you grow.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className={`relative group p-8 rounded-2xl backdrop-blur-lg border border-opacity-20 ${
                plan.featured 
                  ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-2xl scale-[1.02]"
                  : "bg-white/70 border-gray-200 hover:border-blue-200 shadow-lg hover:shadow-xl"
              } transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2 rounded-bl-lg font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-800'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                  <span className="text-lg font-medium ml-1">/month</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li 
                    key={i}
                    className="flex items-center"
                  >
                    <svg 
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.featured ? 'text-white' : 'text-blue-500'
                      }`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span className={plan.featured ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${
                plan.featured 
                  ? 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/30'
              } flex items-center justify-center gap-2`}>
                Get Started
                <svg 
                  className="w-5 h-5"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center text-gray-600 relative z-10">
          <p>Need custom solutions? <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact us →</a></p>
        </div>
      </div>
    </section>
  );
}