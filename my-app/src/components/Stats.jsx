import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ChartBarIcon, UserGroupIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { icon: UserGroupIcon, number: 2500, label: 'Happy Clients', suffix: '+' },
    { icon: TrophyIcon, number: 150, label: 'Awards Won', suffix: '+' },
    { icon: ChartBarIcon, number: 99, label: 'Success Rate', suffix: '%' },
    { icon: GlobeAltIcon, number: 50, label: 'Countries', suffix: '+' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false
        }
      }
    ],
    appendDots: dots => (
      <div className="custom-dots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="dot-progress">
        <div className="progress-bar" />
      </div>
    )
  };

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-br from-indigo-900 to-blue-900 relative overflow-hidden isolate"
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Parallax layers */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Redefining Excellence
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Through Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quantifying our global impact and commitment to exceptional service delivery
          </p>
        </motion.div>

        <Slider {...settings} className="innovative-slider">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="px-3 group"
            >
              <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all transform hover:-translate-y-4 shadow-2xl hover:shadow-3xl relative overflow-hidden">
                {/* Hover effect layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Animated icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-8 shadow-lg"
                  >
                    <stat.icon className="h-12 w-12 text-white" />
                  </motion.div>

                  {/* Number counter */}
                  <div className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {inView && (
                      <CountUp
                        end={stat.number}
                        suffix={stat.suffix}
                        duration={3}
                        separator=","
                        delay={0.5}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-2xl font-semibold text-gray-200">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .innovative-slider .slick-list {
          overflow: visible;
          padding: 20px 0 !important;
        }

        .custom-dots {
          position: absolute;
          bottom: -40px;
          width: 100%;
        }

        .custom-dots ul {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot-progress {
          width: 40px;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
          cursor: pointer;
        }

        .progress-bar {
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, #22d3ee, #3b82f6);
          transition: width 5s linear;
        }

        .slick-active .progress-bar {
          width: 100%;
          animation: progress 5s linear;
        }

        @keyframes progress {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}

export default Stats;