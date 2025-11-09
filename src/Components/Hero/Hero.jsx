import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";

 const slides = [
  {
    image: hero1,
    title: "Fullstack Web Development",
    description: "Learn to build complete web applications from scratch. Master both frontend and backend development, and gain hands-on experience creating real-world projects."
  },
  {
    image: hero2,
    title: "MERN Stack Web Development",
    description: "Specialize in MongoDB, Express, React, and Node.js to develop modern, scalable, and high-performance web applications with industry-standard tools and techniques."
  },
  {
    image: hero3,
    title: "Public Speaking",
    description: "Enhance your communication skills, overcome stage fear, and learn to deliver presentations confidently in front of any audience."
  },
  {
    image: hero4,
    title: "Video Editing",
    description: "Master video editing software, create professional-quality content, and bring your creative vision to life with cinematic techniques."
  },
  {
    image: hero5,
    title: "Digital Marketing",
    description: "Learn SEO, social media marketing, email campaigns, and analytics to promote products or services effectively in the digital world."
  },
];



export default function Hero() {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;
  const containerRef = useRef(null);
  const extendedSlides = [...slides, slides[0]];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center text-center text-white overflow-hidden mb-5">
      {/* Slides container */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="relative min-w-full h-[500px] bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Animated Text & Button */}
      <div className="relative z-10 max-w-2xl mx-auto md:px-6 px-2">
       <motion.h1
  key={current}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.8, delay: 0 }} 
  className="text-3xl md:text-5xl font-bold mt-5 mb-8 text-blue-100 drop-shadow-lg title-font"
>
  {slides[current].title}
</motion.h1>

<motion.p
  key={`desc-${current}`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md"
>
  {slides[current].description}
</motion.p>

<motion.button
  key={`btn-${current}`}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.5, delay: 0.4 }} 
  className=" border px-8 py-2 rounded-full mt-10 cursor-pointer 
    bg-linear-to-br from-pink-500 via-purple-600 to-indigo-400 text-white font-medium hover:from-indigo-500 hover:to-pink-500">
  All Courses
</motion.button>
    </div>

      {/* dot slider  */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-pink-500 w-5" : "bg-gray-400 hover:bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
