import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Global Cuisine",
      description: "Experience authentic flavors from 50+ countries",
      image: "/assets/js1.png",
      badge: "Chef's Choice"
    },
    {
      id: 2,
      title: "Elite Catering",
      description: "Michelin-star catering for luxury events",
      image: "/assets/js2.png",
      badge: "5-Star Service"
    },
    {
      id: 3,
      title: "Premium Pantry",
      description: "Artisanal ingredients delivered weekly",
      image: "/assets/js3.png",
      badge: "Organic"
    },
    {
      id: 4,
      title: "Bulk Excellence",
      description: "Wholesale solutions for enterprises",
      image: "/assets/js4.png",
      badge: "Save 40%"
    },
    {
      id: 5,
      title: "Private Chef",
      description: "Personalized dining experiences",
      image: "/assets/cheff.jpg",
      badge: "VIP"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-gray-900 to-zinc-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAwMDAiLz48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wIDBoMjQwdjI0MEgweiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNGRkYiIGZpbGw9Im5vbmUiLz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
            Culinary Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Redefining gourmet experiences through innovative food solutions
          </p>
        </motion.div>

        {/* Desktop: 3D Carousel */}
        <div className="hidden lg:block">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 150,
              modifier: 2.5,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="services-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="max-w-sm">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-700 h-[500px] flex flex-col"
                >
                  <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {service.badge}
                  </div>
                  <div className="relative h-56 mb-6 group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 flex-grow">{service.description}</p>
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl font-bold hover:shadow-lg transition-all">
                    Explore Service
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile: Grid */}
        <div className="lg:hidden grid gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-800 rounded-xl p-6 border border-zinc-700"
            >
              <div className="relative h-48 mb-4">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="mt-4 bg-amber-500/20 px-3 py-1 rounded-full text-sm text-amber-400 w-fit">
                {service.badge}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
