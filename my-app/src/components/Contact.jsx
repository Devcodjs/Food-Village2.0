import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer'; // Add missing import

export  function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const onSubmit = (data) => {
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      data,
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      alert('Message sent successfully!');
      reset();
    });
  };

  return (
    <section ref={ref} className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            Get in Touch
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  {...register('name', { required: true })}
                  className="w-full p-4 bg-white/5 rounded-lg outline-none focus:ring-2 ring-cyan-400 transition-all"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all group-focus-within:-translate-y-6 group-focus-within:text-cyan-400 group-[input:not(:placeholder-shown)]:-translate-y-6">
                  Your Name
                </label>
              </div>

              {/* Add other form fields */}
              <div className="relative group">
                <input
                  {...register('email', { required: true })}
                  type="email"
                  className="w-full p-4 bg-white/5 rounded-lg outline-none focus:ring-2 ring-cyan-400 transition-all"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all group-focus-within:-translate-y-6 group-focus-within:text-cyan-400 group-[input:not(:placeholder-shown)]:-translate-y-6">
                  Your Email
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea
                {...register('message', { required: true })}
                className="w-full p-4 bg-white/5 rounded-lg outline-none focus:ring-2 ring-cyan-400 transition-all h-32"
                placeholder=" "
              />
              <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all group-focus-within:-translate-y-6 group-focus-within:text-cyan-400 group-[input:not(:placeholder-shown)]:-translate-y-6">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-white hover:scale-[1.02] transition-transform"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
export default Contact;