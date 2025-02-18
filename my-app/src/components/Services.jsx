import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Food Variety",
      description: "Explore a wide range of cuisines from around the world.",
      image: "/assets/js1.png",
    },
    {
      id: 2,
      title: "Food Catering",
      description: "Perfect catering solutions for your events and gatherings.",
      image: "/assets/js2.png",
    },
    {
      id: 3,
      title: "Food Stock",
      description: "Never run out of your favorite ingredients with our stock service.",
      image: "/assets/js3.png",
    },
    {
      id: 4,
      title: "Bulk Ordering",
      description: "Save big with our bulk ordering options.",
      image: "/assets/js4.png",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <img src={service.image} alt={service.title} className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;