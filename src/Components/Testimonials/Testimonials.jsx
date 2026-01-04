import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anika Rahman",
      role: "Web Developer",
      course: "Full Stack Web Development",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      review: "Course Land transformed my career! The instructors are incredibly knowledgeable and the course content is top-notch. I landed my dream job just 2 months after completing the course.",
      company: "Tech Solutions Ltd"
    },
    {
      id: 2,
      name: "Rafiq Ahmed",
      role: "Data Scientist",
      course: "Machine Learning & AI",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      review: "The hands-on projects and real-world examples made learning so much easier. I went from zero knowledge to building my own ML models. Highly recommend Course Land to anyone serious about learning!",
      company: "DataTech Inc"
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      role: "Digital Marketer",
      course: "Digital Marketing Masterclass",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      review: "Best investment I've made in my career! The course is comprehensive, easy to follow, and the support from instructors is amazing. My ROI increased by 300% after implementing what I learned.",
      company: "Marketing Pro Agency"
    },
    {
      id: 4,
      name: "Karim Hassan",
      role: "UI/UX Designer",
      course: "UI/UX Design Bootcamp",
      image: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      review: "The design principles and practical exercises helped me build an impressive portfolio. Within weeks, I started getting freelance clients. Course Land is a game-changer for aspiring designers!",
      company: "Creative Studio"
    },
    {
      id: 5,
      name: "Fatima Khan",
      role: "Backend Developer",
      course: "Node.js & Express Mastery",
      image: "https://i.pravatar.cc/150?img=20",
      rating: 5,
      review: "From basics to advanced concepts, everything is explained clearly. The project-based approach made learning enjoyable. I now confidently build scalable backend systems for enterprise clients.",
      company: "DevWorks Solutions"
    },
    {
      id: 6,
      name: "Sabbir Rahman",
      role: "Mobile App Developer",
      course: "React Native Development",
      image: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      review: "Excellent course structure with lifetime access! I can revisit concepts anytime. The community support is fantastic, and the certificate helped me showcase my skills to potential employers.",
      company: "AppVenture Tech"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials (current and next 2)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="  relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of successful students who transformed their careers with Course Land
          </p>
        </motion.div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${index === 1 ? 'lg:scale-105' : ''}`}
                >
                  <TestimonialCard testimonial={testimonial} featured={index === 1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile/Tablet View - 1 Card */}
        <div className="lg:hidden mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} featured={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaChevronLeft />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "10,000+", label: "Happy Students" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "500+", label: "Courses" },
            { number: "95%", label: "Success Rate" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, featured }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
        featured
          ? 'border-purple-500 dark:border-purple-400'
          : 'border-gray-100 dark:border-gray-700'
      } relative h-full flex flex-col`}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
        <FaQuoteLeft className="text-white text-xl" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-xl" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1 italic">
        "{testimonial.review}"
      </p>

      {/* Course Badge */}
      <div className="mb-6">
        <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
          📚 {testimonial.course}
        </span>
      </div>

      {/* Student Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-pink-500 to-purple-600 shadow-md"
        />
        <div>
          <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
            {testimonial.role}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;