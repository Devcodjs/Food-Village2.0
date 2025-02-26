import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const CustomSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const projects = [
    {
      src: '/assets/coffe.jpg',
      alt: 'Sustainable Farming',
      title: 'Farm-to-Table Initiative',
      desc: 'Revolutionizing urban agriculture with zero-waste solutions',
    },
    {
      src: '/assets/hand.jpg',
      alt: 'Community Support',
      title: 'Community Outreach',
      desc: 'Empowering local communities through education programs',
    },
    {
      src: '/assets/work.jpg',
      alt: 'Innovation Lab',
      title: 'Tech Innovation Hub',
      desc: 'Developing cutting-edge solutions for modern challenges',
    },
    {
      src: '/assets/worker.jpg',
      alt: 'Skilled Workforce',
      title: 'Vocational Training',
      desc: 'Creating employment opportunities through skill development',
    },
    {
      src: '/assets/bus.jpg',
      alt: 'Eco Transport',
      title: 'Green Transportation',
      desc: 'Reducing carbon footprint with electric mobility',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Transforming Visions into Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of impactful projects creating sustainable change across communities
          </p>
        </motion.div>

        <Slider ref={sliderRef} {...settings} className="innovative-slider">
          {projects.map((project, index) => (
            <div key={index} className="px-3 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 h-[480px]">
                <div className="relative h-full">
                  <img
                    src={project.src}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 text-white translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.desc}
                    </p>
                  </div>
                  <button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-3 rounded-full hover:bg-white/20 hover:border-white/50
                    flex items-center gap-2 text-white font-semibold"
                  >
                    <span>Explore Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomSlider;