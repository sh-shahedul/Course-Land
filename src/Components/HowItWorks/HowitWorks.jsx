import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserPlus, FaBook, FaCertificate } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSearch className="text-5xl" />,
      title: "Browse Courses",
      description: "Explore our extensive collection of courses across multiple categories. Find the perfect course that matches your learning goals and interests.",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 2,
      icon: <FaUserPlus className="text-5xl" />,
      title: "Enroll Today",
      description: "Sign up and enroll in your chosen course with just a few clicks. Get instant access to all course materials and resources.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      icon: <FaBook className="text-5xl" />,
      title: "Learn & Practice",
      description: "Study at your own pace with video lectures, interactive assignments, and hands-on projects. Get support from instructors anytime.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 4,
      icon: <FaCertificate className="text-5xl" />,
      title: "Get Certified",
      description: "Complete your course and earn a certificate of completion. Showcase your new skills to employers and advance your career.",
      color: "from-pink-600 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Start your learning journey in just 4 simple steps
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 -translate-y-1/2 opacity-20"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative z-10 h-full flex flex-col"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg mx-auto`}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className={`w-16 h-1 bg-gradient-to-r ${step.color} rounded-full mx-auto mt-6`}></div>
                </motion.div>

                {/* Arrow Connector - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <motion.svg
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="w-6 h-6 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Get Started Now
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;