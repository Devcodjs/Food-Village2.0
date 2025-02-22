import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaChartLine, FaShieldAlt, FaCloud } from 'react-icons/fa';

export default function Features() {
  const features = [
    { 
      icon: <FaMobileAlt className="w-10 h-10" />, 
      title: "Mobile First Design", 
      text: "Responsive designs that work flawlessly across all devices",
      color: "from-purple-600 to-blue-600"
    },
    { 
      icon: <FaChartLine className="w-10 h-10" />, 
      title: "Performance Analytics", 
      text: "Real-time analytics to track your business growth",
      color: "from-green-600 to-cyan-600"
    },
    { 
      icon: <FaShieldAlt className="w-10 h-10" />, 
      title: "Advanced Security", 
      text: "Enterprise-grade security for your peace of mind",
      color: "from-red-600 to-orange-600"
    },
    { 
      icon: <FaCloud className="w-10 h-10" />, 
      title: "Cloud Integration", 
      text: "Seamless integration with major cloud platforms",
      color: "from-indigo-600 to-pink-600"
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

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Cutting-edge solutions that drive growth and ensure security
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gray-200/50 hover:border-transparent"
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feature.color}`}
              />
              
              <motion.div
                whileHover={{ scale: 1.15 }}
                className={`mb-8 w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-lg`}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-2xl font-extrabold mb-5 text-gray-900 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-lg text-gray-700 group-hover:text-white/90 leading-relaxed transition-colors font-medium">
                {feature.text}
              </p>
              
              <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-white/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}