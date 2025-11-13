import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, Rocket } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-pink-500" />,
      title: "Trusted & Secure",
      badge: "Popular",
      rating: 5,
      desc: "We ensure your learning journey is safe and supported with verified instructors and secure systems.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-500" />,
      title: "Expert Instructors",
      badge: "Recommended",
      rating: 5,
      desc: "Our team consists of professionals who have real-world experience and a passion for teaching.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-indigo-500" />,
      title: "Creative Learning",
      badge: "New",
      rating: 4,
      desc: "Interactive lessons, practical projects, and fun challenges designed to keep you engaged.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-pink-600" />,
      title: "Career Growth",
      badge: "Top Rated",
      rating: 5,
      desc: "Learn powerful industry-ready skills that help you achieve your career goals faster than ever.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative container mx-auto px-4 text-center p-10">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-3">
          Why Choose Us
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-15">
          Experience next-level learning designed for dreamers and achievers. We combine innovation, creativity, and expert mentorship to guide you toward excellence.
        </p>

        {/*  Line */}
        <div className="relative flex justify-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-pink-400 via-purple-500 to-indigo-500 h-full rounded-full"></div>

          {/* Cards */}
          <div className="flex flex-col gap-10 relative z-10">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -200 : 200,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                  index % 2 === 0
                    ? "md:justify-start md:translate-x-[-150px] lg:translate-x-[-250px]"
                    : "md:justify-end md:translate-x-[150px] lg:translate-x-[250px]"
                }`}>
                <div className="bg-white/90 backdrop-blur-md border border-white/30 rounded-3xl shadow-lg hover:shadow-2xl p-6 md:p-8 max-w-sm text-left transition-all duration-300 relative">
                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.badge}
                    </div>
                  )}
                  <motion.div className="absolute top-4 right-4 opacity-70 animate-bounce">
                    {item.icon}
                  </motion.div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex items-center mt-4">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 mr-1">
                          ⭐
                        </span>
                      ))}
                      <span className="text-gray-500 text-xs ml-2">
                        {item.rating}/5 Rating
                      </span>
                    </div>
                    <button className="mt-4 px-4 py-1 rounded-full bg-pink-500 text-white text-sm hover:bg-pink-600 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;


// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, Users, Lightbulb, Rocket } from "lucide-react";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <ShieldCheck className="w-10 h-10 text-pink-500" />,
//       title: "Trusted & Secure",
//       badge: "Popular",
//       rating: 5,
//       desc: "We ensure your learning journey is safe and supported with verified instructors and secure systems.",
//     },
//     {
//       icon: <Users className="w-10 h-10 text-purple-500" />,
//       title: "Expert Instructors",
//       badge: "Recommended",
//       rating: 5,
//       desc: "Our team consists of professionals who have real-world experience and a passion for teaching.",
//     },
//     {
//       icon: <Lightbulb className="w-10 h-10 text-indigo-500" />,
//       title: "Creative Learning",
//       badge: "New",
//       rating: 4,
//       desc: "Interactive lessons, practical projects, and fun challenges designed to keep you engaged.",
//     },
//     {
//       icon: <Rocket className="w-10 h-10 text-pink-600" />,
//       title: "Career Growth",
//       badge: "Top Rated",
//       rating: 5,
//       desc: "Learn industry-ready skills that help you achieve your career goals faster than ever.",
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden">
//       <div className="relative container mx-auto px-4 text-center p-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-3">
//           Why Choose Us
//         </h2>

//         <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-15 ">
//           Experience next-level learning designed for dreamers and achievers. We combine innovation, creativity, and expert mentorship to guide you toward excellence.
//         </p>

//         <div className="relative flex justify-center">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-pink-400 via-purple-500 to-indigo-500 h-full rounded-full"></div>

//           <div className="flex flex-col gap-10 relative z-10">
//             {features.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   x: index % 2 === 0 ? -200 : 200,
//                 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 // 🔥 change: only shift from lg breakpoint (not md)
//                 className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
//                   index % 2 === 0
//                     ? "lg:justify-start lg:translate-x-[-250px]"
//                     : "lg:justify-end lg:translate-x-[250px]"
//                 }`}
//               >
//                 <div className="bg-white/90 backdrop-blur-md border border-white/30 rounded-3xl shadow-lg hover:shadow-2xl p-5 sm:p-6 md:p-7 lg:p-8 max-w-xs sm:max-w-sm md:max-w-md text-left transition-all duration-300 relative">
//                   {item.badge && (
//                     <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                       {item.badge}
//                     </div>
//                   )}
//                   <motion.div
//                     className="absolute top-4 right-4 opacity-70 animate-bounce">
//                     {item.icon}
//                   </motion.div>
//                   <div className="mt-6">
//                     <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                     <div className="flex items-center mt-4">
//                       {Array.from({ length: item.rating }).map((_, i) => (
//                         <span key={i} className="text-yellow-400 mr-1">⭐</span>
//                       ))}
//                       <span className="text-gray-500 text-xs ml-2">
//                         {item.rating}/5 Rating
//                       </span>
//                     </div>                   
//                     <button className="mt-4 px-4 py-1 rounded-full bg-pink-500 text-white text-sm hover:bg-pink-600 transition">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>              
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;
