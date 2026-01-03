import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { FaUserGraduate, FaClock, FaBookOpen } from "react-icons/fa";

const Achivement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: <FaUserGraduate className="text-pink-500 text-4xl mb-3" />,
      number: 5000,
      label: "Students Enrolled",
      suffix: "+",
      bg: "bg-pink-100",
    },
    {
      icon: <FaClock className="text-purple-500 text-4xl mb-3" />,
      number: 500,
      label: "Hours of Learning",
      suffix: "+",
      bg: "bg-purple-100", 
    },
    {
      icon: <FaBookOpen className="text-pink-500 text-4xl mb-3" />,
      number: 150,
      label: "Courses Published",
      suffix: "+",
      bg: "bg-pink-100", 
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10">
      <div className="max-w-6xl mx-auto text-center px-5">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
         className="text-3xl md:text-4xl font-bold text-pink-600 mb-10" >
          Our  Achievements
        </motion.h2>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`${item.bg} shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-500`}
            >
              {item.icon}
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {isInView ? (
                  <CountUp end={item.number} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {item.suffix}
              </h3>
              <p className="text-gray-500 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achivement;
