import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseCard from "../../Components/CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

 
  useEffect(() => {
    fetch("http://localhost:3000/course") 
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      });
  }, []);

 
  const categoryNames = courses.map(course => course.category);
  const uniqueCategories = Array.from(new Set(categoryNames));
  const categories = ["All", ...uniqueCategories];

  // Filter courses by category
  const filteredCourses = selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          All Courses
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <ul>
                <li onClick={() => setSelectedCategory(cat)} className={`px-5 py-2  rounded-full font-medium transition-all  duration-300 ${ selectedCategory === cat
                  ? "bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </li>
            </ul>
          ))}
        </div>

        {/* Loading and Course Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading courses...</p>
        ) : filteredCourses.length === 0 ? (
          <p className="text-center text-gray-500">
            No courses found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) =><CourseCard course={course}></CourseCard> )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;


// (
//               <motion.div
//                 key={course._id || course.title}
//                 whileHover={{ scale: 1.05 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <img
//                   src={course.imageURL}
//                   alt={course.title}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-5 flex flex-col h-full">
//                   <h3 className="text-xl font-semibold mb-2">
//                     {course.title}
//                   </h3>
//                   <p className="text-gray-500 mb-1">{course.category}</p>
//                   <p className="text-pink-600 font-bold mb-2">
//                     ${course.price}
//                   </p>
//                   <p className="text-gray-600 text-sm mb-2">
//                     Duration: {course.duration}
//                   </p>
//                   <p className="text-gray-600 text-sm mb-4">
//                     Instructor: {course.instructor}
//                   </p>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-full bg-linear-to-br from-pink-500 via-purple-600 to-indigo-400 text-white px-4 py-2 rounded-md font-semibold hover:from-indigo-500 hover:to-pink-500 transition-all mt-auto"
//                   >
//                     View Details
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )