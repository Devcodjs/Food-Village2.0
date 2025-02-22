import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    id: 1,
    name: "BHASKAR",
    comment: "The food was absolutely incredible! Every bite was a new experience. Highly recommended to all food enthusiasts!",
    image: "/assets/bhaskar.jpg",
    role: "Food Blogger",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Exceptional service paired with mouthwatering dishes. This place has become our weekly favorite!",
    image: "/assets/user2.jpg",
    role: "Local Guide",
    rating: 5
  },
  {
    id: 3,
    name: "BIPUL SAIKIA",
    comment: "Best dining experience we've had in years. The atmosphere, service, and food quality are unmatched!",
    image: "/assets/bipulS.jpg",
    role: "Gurdient",
    rating: 5
  },
  {
    id: 4,
    name: "JUMAN",
    comment: "A perfect blend of innovation and tradition. Every dish tells a story of culinary excellence!",
    image: "/assets/juman.jpg",
    role: "Food Journalist",
    rating: 5
  },
  {
    id: 5,
    name: "RANU SAIKIA",
    comment: "excellent work!",
    image: "/assets/ranus.jpg",
    role: "Gurdient",
    rating: 5
  },
  {
    id: 6,
    name: "Mike Watson",
    comment: "excellent work!",
    image: "/assets/user3.jpg",
    role: "CEO of LifeLong Pvt.Ltd",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 font-playfair"
        >
          Voices of Delight
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl mx-4 transform transition-all duration-300 hover:shadow-2xl relative"
              >
                <div className="absolute top-6 left-6 text-blue-500 opacity-20 text-6xl">
                  <FaQuoteLeft />
                </div>

                <div className="flex flex-col items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-24 h-24 mb-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse" />
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                    <p className="text-blue-500 text-sm font-semibold">{testimonial.role}</p>
                    <div className="flex justify-center mt-2 space-x-1 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-600 text-lg leading-relaxed text-center mb-6 italic"
                >
                  "{testimonial.comment}"
                </motion.p>

                <div className="absolute bottom-6 right-6 text-blue-500 opacity-20 text-6xl transform rotate-180">
                  <FaQuoteLeft />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-next !text-blue-500 !scale-75 hover:!scale-100 transition-transform !right-0" />
          <div className="swiper-button-prev !text-blue-500 !scale-75 hover:!scale-100 transition-transform !left-0" />
          
          {/* Pagination */}
          <div className="swiper-pagination !bottom-0" />
        </Swiper>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      </div>
    </section>
  );
};

export default Testimonials;