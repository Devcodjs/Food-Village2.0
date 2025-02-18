// src/components/Newsletter.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend } from 'react-icons/fi';

export default function Newsletter() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 bg-noise-pattern" />
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      />

      <div className="relative container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Ahead with Our Insights
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Join 10,000+ subscribers receiving exclusive tech updates, 
            industry trends, and special offers
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              // Add your newsletter submission logic here
            }}
            className="relative group max-w-xl mx-auto"
          >
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full py-5 pl-6 pr-32 text-lg bg-white/10 backdrop-blur-lg rounded-full border-2 border-white/20 focus:border-cyan-400 outline-none text-white placeholder-purple-200 transition-all"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FiSend className="text-xl" />
                Subscribe
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-purple-200">
            We respect your privacy. No spam ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Add this CSS to your global styles for the noise pattern
const noiseStyles = `
  .bg-noise-pattern {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }
`;

// Inject the noise styles
document.head.insertAdjacentHTML('beforeend', `<style>${noiseStyles}</style>`);