import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { FaUserGraduate, FaClock, FaBookOpen, FaAward } from "react-icons/fa";

const Achivement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: <FaUserGraduate className="text-pink-500 text-5xl mb-4" />,
      number: 5000,
      label: "Students Enrolled",
      suffix: "+",
      bg: "bg-gradient-to-br from-pink-100 to-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: <FaClock className="text-purple-500 text-5xl mb-4" />,
      number: 500,
      label: "Hours of Learning",
      suffix: "+",
      bg: "bg-gradient-to-br from-purple-100 to-purple-50", 
      borderColor: "border-purple-200",
    },
    {
      icon: <FaBookOpen className="text-indigo-500 text-5xl mb-4" />,
      number: 150,
      label: "Courses Published",
      suffix: "+",
      bg: "bg-gradient-to-br from-indigo-100 to-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      icon: <FaAward className="text-rose-500 text-5xl mb-4" />,
      number: 98,
      label: "Success Rate",
      suffix: "%",
      bg: "bg-gradient-to-br from-rose-100 to-rose-50",
      borderColor: "border-rose-200",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
              Our Success Story
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
          >
            Our Achievements
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Empowering thousands of students worldwide with quality education and transformative learning experiences
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`${item.bg} ${item.borderColor} border-2 shadow-xl rounded-3xl p-8 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-500 backdrop-blur-sm relative group`}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3 relative z-10">
                {isInView ? (
                  <CountUp end={item.number} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {item.suffix}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-center relative z-10">
                {item.label}
              </p>
              
              {/* Decorative element */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-pink-400"></div>
            <span className="text-sm font-medium">Trusted by thousands worldwide</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achivement;