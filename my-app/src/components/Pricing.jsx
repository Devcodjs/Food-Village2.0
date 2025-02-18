import React from 'react';

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl shadow-lg ${
                plan.featured 
                  ? "bg-blue-600 text-white scale-110 z-10" 
                  : "bg-white"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 rounded-bl-lg font-bold">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}<span className="text-lg">/month</span>
              </div>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-3">
                    <svg 
                      className={`w-5 h-5 mr-2 flex-shrink-0 ${
                        plan.featured ? "text-white" : "text-blue-500"
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                plan.featured 
                  ? "bg-white text-blue-600 hover:bg-gray-50" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}