import React from 'react';
import { FaMobileAlt, FaChartLine, FaShieldAlt, FaCloud } from 'react-icons/fa';

export default function Features() {
  const features = [
    { 
      icon: <FaMobileAlt className="w-8 h-8" />, 
      title: "Mobile First Design", 
      text: "Responsive designs that work flawlessly across all devices" 
    },
    { 
      icon: <FaChartLine className="w-8 h-8" />, 
      title: "Performance Analytics", 
      text: "Real-time analytics to track your business growth" 
    },
    { 
      icon: <FaShieldAlt className="w-8 h-8" />, 
      title: "Advanced Security", 
      text: "Enterprise-grade security for your peace of mind" 
    },
    { 
      icon: <FaCloud className="w-8 h-8" />, 
      title: "Cloud Integration", 
      text: "Seamless integration with major cloud platforms" 
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-blue-600 mb-4 transition-colors group-hover:text-blue-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}