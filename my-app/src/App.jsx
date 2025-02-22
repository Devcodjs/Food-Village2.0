import React, { useEffect, useState } from "react";
import  CustomSlider  from "./components/CustomSlider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Fixed case sensitivity
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing"; // Removed curly braces
import Contact from "./components/Contact"; // Removed curly braces
import Features from "./components/Features"; // Removed curly braces
import Stats from "./components/Stats";
import Newsletter from "./components/Newsletter"; // Added missing import

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {isLoading ? (
        <div className="h-screen flex items-center justify-center bg-blue-600">
          <div className="loader animate-spin rounded-full border-4 border-t-4 border-white h-12 w-12"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Features />
          <Services />
          <Stats />
          <Pricing />
          <Testimonials />
          <CustomSlider />
          <Contact />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
}