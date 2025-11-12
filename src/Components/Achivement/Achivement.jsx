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
      number: 10000,
      label: "Students Enrolled",
      suffix: "+",
    },
    {
      icon: <FaClock className="text-purple-500 text-4xl mb-3" />,
      number: 500,
      label: "Hours of Learning",
      suffix: "+",
    },
    {
      icon: <FaBookOpen className="text-indigo-500 text-4xl mb-3" />,
      number: 200,
      label: "Courses Published",
      suffix: "+",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto text-center px-5">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500">
            Achievements
          </span>
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-500"
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
