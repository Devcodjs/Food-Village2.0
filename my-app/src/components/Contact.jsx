import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import { EnvelopeIcon, PhoneIcon, UserCircleIcon, MapPinIcon } from '@heroicons/react/24/outline';

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const onSubmit = (data) => {
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      data,
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      document.getElementById('success-message').classList.remove('translate-y-full');
      reset();
      setTimeout(() => {
        document.getElementById('success-message').classList.add('translate-y-full');
      }, 3000);
    });
  };

  return (
    <section ref={ref} className="relative py-28 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-12 p-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <EnvelopeIcon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email us</p>
                    <p className="text-lg text-white">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <PhoneIcon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Call us</p>
                    <p className="text-lg text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <MapPinIcon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Visit us</p>
                    <p className="text-lg text-white">123 Innovation Street</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'GitHub'].map((platform, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      href="#"
                    >
                      <span className="text-white">{platform}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3 p-1 bg-white/5 rounded-xl">
                  <UserCircleIcon className="w-6 h-6 text-cyan-400 ml-4" />
                  <input
                    {...register('name', { required: true })}
                    className="w-full p-3 bg-transparent outline-none text-white placeholder-gray-400"
                    placeholder="Full Name"
                  />
                </div>
                {errors.name && <p className="text-cyan-400 text-sm mt-1">Name is required</p>}
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3 p-1 bg-white/5 rounded-xl">
                  <EnvelopeIcon className="w-6 h-6 text-cyan-400 ml-4" />
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className="w-full p-3 bg-transparent outline-none text-white placeholder-gray-400"
                    placeholder="Email Address"
                  />
                </div>
                {errors.email && <p className="text-cyan-400 text-sm mt-1">Valid email is required</p>}
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-3 p-1 bg-white/5 rounded-xl">
                  <svg className="w-6 h-6 text-cyan-400 ml-4 mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <textarea
                    {...register('message', { required: true })}
                    className="w-full p-3 bg-transparent outline-none text-white placeholder-gray-400 h-32 resize-none"
                    placeholder="Your Message"
                  />
                </div>
                {errors.message && <p className="text-cyan-400 text-sm mt-1">Message is required</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Success Message */}
        <div
          id="success-message"
          className="fixed bottom-8 right-8 p-6 bg-green-500/90 backdrop-blur-lg rounded-xl text-white font-semibold shadow-2xl transition-transform duration-300 translate-y-full"
        >
          Message sent successfully! 🎉
        </div>
      </div>
    </section>
  );
}

export default Contact;