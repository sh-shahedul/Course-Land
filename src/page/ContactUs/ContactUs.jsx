import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully 🚀");
    e.target.reset();
  };

  return (
    <section className="relative overflow-hidden py-20 px-6">
     <title>Contact Us | courseland</title>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl  font-bold text-pink-600">
          Get In Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4 ">
          Have a question or feedback? We'd love to hear from you! Fill out the form below or reach us directly.
        </p>
      </motion.div>

    
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {/* Left  */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8" >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 md:text-left text-center">
            Contact Information
          </h3>
          <p className="text-gray-700 dark:text-gray-400">
            You can reach our support and developer team through the following methods. Usually reply within 24 hours.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50  rounded-xl shadow-md border border-white/20 dark:border-gray-700">
              <Mail className="w-6 h-6 text-pink-500" />
              <span className="text-gray-700 dark:text-gray-300">hello@courseland.com</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50  rounded-xl shadow-md border border-white/20 dark:border-gray-700">
              <Phone className="w-6 h-6 text-purple-500" />
              <span className="text-gray-700 dark:text-gray-300">+880 1700 000000</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-md border border-white/20 dark:border-gray-700">
              <MapPin className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-700 dark:text-gray-300">Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/60 dark:bg-gray-800/60 rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-full bg-transparent text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-full  text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full mb-6 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full mb-6 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-2xl bg-transparent text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="w-full py-3 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-full shadow-lg hover:opacity-90 flex justify-center items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
