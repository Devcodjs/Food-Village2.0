import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ChartBarIcon, UserGroupIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/outline';

export  function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { icon: UserGroupIcon, number: 2500, label: 'Happy Clients', suffix: '+' },
    { icon: TrophyIcon, number: 150, label: 'Awards Won', suffix: '+' },
    { icon: ChartBarIcon, number: 99, label: 'Success Rate', suffix: '%' },
    { icon: GlobeAltIcon, number: 50, label: 'Countries', suffix: '+' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all">
              <stat.icon className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">
                {inView && <CountUp end={stat.number} suffix={stat.suffix} duration={2} />}
              </div>
              <p className="text-gray-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;